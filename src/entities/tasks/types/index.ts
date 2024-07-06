export type TaskType = {
	id: string;
	title: string;
	deadline: Date;
	isDone: boolean;
};

export type EditTaskDto = Omit<TaskType, "id">;

export type UseTasksStore = {
	tasks: TaskType[];
	setTasks: (tasks: TaskType[]) => void;
	addTask: (task: EditTaskDto) => void;
	removeTask: (id: string) => void;
	editTask: (id: string, dto: EditTaskDto) => void;
};
