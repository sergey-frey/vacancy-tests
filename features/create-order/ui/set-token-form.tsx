"use client";

import { redirect } from "next/navigation";
import { type SubmitEvent, useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

interface IProps {
	initialToken?: string;
}

export const SetTokenForm = ({ initialToken }: IProps) => {
	const [token, setToken] = useState(initialToken || "");

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		redirect(`/${token}`);
	};

	return (
		<form className={["flex w-full gap-2"]} onSubmit={handleSubmit}>
			<Input
				value={token}
				onChange={(e) => setToken(e.target.value)}
				placeholder="Введите токен"
			/>

			<Button type="submit">Подключить</Button>
		</form>
	);
};
