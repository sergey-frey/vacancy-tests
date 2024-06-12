import type { QuestionsStore } from "./questions.store";

export const questionsSelector = (state: QuestionsStore) => {
	return state.questions;
};

export const currentQuestionSelector = (state: QuestionsStore) => {
	return state.questions[state.currentQuestionIndex];
};

export const currentQuestionControlsSelector = (state: QuestionsStore) => {
	return {
		nextQuestion: state.nextQuestion,
		prevQuestion: state.prevQuestion,
	};
};

export const setAnswerSelector = (state: QuestionsStore) => {
	return state.setAnswer;
};

export const testProgressInPercentsSelector = (state: QuestionsStore) => {
	return {
		testProgress:
			(state.currentQuestionIndex / (state.questions.length - 1)) * 100,
		currentQuestionIndex: state.currentQuestionIndex,
		amountOfQuestions: state.questions.length,
	};
};
