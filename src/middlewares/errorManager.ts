import { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client";

export function errorHandler(
	err: any,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	let responseCode = 500;
	let errorText = "Internal server Error!";

	if (err instanceof Prisma.PrismaClientValidationError) {
		responseCode = 400;
		errorText = "Invalid input data or field. Please check your request body.";
	} else if (
		err instanceof Prisma.PrismaClientKnownRequestError &&
		err.code === "P2002"
	) {
		responseCode = 400;
		errorText = `already exists, duplicate value: ${err.meta?.target}`;
	} else if (
		err instanceof Prisma.PrismaClientKnownRequestError &&
		err.code === "P2003"
	) {
		responseCode = 400;
		errorText =
			"Invalid reference ID or foreign key mismatched. Please provide rigth foreign key";
	} else if (err.message) {
		errorText = err.message;
	}

	res.status(responseCode);
	res.json({ success: false, message: errorText });
}
