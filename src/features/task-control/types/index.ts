import type { TaskType } from "@/entities/tasks";

export type UseEditingTask = {
	task: TaskType | null;
	setTask: (task: TaskType | null) => void;
};
