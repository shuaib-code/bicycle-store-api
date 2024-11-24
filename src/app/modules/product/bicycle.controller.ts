import { NextFunction, Request, Response } from "express";
import { bicycleZodSchema } from "./bicycle.interface";
import BicycleModel from "./bicycle.model";
import { BicycleServices } from "./bicycle.service";

const createBicycle = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const bicycleData = req.body;

		// Validate bicycle data before sending to the database
		const validatedData = bicycleZodSchema.parse(bicycleData);

		// Call to BicycleServices to create a bicycle
		const result = await BicycleServices.createBicycleIntoDB(validatedData);

		res.status(200).json({
			success: true,
			message: "Bicycle is created successfully",
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const getAllBicycles = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { name, brand, type } = req.query;
		const query: { name?: object; brand?: object; type?: object } = {};

		if (name) {
			query.name = { $regex: name, $options: "i" };
		}
		if (brand) {
			query.brand = { $regex: brand, $options: "i" };
		}
		if (type) {
			query.type = { $regex: type, $options: "i" };
		}

		const result = await BicycleServices.getAllBicyclesFromDB(query);
		res.status(200).json({
			success: true,
			message: "Bicycles retrieved successfully",
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const getSingleBicycle = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { productId } = req.params;

		if (!(await BicycleModel.isExist(productId))) {
			throw new Error("This bicycle does not exist.");
		}

		const result = await BicycleServices.getSingleBicycleFromDB(productId);

		res.status(200).json({
			success: true,
			message: "Bicycle retrieved successfully",
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const updateBicycle = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { productId } = req.params;
		const bicycleData = req.body;

		if (!(await BicycleModel.isExist(productId))) {
			throw new Error("This bicycle does not exist.");
		}

		// Validate bicycle data before sending to the database
		const validatedData = bicycleZodSchema.partial().parse(bicycleData);

		// Call to BicycleServices to update a bicycle
		const result = await BicycleServices.updateBicycleFromDB(
			productId,
			validatedData,
		);

		res.status(200).json({
			success: true,
			message: "Bicycle updated successfully",
			data: result,
		});
	} catch (error) {
		next(error);
	}
};

const deleteBicycle = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { productId } = req.params;

		if (!(await BicycleModel.isExist(productId))) {
			throw new Error("This bicycle does not exist.");
		}

		const result = await BicycleServices.deleteBicycleFromDB(productId);

		if (result.modifiedCount === 1) {
			res.status(200).json({
				success: true,
				message: "Bicycle deleted successfully",
				data: {},
			});
		}
	} catch (error) {
		next(error);
	}
};

export const BicycleControllers = {
	createBicycle,
	getAllBicycles,
	getSingleBicycle,
	updateBicycle,
	deleteBicycle,
};
