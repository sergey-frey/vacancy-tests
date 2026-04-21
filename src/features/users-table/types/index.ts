import type { IUser } from "@/entities/user";

export type ColumnType = {
	title: string;
	dataIndex: keyof IUser;
	key: keyof IUser;
};
