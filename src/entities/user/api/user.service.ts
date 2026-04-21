import { apiInstance } from "@/shared/api/instance";
import type {
	IGetUsersBySearchPayload,
	IGetUsersBySearchResponse,
} from "../types/contracts";

export const userService = {
	getBySearch: async (
		payload: IGetUsersBySearchPayload,
	): Promise<IGetUsersBySearchResponse> => {
		const res = await apiInstance.get<IGetUsersBySearchResponse>(
			"/users/search",
			{
				params: {
					q: payload.q,
					skip: payload.skip,
					limit: payload.limit,
				},
				signal: payload.signal,
			},
		);

		return res.data;
	},
};
