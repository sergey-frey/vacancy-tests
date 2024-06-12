import type { Question } from "../types";

export const hasEmptyAnswer = (question: Question) => {
	switch (question.type) {
		case "input":
			return question.answer === "";
		case "textarea":
			return question.answer === "";
		case "checkbox":
			return question.answer.length === 0;
		case "radio":
			return question.answer === "";
	}
};
