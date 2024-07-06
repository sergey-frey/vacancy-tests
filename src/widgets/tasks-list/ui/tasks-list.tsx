import {
	currentDateSelector,
	setDateSelector,
	useCurrentDate,
} from "@/entities/date";
import { type TaskType, useTasksQuery } from "@/entities/tasks";
import {
	setEditingTaskSelector,
	useEditingTask,
} from "@/features/task-control";
import { isEqualDates } from "@/shared/lib/date";
import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/shared/ui/tooltip";
import { cn } from "@/shared/utils";
import { formatDate } from "date-fns";
import type { HTMLAttributes } from "react";
import { TaskItem } from "./task-item";
import { TasksNotFound } from "./tasks-not-found";

type TasksListProps = HTMLAttributes<HTMLElement> & {
	date: Date;
};

export const TasksList = ({ date, className, ...props }: TasksListProps) => {
	const setEditingTask = useEditingTask(setEditingTaskSelector);
	const { data: tasks } = useTasksQuery(date);
	const currentDate = useCurrentDate(currentDateSelector);
	const setDate = useCurrentDate(setDateSelector);
	const isCurrentDate = isEqualDates(date, currentDate);
	const isFreeDay = Boolean(tasks && tasks.length === 0);

	const handleDateClick = () => {
		setDate(date);
	};

	const handleTaskItemClick = (task: TaskType) => () => {
		setEditingTask(task);
	};

	return (
		<>
			<section {...props} className={cn("px-2", className)}>
				<div className="flex items-center">
					<TooltipProvider>
						<Tooltip delayDuration={200}>
							<TooltipTrigger asChild>
								<Button
									variant={isCurrentDate ? "default" : "ghost"}
									size={"icon"}
									className="mx-auto text-xl"
									onClick={handleDateClick}
								>
									{date.getDate()}
								</Button>
							</TooltipTrigger>
							<TooltipContent>{formatDate(date, "dd.MM.yyyy")}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>

				<Separator className="my-4" />

				{isFreeDay && <TasksNotFound>Free day</TasksNotFound>}

				<ul className="grid gap-2">
					{tasks?.map((task) => (
						<button
							key={task.id}
							type="button"
							className="text-start"
							onClick={handleTaskItemClick(task)}
						>
							<TaskItem task={task} />
						</button>
					))}
				</ul>
			</section>
		</>
	);
};
