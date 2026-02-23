import { Response } from "express";

type TResponse<T> = {
	code: number;
	success: boolean;
	message: string;
	data?: T;
};

const sendResponse = <T>(res: Response, responseHeader: TResponse<T>) => {
	const { code, success, message, data: Result } = responseHeader;

	res.status(code).json({
		success,
		message,
		data: Result,
	});
};

export default sendResponse;
