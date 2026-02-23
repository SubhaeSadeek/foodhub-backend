import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await AuthService.createUserIntoDB(req.body);

		sendResponse(res, {
			code: 201,
			success: true,
			message: "Congratulations! User created successfully",
			data: result,
		});
	} catch (error: any) {
		next(error);
	}
};

const loginUser = async (req: Request, res: Response) => {
	try {
		const result = await AuthService.loginUserFromDB(req.body);
		res.cookie("token", result.token, {
			secure: false,
			httpOnly: true,
			sameSite: "strict",
		});
		sendResponse(res, {
			code: 200,
			success: true,
			message: "Log in has been successful",
			data: result.user,
		});
	} catch (err: any) {
		sendResponse(res, {
			code: 500,
			success: false,
			message: err?.message || "try another time, something is not working",
		});
	}
};
export const AuthController = {
	createUser,
	loginUser,
};
