import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { MealService } from "./meal.service";

const createMeal = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await MealService.createMealIntoDB(req.body);
		sendResponse(res, {
			code: 200,
			success: true,
			message: "Congratulations! Meal created successfully",
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

export const MealController = {
	createMeal,
};
