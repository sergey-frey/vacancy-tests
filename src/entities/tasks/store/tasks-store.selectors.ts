import type { UseTasksStore } from "../types";

export const tasksSelector = (store: UseTasksStore) => {
	return store.tasks;
};

export const setTasksSelector = (store: UseTasksStore) => {
	return store.setTasks;
};

export const addTaskSelector = (store: UseTasksStore) => {
	return store.addTask;
};

export const removeTaskSelector = (store: UseTasksStore) => {
	return store.removeTask;
};

export const editTaskSelector = (store: UseTasksStore) => {
	return store.editTask;
};
