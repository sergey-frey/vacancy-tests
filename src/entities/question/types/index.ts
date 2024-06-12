export type QuestionType = "input" | "textarea" | "checkbox" | "radio";

type QuestionBase<T extends QuestionType> = {
	id: string;
	type: T;
	text: string;
};

export type InputQuestion = QuestionBase<"input"> & {
	placeholder?: string;
	answer: string;
};

export type TextareaQuestion = QuestionBase<"textarea"> & {
	placeholder?: string;
	answer: string;
};

export type CheckboxQuestion = QuestionBase<"checkbox"> & {
	options: string[];
	answer: string[];
};

export type RadioQuestion = QuestionBase<"radio"> & {
	options: string[];
	answer: string;
};

export type Question =
	| InputQuestion
	| TextareaQuestion
	| CheckboxQuestion
	| RadioQuestion;
