import { prisma } from "../../lib/prisma";

const createMealIntoDB = async (payload: any) => {
	const result = await prisma.meal.create({
		data: { ...payload },
	});
	return result;
};
export const MealService = {
	createMealIntoDB,
};
