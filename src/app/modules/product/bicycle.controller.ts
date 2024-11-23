import { Request, Response } from "express";
import { bicycleZodSchema } from "./bicycle.interface";
import BicycleModel from "./bicycle.model";
import { BicycleServices } from "./bicycle.service"; // Import the BicycleServices

const createBicycle = async (req: Request, res: Response) => {
	try {
		const bicycleData = req.body;

		// validate bicycle data before sending to database
		const validatedData = bicycleZodSchema.parse(bicycleData);

		// Call to BicycleServices to create a bicycle
		const result = await BicycleServices.createBicycleIntoDB(validatedData);

		res.status(200).json({
			success: true,
			message: "Bicycle is created successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: "Something went wrong with bicycle creation.",
			error,
		});
	}
};

const getAllBicycles = async (req: Request, res: Response) => {
	try {
		const result = await BicycleServices.getAllBicyclesFromDB();

		res.status(200).json({
			success: true,
			message: "Bicycles are retrieved successfully",
			data: result,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Something went wrong while retrieving bicycles.",
			error,
		});
	}
};

const getSingleBicycle = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;

		if (!(await BicycleModel.isExist(productId))) {
			throw new Error("This bicycle does not exist.");
		}

		const result = await BicycleServices.getSingleBicycleFromDB(productId);

		res.status(200).json({
			success: true,
			message: "Bicycle is retrieved successfully",
			data: result,
		});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		res.status(500).json({
			success: false,
			message:
				error.message || "Something went wrong while retrieving the bicycle.",
			error,
		});
	}
};

const updateBicycle = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;
		const bicycleData = req.body;

		if (!(await BicycleModel.isExist(productId))) {
			throw new Error("This bicycle does not exist.");
		}

		// validate bicycle data before sending to database
		const validatedData = bicycleZodSchema.partial().parse(bicycleData);

		// Call to BicycleServices to create a bicycle
		const result = await BicycleServices.updateBicycleFromDB(
			productId,
			validatedData,
		);

		res.status(200).json({
			success: true,
			message: "Bicycle is updated successfully",
			data: result,
		});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		res.status(400).json({
			success: false,
			message: error.message || "Something went wrong during bicycle update.",
			error,
		});
	}
};

const deleteBicycle = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params;

		const result = await BicycleServices.deleteBicycleFromDB(productId);

		res.status(200).json({
			success: true,
			message: "Bicycle is deleted successfully",
			data: result,
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: "Something went wrong during bicycle delection.",
			error,
		});
	}
};

export const BicycleControllers = {
	createBicycle,
	getAllBicycles,
	getSingleBicycle,
	updateBicycle,
	deleteBicycle,
};
