import mongoose, { model, Schema } from "mongoose";
import BicycleModel from "../product/bicycle.model";
import { Order } from "./order.interface";

const orderSchema = new Schema(
	{
		// eslint-disable-next-line no-useless-escape
		email: { type: String, required: true, match: /.+\@.+\..+/ },
		product: {
			type: mongoose.Types.ObjectId,
			ref: "Bicycle",
			required: true,
			validate: {
				validator: async (value: mongoose.Types.ObjectId) => {
					const bicycleExists = await BicycleModel.exists({ _id: value });
					return bicycleExists !== null;
				},
				message: "The referenced Bicycle product does not exist.",
			},
		},
		quantity: { type: Number, required: true, min: 1 },
		totalPrice: { type: Number, required: true, min: 0 },
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

orderSchema.post("save", async function () {
	const { product } = this;
	const bicycle = await BicycleModel.findOne({
		_id: product,
		isDeleted: { $ne: true },
	});
	if (bicycle && bicycle.quantity === 0) {
		await BicycleModel.findByIdAndUpdate(
			{ _id: product },
			{ inStock: false },
			{ new: true },
		);
	}
});

const OrderModel = model<Order>("Order", orderSchema);

export default OrderModel;
