import { nanoid } from "nanoid";
import type { TaskType } from "../types";

export const TASKS: TaskType[] = [
	{
		id: nanoid(),
		title: "Task 1",
		deadline: new Date("2024-07-06"),
		isDone: false,
	},
	{
		id: nanoid(),
		title: "Task 2",
		deadline: new Date("2024-07-07"),
		isDone: true,
	},
	{
		id: nanoid(),
		title: "Task 3",
		deadline: new Date("2024-07-07"),
		isDone: false,
	},
];
