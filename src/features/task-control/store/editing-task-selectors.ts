import type { UseEditingTask } from "../types";

export const editingTaskSelector = (store: UseEditingTask) => {
	return store.task;
};

export const setEditingTaskSelector = (store: UseEditingTask) => {
	return store.setTask;
};
