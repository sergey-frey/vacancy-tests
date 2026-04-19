import { coreApi } from "@/shared/api/instance";
import type { AccessByTokenPayload } from "@/shared/api/types";
import type { IGetProductsResponse } from "../types/contracts";

export const productService = {
	async getProducts({ token }: AccessByTokenPayload) {
		try {
			const response = await coreApi
				.get<IGetProductsResponse>("nomenclature", {
					searchParams: {
						token,
					},
				})
				.json();

			return response;
		} catch {
			throw new Error("Failed to get products");
		}
	},
};
