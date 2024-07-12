import {
	currentDateSelector,
	setDateSelector,
	useCurrentDate,
} from "@/entities/date";
import { type TaskType, useTasksQuery } from "@/entities/tasks";
import {
	AddTaskBtn,
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
			<section
				{...props}
				className={cn("flex flex-col px-2 overflow-hidden", className)}
			>
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

				<Separator className="my-3" />

				<AddTaskBtn
					date={date}
					editAfterCreate
					className={cn("w-full hidden", "xl:block")}
					variant={"outline"}
					size={"sm"}
				>
					+ Add task
				</AddTaskBtn>

				{isFreeDay && <TasksNotFound className="mt-5">Free day</TasksNotFound>}

				<div className="grow relative mt-3">
					<ul
						className={cn(
							"flex flex-col grow gap-2 items-start",
							"absolute top-0 left-0 bottom-0 right-0",
							"overflow-auto",
						)}
					>
						{tasks?.map((task) => (
							<button
								key={task.id}
								type="button"
								className="text-start w-full"
								onClick={handleTaskItemClick(task)}
							>
								<TaskItem task={task} />
							</button>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};
