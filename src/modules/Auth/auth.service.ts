import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
const createUserIntoDB = async (payload: any) => {
	const hashPassword = await bcrypt.hash(payload.password, 12);

	const result = await prisma.user.create({
		data: { ...payload, password: hashPassword },
	});
	const { password, ...resultWithoutPassword } = result;
	return resultWithoutPassword;
};
export const AuthService = {
	createUserIntoDB,
};
