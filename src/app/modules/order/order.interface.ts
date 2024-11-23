import { z } from "zod";

// Define the validation schema
export const OrderValidationZodSchema = z.object({
	email: z.string().email(),
	product: z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId"), // Validates MongoDB ObjectId
	quantity: z.number().min(1, "Quantity must be at least 1"),
	totalPrice: z.number().min(0, "Total price must be non-negative"),
});

// Infer TypeScript type from Zod schema
export type Order = z.infer<typeof OrderValidationZodSchema>;
