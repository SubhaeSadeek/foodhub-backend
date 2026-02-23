import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";
import { prisma } from "../../lib/prisma";
const createUserIntoDB = async (payload: any) => {
	const hashPassword = await bcrypt.hash(payload.password, 12);

	const result = await prisma.user.create({
		data: { ...payload, password: hashPassword },
	});
	const { password, ...resultWithoutPassword } = result;
	return resultWithoutPassword;
};

const loginUserFromDB = async (payload: any) => {
	const user = await prisma.user.findUnique({
		where: {
			email: payload.email,
		},
	});
	if (!user) {
		throw new Error("User not found");
	}
	const matchPassword = await bcrypt.compare(payload.password, user.password);
	if (!matchPassword) {
		throw new Error("Please give correct password");
	}
	const jwtPayload = {
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.role,
		status: user.status,
	};
	// const jwtSecret = "04333816da7ae01b48524af3fe33b467";

	const token = jwt.sign(jwtPayload, config.jwtSecret as string, {
		expiresIn: "7d",
	});
	console.log(token);
	const { password, ...userDataWithoutPassword } = user;
	return { token, user: userDataWithoutPassword };
};
export const AuthService = {
	createUserIntoDB,
	loginUserFromDB,
};
