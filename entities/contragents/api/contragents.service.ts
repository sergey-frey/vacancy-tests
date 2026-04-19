import { coreApi } from "@/shared/api/instance";
import type { AccessByTokenPayload } from "@/shared/api/types";
import type { IGetContragentsResponse } from "../types/contracts";

export const contragentsService = {
	async getContragents({ token }: AccessByTokenPayload) {
		try {
			const response = await coreApi
				.get<IGetContragentsResponse>("contragents", {
					searchParams: {
						token,
					},
				})
				.json();

			console.log(response);

			return response;
		} catch {
			throw new Error("Failed to get contragents");
		}
	},
};
