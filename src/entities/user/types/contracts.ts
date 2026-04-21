import type { IRequestWithAbortSignal } from "@/shared/api/types";
import type { IUser } from "./models";

export interface IGetUsersBySearchPayload extends IRequestWithAbortSignal {
	q: string;
	skip: number;
	limit: number;
}

export interface IGetUsersBySearchResponse {
	total: number;
	skip: number;
	limit: number;
	users: IUser[];
}
