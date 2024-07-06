import { cn } from "@/shared/utils";
import type { HTMLAttributes } from "react";

type TasksNotFoundProps = HTMLAttributes<HTMLParagraphElement>;

export const TasksNotFound = ({ className, ...props }: TasksNotFoundProps) => {
	return (
		<p {...props} className={cn("text-lg text-center opacity-70", className)} />
	);
};
