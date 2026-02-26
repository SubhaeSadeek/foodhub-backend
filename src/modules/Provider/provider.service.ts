import { prisma } from "../../lib/prisma";

const createProviderProfileIntoDB = async (payload: any) => {
	const result = await prisma.providerProfile.create({
		data: { ...payload },
	});
	return result;
};

export const ProviderService = {
	createProviderProfileIntoDB,
};
