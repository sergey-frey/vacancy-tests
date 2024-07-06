import { useRemoveTask } from "@/entities/tasks";
import { type ButtonProps, Button } from "@/shared/ui/button";
import type { MouseEvent } from "react";

type RemoveTaskBtnProps = ButtonProps & {
	taskId?: string;
};

export const RemoveTaskBtn = ({
	taskId,
	onClick,
	...props
}: RemoveTaskBtnProps) => {
	const { mutate } = useRemoveTask();

	const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
		onClick?.(e);

		if (!taskId) return;

		await mutate(taskId);
	};

	return <Button {...props} onClick={handleClick} />;
};
