import { coreApi } from "@/shared/api/instance";
import type { AccessByTokenPayload } from "@/shared/api/types";
import type { IGetWarehousesResponse } from "../types/contracts";

export const warehouseService = {
	async getWarehouses({ token }: AccessByTokenPayload) {
		try {
			const response = await coreApi
				.get<IGetWarehousesResponse>("warehouses", {
					searchParams: {
						token,
					},
				})
				.json();

			return response;
		} catch {
			throw new Error("Failed to get warehouses");
		}
	},
};
