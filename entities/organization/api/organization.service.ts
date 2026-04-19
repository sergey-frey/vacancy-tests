import { coreApi } from "@/shared/api/instance";
import type { AccessByTokenPayload } from "@/shared/api/types";
import type { IGetOrganizationsResponse } from "../types/contracts";

export const organizationService = {
	async getOrganizations({ token }: AccessByTokenPayload) {
		try {
			const response = await coreApi
				.get<IGetOrganizationsResponse>("organizations", {
					searchParams: {
						token,
					},
				})
				.json();

			return response;
		} catch {
			throw new Error("Failed to get organizations");
		}
	},
};
