import { nanoid } from "nanoid";
import type { Question } from "../types/index";

export const _mockQuestions: Question[] = [
	{
		id: nanoid(),
		type: "input",
		text: "Question 1",
		answer: "",
	},
	{
		id: nanoid(),
		type: "textarea",
		text: "Question 2",
		answer: "",
	},
	{
		id: nanoid(),
		type: "checkbox",
		text: "Question 3",
		options: ["Option 1", "Option 2", "Option 3"],
		answer: [],
	},
	{
		id: nanoid(),
		type: "radio",
		text: "Question 4",
		options: ["Option 1", "Option 2", "Option 3"],
		answer: "",
	},
];
