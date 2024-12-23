import { OrderValidationZodSchema } from "@interface";
import { BicycleModel } from "@models";
import { OrderServices } from "@services";
import { NextFunction, Request, Response } from "express";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const orderData = req.body;
		const validatedData = OrderValidationZodSchema.parse(orderData);

		const { product, quantity, totalPrice } = validatedData;

		// Check if the bicycle exists
		if (!(await BicycleModel.isExist(product))) {
			throw new Error("This bicycle does not exist.");
		}

		// Check if the bicycle is in stock
		if (!(await BicycleModel.inStock(product))) {
			throw new Error("This bicycle is out of stock.");
		}

		// Check if the requested quantity is available
		if ((await BicycleModel.getQuantity(product)) < quantity) {
			throw new Error("The bicycle is in low stock.");
		}

		// Validate the total price calculation
		if ((await BicycleModel.getPrice(product)) * quantity !== totalPrice) {
			throw new Error("The price calculation is incorrect.");
		}

		// Reduce the stock quantity
		await BicycleModel.reduceQuantity(product, quantity);

		// Create the order
		const result = await OrderServices.createOrderIntoDB(validatedData);

		res.status(200).json({
			success: true,
			message: "Order is created successfully",
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const getRevenue = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// Calculate revenue
		const result = await OrderServices.calculateRevenue();

		res.status(200).json({
			success: true,
			message: "Revenue calculated successfully",
			data: { totalRevenue: result },
		});
	} catch (error) {
		next(error);
	}
};

export const OrderControllers = {
	createOrder,
	getRevenue,
};
