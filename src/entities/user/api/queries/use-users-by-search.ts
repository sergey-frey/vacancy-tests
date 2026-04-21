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
}: IGetUsersBySearchPayload) => {
	const fetcher = useCallback(() => {
		return userService.getBySearch({ q, skip, limit });
	}, [q, skip, limit]);

	return useFetch<IGetUsersBySearchResponse>({
		fetcher,
	});
};
