import { useCallback } from "react";
import { useFetch } from "@/shared/utils/use-fetch";
import type {
	IGetUsersBySearchPayload,
	IGetUsersBySearchResponse,
} from "../../types/contracts";
import { userService } from "../user.service";

export const useUsersBySearch = ({
	q,
	skip,
	limit,
	signal,
}: IGetUsersBySearchPayload) => {
	const fetcher = useCallback(() => {
		return userService.getBySearch({ q, skip, limit, signal });
	}, [q, skip, limit, signal]);

	return useFetch<IGetUsersBySearchResponse>({
		fetcher,
	});
};
