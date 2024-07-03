import { isEqualDates } from "@/shared/lib/date";
import type { TaskType } from "../types";

export const byDeadlineFilter = (date: Date) => (task: TaskType) => {
	console.log(task.deadline, date, isEqualDates(task.deadline, date));
	return isEqualDates(task.deadline, date);
};

export const byMonthFilter = (date: Date) => (task: TaskType) => {
	return task.deadline.getMonth() === date.getMonth();
};
