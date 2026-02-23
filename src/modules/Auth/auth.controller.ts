import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await AuthService.createUserIntoDB(req.body);

		sendResponse(res, {
			statusCode: 201,
			success: true,
			message: "Congratulations! User created successfully",
			data: result,
		});
	} catch (error: any) {
		next(error);
	}
};

export const AuthController = {
	createUser,
};
