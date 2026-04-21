import { Button, Input } from "antd";
import { type SubmitEvent, use, useState } from "react";
import { UsersTableContext } from "../lib/users-table-options-context";

interface IProps {
	refetch: () => void;
}

export const UsersTableSearchForm = ({ refetch }: IProps) => {
	const { search, setSearch, setPage } = use(UsersTableContext);

	const [formSearch, setFormSearch] = useState(search);

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (typeof formSearch !== "string") {
			return;
		}

		if (search === formSearch) {
			refetch();
		}

		setSearch(formSearch);
		setPage(1);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input.Search
				value={formSearch}
				onChange={(e) => setFormSearch(e.target.value)}
				placeholder="Search..."
				enterButton={<Button htmlType="submit">Search</Button>}
			/>
		</form>
	);
};
