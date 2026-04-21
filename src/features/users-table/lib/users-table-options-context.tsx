import { createContext } from "react";
import { useQueryParamState } from "@/shared/utils/use-query-param-state";
import { ITEMS_ON_PAGE_LIMITS } from "../constants";

interface IUsersTableOptionsContext {
	search: string;
	page: number;
	limit: number;
	setSearch: (search: string) => void;
	setPage: (page: number) => void;
	setLimit: (limit: number) => void;
}

export const UsersTableContext =
	createContext<IUsersTableOptionsContext | null>(null);

export const UsersTableOptionsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { state: search, setState: setSearch } = useQueryParamState<string>({
		paramKey: "q",
		defaultValue: "",
	});

	const { state: page, setState: setPage } = useQueryParamState<number>({
		paramKey: "page",
		defaultValue: 1,
	});

	const { state: limit, setState: setLimit } = useQueryParamState<number>({
		paramKey: "limit",
		defaultValue: ITEMS_ON_PAGE_LIMITS[0],
	});

	return (
		<UsersTableContext.Provider
			value={{ search, page, limit, setSearch, setPage, setLimit }}
		>
			{children}
		</UsersTableContext.Provider>
	);
};
