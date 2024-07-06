import { create } from "zustand";
import type { UseEditingTask } from "../types";

export const useEditingTask = create<UseEditingTask>((set) => ({
	task: null,
	setTask: (task) => set({ task }),
}));
