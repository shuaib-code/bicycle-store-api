import express from "express";
import { OrderControllers } from "./order.controller";
const router = express.Router();

router.get("/revenue", OrderControllers.getRevenue);
router.post("/", OrderControllers.createOrder);

export const OrderRoutes = router;
