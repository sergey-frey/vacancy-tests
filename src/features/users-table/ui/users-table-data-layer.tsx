import { type ReactNode, use } from "react";
import { useUsersTable } from "../lib/use-users-table";
import { UsersTableContext } from "../lib/users-table-options-context";

interface IProps {
	children: (data: ReturnType<typeof useUsersTable>) => ReactNode;
}

export const UsersTableDataLayer = ({ children }: IProps) => {
	const { search, page, limit, setPage } = use(UsersTableContext);

	const result = useUsersTable({
		search,
		page,
		limit,
		setPage,
	});

	return children(result);
};
