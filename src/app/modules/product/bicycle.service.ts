import { Bicycle } from "./bicycle.interface";
import BicycleModel from "./bicycle.model";

const createBicycleIntoDB = async (bicycle: Bicycle) => {
	const result = await BicycleModel.create(bicycle);
	return result;
};

const getAllBicyclesFromDB = async () => {
	const result = await BicycleModel.find();
	return result;
};

const getSingleBicycleFromDB = async (_id: string) => {
	const result = await BicycleModel.findOne({ _id });
	return result;
};

const updateBicycleFromDB = async (_id: string, data: Partial<Bicycle>) => {
	const result = await BicycleModel.findByIdAndUpdate(_id, data, { new: true });
	return result;
};

const deleteBicycleFromDB = async (_id: string) => {
	const result = await BicycleModel.updateOne({ _id }, { isDeleted: true });
	return result;
};

export const BicycleServices = {
	createBicycleIntoDB,
	getAllBicyclesFromDB,
	getSingleBicycleFromDB,
	updateBicycleFromDB,
	deleteBicycleFromDB,
};
