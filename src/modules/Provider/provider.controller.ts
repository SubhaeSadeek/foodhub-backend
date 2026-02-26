import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { ProviderService } from "./provider.service";

const createProviderPrifile = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const result = await ProviderService.createProviderProfileIntoDB(req.body);
		sendResponse(res, {
			code: 201,
			success: true,
			message: "Congratulations! Provider Profile created successfully",
			data: result,
		});
	} catch (err: any) {
		next(err);
	}
};

export const ProviderController = {
	createProviderPrifile,
};
