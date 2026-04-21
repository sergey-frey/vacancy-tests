import { Table } from "antd";
import { use, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { IUser } from "@/entities/user";
import {
	COLUMNS,
	ITEMS_ON_PAGE_LIMITS,
} from "@/features/users-table/constants";
import { UsersTableContext } from "../lib/users-table-options-context";
import { UsersTableErrorFallback } from "./users-table-error-fallback";

interface IProps {
	users: IUser[];
	total: number;
	isLoading?: boolean;
}

export const UsersTable = ({ users, total, isLoading }: IProps) => {
	const { page, limit, setPage, setLimit } = use(UsersTableContext);

	const usersWithKey = useMemo(() => {
		if (!users) {
			return [];
		}

		return users.map((user) => ({ ...user, key: user.id }));
	}, [users]);

	return (
		<ErrorBoundary fallback={<UsersTableErrorFallback />}>
			<Table
				columns={COLUMNS}
				dataSource={usersWithKey}
				loading={isLoading}
				pagination={{
					placement: ["bottomCenter"],
					total,
					pageSizeOptions: ITEMS_ON_PAGE_LIMITS,
					current: page,
					pageSize: limit,
					onChange: (page, limit) => {
						setLimit(limit);
						setPage(page);
					},
				}}
			/>
		</ErrorBoundary>
	);
};
