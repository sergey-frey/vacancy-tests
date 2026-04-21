import type { TableProps } from "antd";
import type { IUser } from "@/entities/user";

export const COLUMNS: TableProps<IUser>["columns"] = [
	{
		title: "ID",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "Name",
		dataIndex: "firstName",
		key: "firstName",
	},
	{
		title: "Email",
		dataIndex: "email",
		key: "email",
	},
	{
		title: "Phone",
		dataIndex: "phone",
		key: "phone",
		render: (value: string) => <p className="no-wrap">{value || "-"}</p>,
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age",
	},
];

export const ITEMS_ON_PAGE_LIMITS = [10, 20, 50, 100];
