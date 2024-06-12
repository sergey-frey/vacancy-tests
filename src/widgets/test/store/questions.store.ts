import { type Question, _mockQuestions } from "@/entities/question";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type QuestionsStore = {
	questions: Question[];
	currentQuestionIndex: number;
	setAnswer: (questionId: Question["id"], answer: Question["answer"]) => void;
	nextQuestion: () => void;
	prevQuestion: () => void;
};

export const useQuestionsStore = create<QuestionsStore>()(
	persist(
		(set, get) => ({
			questions: _mockQuestions,
			currentQuestionIndex: 0,
			setAnswer: (questionId, answer) => {
				const newQuestions = get().questions.map((question) => {
					if (question.id === questionId) {
						return { ...question, answer };
					}

					return question;
				});

				set({ questions: newQuestions as Question[] });
			},
			nextQuestion: () => {
				set({
					currentQuestionIndex: Math.min(
						get().currentQuestionIndex + 1,
						get().questions.length - 1,
					),
				});
			},
			prevQuestion: () => {
				set({
					currentQuestionIndex: Math.max(get().currentQuestionIndex - 1, 0),
				});
			},
		}),
		{
			name: "questions",
		},
	),
);
