import { Request, Response } from "express";
import BicycleModel from "../product/bicycle.model";
import { OrderValidationZodSchema } from "./order.interface";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
	try {
		const orderData = req.body;
		const validatedData = OrderValidationZodSchema.parse(orderData);

		// const { product, quantity, totalPrice } = validatedData;
		const { product, quantity, totalPrice } = validatedData;

		if (!(await BicycleModel.isExist(product))) {
			throw new Error("This bicycle does not exist.");
		}
		if (!(await BicycleModel.inStock(product))) {
			throw new Error("This bicycle is stock out.");
		}
		if ((await BicycleModel.getQuantity(product)) < quantity) {
			throw new Error("The bicycle is in low stock.");
		}
		if (!((await BicycleModel.getPrice(product)) * quantity === totalPrice)) {
			throw new Error("The price calculation is worng.");
		}
		try {
			await BicycleModel.reduceQuantity(product, quantity);
		} catch (error) {
			// console.log(error);
			res.status(200).json({
				success: false,
				message: "Something went worng",
				error,
			});
		}

		const result = await OrderServices.createOrderIntoDB(validatedData);

		res.status(200).json({
			success: true,
			message: "Order is created successfully",
			data: result,
		});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || "Something went wrong with Order creation.",
			error,
		});
	}
};

const getRevenue = async (req: Request, res: Response) => {
	try {
		const result = await OrderServices.calculateRevenue();

		res.status(200).json({
			success: true,
			message: "Revenue calculated successfully",
			data: { totalRevenue: result },
		});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message:
				error.message || "Something went wrong with Revenue calculation.",
			error,
		});
	}
};

export const OrderControllers = {
	createOrder,
	getRevenue,
};
