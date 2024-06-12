import { type Question, hasEmptyAnswer } from "@/entities/question";
import { Button } from "@/shared/ui/button";
import {
	currentQuestionControlsSelector,
	currentQuestionSelector,
	setAnswerSelector,
	testProgressInPercentsSelector,
} from "../store/questions.selectors";
import { useQuestionsStore } from "../store/questions.store";
import { TestAnswerView } from "./test-answer-view";
import { TestView } from "./test-view";

export const Test = () => {
	const currentQuestion = useQuestionsStore(currentQuestionSelector);
	const { nextQuestion, prevQuestion } = useQuestionsStore(
		currentQuestionControlsSelector,
	);
	const setAnswer = useQuestionsStore(setAnswerSelector);
	const { testProgress, currentQuestionIndex, amountOfQuestions } =
		useQuestionsStore(testProgressInPercentsSelector);

	const handleChangeAnswer = (answer: Question["answer"]) => {
		setAnswer(currentQuestion.id, answer);
	};

	const isAnswerEmpty = hasEmptyAnswer(currentQuestion);

	return (
		<TestView
			titleNode={
				<h3>
					Question {currentQuestionIndex + 1}/{amountOfQuestions}
				</h3>
			}
			question={currentQuestion}
			progress={testProgress}
			controls={
				<div className="w-full flex gap-2 justify-between">
					<Button variant={"outline"} onClick={() => prevQuestion()}>
						Prevent
					</Button>

					<Button
						variant={"default"}
						onClick={() => nextQuestion()}
						disabled={isAnswerEmpty}
					>
						Next
					</Button>
				</div>
			}
			answer={
				<TestAnswerView
					question={currentQuestion}
					onChangeAnswer={handleChangeAnswer}
				/>
			}
		/>
	);
};
