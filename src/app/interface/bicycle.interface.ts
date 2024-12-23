import { z } from "zod";

// Define the enum for bicycle types
const BicycleTypeEnum = z.enum([
	"Mountain",
	"Road",
	"Hybrid",
	"BMX",
	"Electric",
]);

// Define the Zod schema for a bicycle
export const bicycleZodSchema = z.object({
	name: z.string().min(1, "Name is required"),
	brand: z.string().min(1, "Brand is required"),
	price: z.number().positive("Price must be a positive number"),
	type: BicycleTypeEnum,
	description: z.string().min(1, "Description is required"),
	quantity: z
		.number()
		.int()
		.nonnegative("Quantity must be a non-negative integer"),
	inStock: z.boolean(),
	isDeleted: z.boolean().optional(),
});

// Infer the TypeScript type from the schema
export type Bicycle = z.infer<typeof bicycleZodSchema>;
