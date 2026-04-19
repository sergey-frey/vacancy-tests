import { coreApi } from "@/shared/api/instance";
import type { ICreateOrderPayload } from "../types/contracts";

export const orderService = {
	async createOrder(payload: ICreateOrderPayload) {
		const response = await coreApi
			.post("docs_sales", {
				json: payload,
			})
			.json();

		return response;
	},
};
