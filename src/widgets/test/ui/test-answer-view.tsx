import type { Question } from "@/entities/question";
import { InputTestAnswerView } from "./input-test-answer-view";
import { TextareaTestAnswerView } from "./textarea-test-answer-view";
import { CheckboxTestAnswerView } from "./checkbox-test-answer-view";
import { RadioTestAnswerView } from "./radio-test-answer-view";

type TestAnswerView = {
	question: Question;
	onChangeAnswer: (answer: Question["answer"]) => void;
};

export const TestAnswerView = ({
	question,
	onChangeAnswer,
}: TestAnswerView) => {
	switch (question.type) {
		case "input":
			return (
				<InputTestAnswerView
					placeholder={question.placeholder}
					value={question.answer}
					onChangeAnswer={onChangeAnswer}
				/>
			);
		case "textarea":
			return (
				<TextareaTestAnswerView
					className="max-h-80"
					placeholder={question.placeholder}
					value={question.answer}
					onChangeAnswer={onChangeAnswer}
				/>
			);
		case "checkbox":
			return (
				<CheckboxTestAnswerView
					options={question.options}
					value={question.answer}
					onChangeAnswer={onChangeAnswer}
				/>
			);
		case "radio":
			return (
				<RadioTestAnswerView
					options={question.options}
					value={question.answer}
					onChangeAnswer={onChangeAnswer}
				/>
			);
	}
};
