import { create } from "zustand";
import type { UseCurrentDate } from "../types";

export const useCurrentDate = create<UseCurrentDate>((set) => ({
	currentDate: new Date(),
	currentDisplayMonth: new Date(),
	setDate: (date) => {
		set({ currentDate: date, currentDisplayMonth: date });
	},
	setDisplayMonth: (date) => {
		set({ currentDisplayMonth: date });
	},
}));
