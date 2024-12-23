import { OrderControllers } from "@controllers";
import express from "express";
const router = express.Router();

router.get("/revenue", OrderControllers.getRevenue);
router.post("/", OrderControllers.createOrder);

export const OrderRoutes = router;
