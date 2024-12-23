import { BicycleControllers } from "@controllers";
import express from "express";

const router = express.Router();

router
	.route("/")
	.post(BicycleControllers.createBicycle)
	.get(BicycleControllers.getAllBicycles);

router
	.route("/:productId")
	.get(BicycleControllers.getSingleBicycle)
	.put(BicycleControllers.updateBicycle)
	.delete(BicycleControllers.deleteBicycle);

export const BicycleRoutes = router;
