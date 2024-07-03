import { nanoid } from "nanoid";
import type { TaskType } from "../types";
import { parseDate } from "@internationalized/date";

export const TASKS: TaskType[] = [
	{
		id: nanoid(),
		title: "Task 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		deadline: new Date("2024-07-02"),
		isDone: false,
	},
	{
		id: nanoid(),
		title: "Task 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		deadline: new Date("2024-07-03"),
		isDone: true,
	},
	{
		id: nanoid(),
		title: "Task 3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		deadline: new Date("2024-07-03"),
		isDone: false,
	},
];
