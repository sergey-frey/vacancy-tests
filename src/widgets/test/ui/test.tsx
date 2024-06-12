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
import { TestFinishView } from "./test-finish-view";

export const Test = () => {
	const currentQuestion = useQuestionsStore(currentQuestionSelector);
	const { nextQuestion, prevQuestion } = useQuestionsStore(
		currentQuestionControlsSelector,
	);
	const setAnswer = useQuestionsStore(setAnswerSelector);
	const { testProgress, currentQuestionIndex, amountOfQuestions } =
		useQuestionsStore(testProgressInPercentsSelector);

	const { targetTime, currentTime, remainingTime, setTime } =
		useQuestionsStore(timeSelector);

	const { reset } = useNow({
		delay: 1000,
		enabled: currentTime < targetTime,
		cb: (now, startAt) => {
			setTime(
				Math.min(
					targetTime,
					currentTime + Math.floor((now - startAt) / 1000) * 1000,
				),
			);
		},
	});

	const handleChangeAnswer = (answer: Question["answer"]) => {
		setAnswer(currentQuestion.id, answer);
	};

	const isAnswerEmpty = hasEmptyAnswer(currentQuestion);

	if (remainingTime === 0) {
		return (
			<TestFinishView
				onResetTimer={() => {
					reset();
					setTime(0);
				}}
			/>
		);
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
