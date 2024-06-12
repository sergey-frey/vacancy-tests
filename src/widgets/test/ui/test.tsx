import { type Question, hasEmptyAnswer } from "@/entities/question";
import { Button } from "@/shared/ui/button";
import {
	currentQuestionControlsSelector,
	currentQuestionSelector,
	setAnswerSelector,
	testProgressInPercentsSelector,
	timeSelector,
} from "../store/questions.selectors";
import { useQuestionsStore } from "../store/questions.store";
import { TestAnswerView } from "./test-answer-view";
import { TestView } from "./test-view";
import { useNow } from "@/shared/lib/use-now";
import { formatTime } from "@/shared/lib/format-time";
import { Badge } from "@/shared/ui/badge";

export const Test = () => {
	const currentQuestion = useQuestionsStore(currentQuestionSelector);
	const { nextQuestion, prevQuestion } = useQuestionsStore(
		currentQuestionControlsSelector,
	);
	const setAnswer = useQuestionsStore(setAnswerSelector);
	const { testProgress, currentQuestionIndex, amountOfQuestions } =
		useQuestionsStore(testProgressInPercentsSelector);

	const { targetTime, currentTime, setTime } = useQuestionsStore(timeSelector);

	const { now, startAt } = useNow({
		delay: 1000,
		enabled: true,
		cb: (now, startAt) => {
			setTime(currentTime + now - startAt);
		},
	});

	const handleChangeAnswer = (answer: Question["answer"]) => {
		setAnswer(currentQuestion.id, answer);
	};

	const isAnswerEmpty = hasEmptyAnswer(currentQuestion);
	const remainingTime = Math.max(targetTime - now + startAt, 0);

	if (remainingTime === 0) {
		return <>Finish</>;
	}

	return (
		<TestView
			titleNode={
				<div className="flex items-center justify-between">
					<span>
						Question {currentQuestionIndex + 1}/{amountOfQuestions}
					</span>
					<Badge className="py-2 font-mono text-[14px] pointer-events-none">
						{formatTime(targetTime - currentTime)}
					</Badge>
				</div>
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
