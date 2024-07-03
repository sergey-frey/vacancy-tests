import type { DateValue } from "@nextui-org/calendar";
import { useQuery } from "@tanstack/react-query";
import { TASKS } from "../__mock__/tasks";
import { byDeadlineFilter, byMonthFilter } from "./tasks-filters";

const TasksQueryKey = "tasks";

export const useTasks = (date: DateValue) => {
	return useQuery({
		queryFn: async () => {
			return TASKS.filter(byDeadlineFilter(date));
		},
		queryKey: [TasksQueryKey, date.toString()],
	});
};

export const useTasksInMonth = (date: DateValue) => {
	return useQuery({
		queryFn: async () => {
			return TASKS.filter(byMonthFilter(date));
		},
		queryKey: [TasksQueryKey, date.month],
	});
};
