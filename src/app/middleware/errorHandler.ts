import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

// Custom error type
class AppError extends Error {
	public statusCode: number;
	constructor(message: string, statusCode: number = 500) {
		super(message);
		this.statusCode = statusCode;
	}
}

// Error-handling middleware
const errorHandler = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	err: any,
	req: Request,
	res: Response,

	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
	next: NextFunction,
) => {
	const statusCode = err.statusCode || 500;

	// Base error response
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const errorResponse: any = {
		message: "Validation failed",
		success: false,
		error: {
			name: err.name || "Error",
			errors: {},
		},
		stack: err.stack, // Include the stack trace
	};

	// Handle Zod validation errors
	if (err instanceof ZodError) {
		errorResponse.error.name = "ValidationError";
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		errorResponse.error.errors = err.errors.reduce((acc: any, issue) => {
			acc[issue.path.join(".")] = {
				message: issue.message,
				name: "ValidatorError",
				properties: {
					message: issue.message,
					type: issue.code,
				},
				kind: issue.code,
				path: issue.path.join("."),
				value: issue.path,
			};
			return acc;
		}, {});
	}

	// Handle Mongoose validation errors
	if (err.name === "ValidationError") {
		errorResponse.error.name = "ValidationError";
		errorResponse.error.errors = Object.keys(err.errors).reduce(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(acc: any, key: string) => {
				const validationError = err.errors[key];
				acc[key] = {
					message: validationError.message,
					name: validationError.name,
					properties: validationError.properties,
					kind: validationError.kind,
					path: validationError.path,
					value: validationError.value,
				};
				return acc;
			},
			{},
		);
	}

	// Default error message for generic errors
	if (!err.errors) {
		errorResponse.message = err.message || "Internal Server Error";
	}

	// Send the structured error response
	res.status(statusCode).json(errorResponse);
};

export { AppError, errorHandler };
