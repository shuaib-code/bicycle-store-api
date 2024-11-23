import cors from "cors";
import express, { Application, Request, Response } from "express";
import path from "path";
import { OrderRoutes } from "./app/modules/order/order.route";
import { BicycleRoutes } from "./app/modules/product/bicycle.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", BicycleRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.resolve(__dirname, "./app/index.html"));
});

export default app;
