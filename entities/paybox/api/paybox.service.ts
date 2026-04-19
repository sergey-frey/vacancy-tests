import { coreApi } from "@/shared/api/instance";
import type { AccessByTokenPayload } from "@/shared/api/types";
import type { IGetPayboxesResponse } from "../types/contracts";

export const payboxService = {
	async getPayboxes({ token }: AccessByTokenPayload) {
		try {
			const response = await coreApi
				.get<IGetPayboxesResponse>("payboxes", {
					searchParams: {
						token,
					},
				})
				.json();

			return response;
		} catch {
			throw new Error("Failed to get payboxes");
		}
	},
};
