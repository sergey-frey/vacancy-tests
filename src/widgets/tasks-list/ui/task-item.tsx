import type { TaskType } from "@/entities/tasks";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { cn } from "@/shared/utils";

type TaskItemProps = { task: TaskType };

export const TaskItem = ({ task: { title, isDone } }: TaskItemProps) => {
	const cardStatus = isDone ? "Done" : "In progress";

	return (
		<Card>
			<CardHeader className={cn("p-1.5", "lg:p-4")}>
				<CardTitle className={cn("text-sm truncate", "lg:text-lg")}>
					{title}
				</CardTitle>
				<CardDescription
					className={cn("font-medium truncate", isDone && "text-green-500")}
				>
					{cardStatus}
				</CardDescription>
			</CardHeader>
		</Card>
	);
};
