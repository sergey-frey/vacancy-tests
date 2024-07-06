import { useAddTask } from "@/entities/tasks";
import { Button, type ButtonProps } from "@/shared/ui/button";
import type { MouseEvent } from "react";
import { setEditingTaskSelector } from "../store/editing-task-selectors";
import { useEditingTask } from "../store/use-editing-task";

type AddTaskBtnProps = ButtonProps & {
	date: Date;
	editAfterCreate?: boolean;
};

export const AddTaskBtn = ({
	onClick,
	date,
	editAfterCreate = false,
	...props
}: AddTaskBtnProps) => {
	const setEditingTask = useEditingTask(setEditingTaskSelector);
	const { mutate, data } = useAddTask();

	const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
		onClick?.(e);

		await mutate({
			title: "New task",
			isDone: false,
			deadline: date,
		});

		if (editAfterCreate && data) {
			setEditingTask(data);
		}
	};

	return <Button {...props} onClick={handleClick} />;
};
