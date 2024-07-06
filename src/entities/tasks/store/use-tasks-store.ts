import { nanoid } from "nanoid";
import { create } from "zustand";
import { TASKS } from "../__mock__/tasks";
import type { UseTasksStore } from "../types";

export const useTasksStore = create<UseTasksStore>((set) => ({
	tasks: TASKS,

	setTasks: (tasks) => set({ tasks }),

	addTask: (task) => {
		const newTask = { id: nanoid(), ...task };
		set((state) => ({ tasks: [...state.tasks, newTask] }));
		return newTask;
	},

	removeTask: (id) =>
		set((state) => ({
			tasks: state.tasks.filter((task) => task.id !== id),
		})),

	editTask: (id, dto) => {
		set((state) => {
			return {
				tasks: state.tasks.map((task) => {
					if (task.id === id) {
						return { ...task, ...dto };
					}

					return task;
				}),
			};
		});

		return {
			id,
			...dto,
		};
	},
}));
