import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { CategoryService } from "./category.service";

const createCategory = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const result = await CategoryService.createCategoryIntoDB(req.body);
		sendResponse(res, {
			code: 201,
			success: true,
			message: "Congratulations! Meal Category created successfully",
			data: result,
		});
	} catch (err: any) {
		sendResponse(res, {
			code: 500,
			success: false,
			message: err.message,
		});
	}
};

export const CategoryController = {
	createCategory,
};
