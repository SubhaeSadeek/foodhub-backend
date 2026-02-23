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
	let detailsError = err;

	if (err instanceof Prisma.PrismaClientValidationError) {
		((responseCode = 400),
			(errorText =
				"Please send correct information in the body as some fileds are missing"));
	}

	res.status(responseCode);
	res.json({ success: false, meeage: errorText, error: detailsError });
}
