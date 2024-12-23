/* eslint-disable no-console */
import dotenv from "dotenv";
import path from "path";
import { z } from "zod";

dotenv.config({ path: path.join(process.cwd(), ".env") });

// Define a schema for environment variables
const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	PORT: z.coerce.number().min(1).max(65535).default(3000),
	DATABASE_URL: z.string().url(),
});

// Validate the environment variables
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error("Environment validation failed:", parsedEnv.error.format());
	process.exit(1);
}

export const env = parsedEnv.data;
