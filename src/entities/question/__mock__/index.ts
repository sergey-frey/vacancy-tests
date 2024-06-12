import { nanoid } from "nanoid";
import type { Question } from "../types/index";

export const _mockQuestions: Question[] = [
	{
		id: nanoid(),
		type: "input",
		text: "Почему кот иногда пытается облизать ваше лицо или волосы",
		answer: "",
	},
	{
		id: nanoid(),
		type: "textarea",
		text: "Почему кот, лёжа у вас на руках, перебирает лапами, «взбивая» что-то",
		answer: "",
	},
	{
		id: nanoid(),
		type: "checkbox",
		text: "Почему коты обычно идут на руки или ложатся на ноги того, кто их недолюбливает",
		options: ["Без понятия", "Сильно без понятия", "Ответ Б"],
		answer: [],
	},
	{
		id: nanoid(),
		type: "radio",
		text: "Почему кот пытается удариться головой о человека",
		options: ["Сумасшедшие", "А почему бы и нет", "Да"],
		answer: "",
	},
];
