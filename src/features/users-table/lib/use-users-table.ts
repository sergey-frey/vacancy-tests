import { useEffect, useRef } from "react";
import { useUsersBySearch } from "@/entities/user";
import { useDebouncedState } from "@/shared/utils/use-debounce";

interface IOptions {
	search: string;
	page: number;
	limit: number;
}

export const useUsersTable = ({ search, page, limit }: IOptions) => {
	const debouncedSearch = useDebouncedState(search, 200);
	const debouncedPage = useDebouncedState(page, 200);

	const abortController = useRef<AbortController | null>(new AbortController());

	const { data, refetch, ...rest } = useUsersBySearch({
		q: search,
		skip: (page - 1) * limit,
		limit,
		signal: abortController.current.signal,
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		refetch();

		return () => {
			abortController.current?.abort();
			abortController.current = new AbortController();
		};
	}, [debouncedSearch, debouncedPage, limit]);

	return { data, refetch, ...rest };
};
