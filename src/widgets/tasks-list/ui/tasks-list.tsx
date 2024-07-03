import {
	currentDateSelector,
	setDateSelector,
	useCurrentDate,
} from "@/entities/date";
import { useTasks } from "@/entities/tasks";
import { isEqualDates } from "@/shared/lib/date";
import { Separator } from "@/shared/ui/separator";
import { cn } from "@/shared/utils";
import type { HTMLAttributes } from "react";
import { TaskItem } from "./task-item";
import { Button } from "@/shared/ui/button";

type TasksListProps = HTMLAttributes<HTMLElement> & {
	date: Date;
};

export const TasksList = ({ date, className, ...props }: TasksListProps) => {
	const { data: tasks } = useTasks(date);
	const currentDate = useCurrentDate(currentDateSelector);
	const setDate = useCurrentDate(setDateSelector);
	const isCurrentDate = isEqualDates(date, currentDate);

	const handleDateClick = () => {
		setDate(date);
	};

	return (
		<section {...props} className={cn("px-2", className)}>
			<div className="flex items-center">
				<Button
					variant={isCurrentDate ? "default" : "ghost"}
					size={"icon"}
					className="mx-auto text-xl"
					onClick={handleDateClick}
				>
					{date.getDate()}
				</Button>
			</div>

			<Separator className="my-4" />

			<ul className="grid gap-2">
				{tasks?.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</ul>
		</section>
	);
};
