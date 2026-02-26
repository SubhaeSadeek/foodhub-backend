import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createProviderProfileIntoDB = async (payload: any) => {
	try {
		const result = await prisma.providerProfile.create({
			data: { ...payload },
		});
		return result;
	} catch (err: any) {
		if (err instanceof Prisma.PrismaClientKnownRequestError) {
			if (err.code === "P2002") {
				throw new Error("Provider profile already exists for this user.");
			}
		}

		throw new Error("Something went wrong while creating provider profile.");
	}
};

export const ProviderService = {
	createProviderProfileIntoDB,
};
