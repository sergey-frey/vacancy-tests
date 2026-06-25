import { create } from "zustand";
import type { QueueTask, QueueTaskStatus } from "./types";

interface QueueStore {
  tasks: QueueTask[];
  addTask: (task: Omit<QueueTask, "progress" | "status" | "createdAt">) => void;
  updateProgress: (id: string, progress: number, estimatedTime: number) => void;
  completeTask: (id: string) => void;
  errorTask: (id: string, error: string) => void;
  removeTask: (id: string) => void;
  clearCompleted: () => void;
  retryTask: (id: string) => void;
}

export const useQueueStore = create<QueueStore>((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [
        {
          ...task,
          progress: 0,
          status: "queued" as QueueTaskStatus,
          createdAt: Date.now(),
        },
        ...state.tasks,
      ],
    })),

  updateProgress: (id, progress, estimatedTime) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              progress,
              estimatedTime,
              status: "in_progress" as QueueTaskStatus,
            }
          : t,
      ),
    })),

  completeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id
          ? { ...t, progress: 100, status: "completed" as QueueTaskStatus }
          : t,
      ),
    })),

  errorTask: (id, error) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, status: "error" as QueueTaskStatus, error } : t,
      ),
    })),

  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),

  clearCompleted: () =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.status !== "completed"),
    })),

  retryTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              status: "queued" as QueueTaskStatus,
              progress: 0,
              error: undefined,
            }
          : t,
      ),
    })),
}));
