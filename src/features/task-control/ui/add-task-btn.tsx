import { currentDateSelector, useCurrentDate } from "@/entities/date";
import { useAddTask } from "@/entities/tasks";
import { Button, type ButtonProps } from "@/shared/ui/button";
import type { MouseEvent } from "react";
import { useEditingTask } from "../store/use-editing-task";
import { setEditingTaskSelector } from "../store/editing-task-selectors";

type AddTaskBtnProps = ButtonProps & {
	editAfterCreate?: boolean;
};

export const AddTaskBtn = ({
	onClick,
	editAfterCreate = false,
	...props
}: AddTaskBtnProps) => {
	const currentDate = useCurrentDate(currentDateSelector);
	const setEditingTask = useEditingTask(setEditingTaskSelector);
	const { mutate, data } = useAddTask();

	const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
		onClick?.(e);

		await mutate({
			title: "New task",
			isDone: false,
			deadline: currentDate,
		});

		if (editAfterCreate && data) {
			setEditingTask(data);
		}
	};

	return <Button {...props} onClick={handleClick} />;
};
