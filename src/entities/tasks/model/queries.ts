import { queryClient } from "@/shared/constants/query-client";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addTaskSelector,
  editTaskSelector,
  removeTaskSelector,
  tasksSelector,
} from "../store/tasks-store.selectors";
import { useTasksStore } from "../store/use-tasks-store";
import type { EditTaskDto } from "../types";
import { byDeadlineFilter, byMonthFilter } from "./tasks-filters";

const TasksQueryKey = "tasks";

export const useTasksQuery = (date: Date) => {
	const tasks = useTasksStore(tasksSelector);

	return useQuery({
		queryFn: async () => {
			return tasks.filter(byDeadlineFilter(date));
		},
		queryKey: [TasksQueryKey, date.toDateString()],
	});
};

export const useTasksInMonthQuery = (date: Date) => {
	const tasks = useTasksStore(tasksSelector);

	return useQuery({
		queryFn: async () => {
			return tasks.filter(byMonthFilter(date));
		},
		queryKey: [TasksQueryKey],
	});
};

export const useEditTaskMutation = () => {
	const editTask = useTasksStore(editTaskSelector);

	return useMutation({
		mutationFn: async ({ id, dto }: { id: string; dto: EditTaskDto }) => {
			editTask(id, dto);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [TasksQueryKey],
			});
		},
	});
};

export const useAddTask = () => {
	const addTask = useTasksStore(addTaskSelector);

	return useMutation({
		mutationFn: async (task: EditTaskDto) => {
			return addTask(task);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [TasksQueryKey],
			});
		},
	});
};

export const useRemoveTask = () => {
	const removeTask = useTasksStore(removeTaskSelector);

	return useMutation({
		mutationFn: async (id: string) => {
			removeTask(id);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [TasksQueryKey],
			});
		},
	});
};
