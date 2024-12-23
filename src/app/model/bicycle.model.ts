/* eslint-disable no-unused-vars */
import { Bicycle } from "@interface";
import mongoose, { Model, model, Schema } from "mongoose";

interface TBicycleMethod extends Model<Bicycle> {
	isExist(productId: string): Promise<boolean>;
	inStock(productId: string): Promise<boolean>;
	getQuantity(productId: string): Promise<number>;
	getPrice(productId: string): Promise<number>;
	reduceQuantity(productId: string, amount: number): Promise<boolean>;
	markOutOfStock(productId: string): Promise<boolean>;
}

// Define the bicycleSchema for mongoose model
const bicycleSchema = new Schema<Bicycle>(
	{
		name: { type: String, required: true },
		brand: { type: String, required: true },
		price: { type: Number, required: true, min: 0 },
		type: {
			type: String,
			enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
			required: true,
		},
		description: { type: String, required: true },
		quantity: { type: Number, required: true, min: 0, integer: true },
		inStock: { type: Boolean, required: true },
		isDeleted: { type: Boolean, default: false },
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

bicycleSchema.pre(
	/^(find|findOne|update|updateOne|findOneAndUpdate|deleteOne)$/,
	function (next) {
		if (this instanceof mongoose.Query) {
			this.where({ isDeleted: { $ne: true } });
		}
		next();
	},
);

bicycleSchema.statics.isExist = async function (_id: string): Promise<boolean> {
	const bicycle = await this.findOne({ _id, isDeleted: { $ne: true } });
	return !!bicycle;
};

bicycleSchema.statics.inStock = async function (_id: string): Promise<boolean> {
	const bicycle = await this.findOne({
		_id,
		inStock: true,
		isDeleted: { $ne: true },
	});
	return !!bicycle; // Returns true if the bicycle exists and is in stock, otherwise false
};

bicycleSchema.statics.getQuantity = async function (
	productId: string,
): Promise<number> {
	const bicycle = await this.findOne({
		_id: productId,
		isDeleted: { $ne: true },
	});
	return bicycle ? bicycle.quantity : 0;
};

bicycleSchema.statics.getPrice = async function (
	productId: string,
): Promise<number> {
	const bicycle = await this.findOne({
		_id: productId,
		isDeleted: { $ne: true },
	});
	return bicycle.price;
};

bicycleSchema.statics.markOutOfStock = async function (
	_id: string,
): Promise<boolean> {
	const bicycle = await this.findOneAndUpdate(
		{ _id, isDeleted: { $ne: true } }, // Find bicycle that's not deleted
		{ $set: { inStock: false } }, // Update `inStock` to false
		{ new: true }, // Return the updated document
	);

	return !!bicycle; // Return true if the operation was successful, false otherwise
};

// Static method to reduce the quantity of a specific bicycle
bicycleSchema.statics.reduceQuantity = async function (
	productId: string,
	amount: number,
): Promise<boolean> {
	const bicycle = await this.findOne({
		_id: productId,
		isDeleted: { $ne: true },
	});
	if (!bicycle || bicycle.quantity < amount) {
		return false; // Not enough stock or bicycle not found
	}
	bicycle.quantity -= amount;
	bicycle.inStock = bicycle.quantity > 0;
	await bicycle.save();
	return true;
};

export const BicycleModel = model<Bicycle, TBicycleMethod>(
	"Bicycle",
	bicycleSchema,
);
