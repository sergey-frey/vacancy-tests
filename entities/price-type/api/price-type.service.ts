import { coreApi } from "@/shared/api/instance";
import type { AccessByTokenPayload } from "@/shared/api/types";
import type { IGetPriceTypesResponse } from "../types/contracts";

export const priceTypeService = {
	async getPriceTypes({ token }: AccessByTokenPayload) {
		try {
			const response = await coreApi
				.get<IGetPriceTypesResponse>("price_types", {
					searchParams: {
						token,
					},
				})
				.json();

			return response;
		} catch {
			throw new Error("Failed to get price types");
		}
	},
};
