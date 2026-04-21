import { useEffect } from "react";
import { useUsersBySearch } from "@/entities/user";
import { useDebouncedState } from "@/shared/utils/use-debounce";

interface IOptions {
	search: string;
	page: number;
	limit: number;
	setPage: (page: number) => void;
}

export const useUsersTable = ({ search, page, limit, setPage }: IOptions) => {
	const debouncedSearch = useDebouncedState(search, 200);
	const debouncedPage = useDebouncedState(page, 200);

	const { data, refetch, ...rest } = useUsersBySearch({
		q: search,
		skip: (page - 1) * limit,
		limit,
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		refetch();
	}, [debouncedSearch, debouncedPage, limit]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!data?.total || !data?.skip) {
			return;
		}

		if (data.skip < data.total) {
			return;
		}

		setPage(Math.ceil(data.total / limit));
	}, [data?.total, data?.skip, limit]);

	return { data, refetch, ...rest };
};
