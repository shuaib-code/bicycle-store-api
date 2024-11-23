import { Order } from "./order.interface";
import OrderModel from "./order.model";

const createOrderIntoDB = async (order: Order) => {
	const result = await OrderModel.create(order);
	return result;
};

const calculateRevenue = async () => {
	const result = await OrderModel.aggregate([
		{
			$group: {
				_id: null,
				totalPriceAll: { $sum: "$totalPrice" },
			},
		},
	]);
	const totalRevenue = result.length > 0 ? result[0].totalPriceAll : 0;
	return totalRevenue;
};

export const OrderServices = {
	createOrderIntoDB,
	calculateRevenue,
};
