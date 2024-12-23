import { AppError, errorHandler } from "@middlewares";
import { BicycleRoutes, OrderRoutes } from "@routes";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { homepaga } from "./app/html";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", BicycleRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
	res.send(homepaga);
});

app.use((req: Request, res: Response, next) => {
	next(new AppError("Route not found", 404));
});

app.use(errorHandler);

export default app;
