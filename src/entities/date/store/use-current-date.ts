import { getLocalTimeZone, today } from "@internationalized/date";
import type { DateValue } from "@nextui-org/calendar";
import { create } from "zustand";
import type { UseCurrentDate } from "../types";

export const useCurrentDate = create<UseCurrentDate>((set) => ({
	currentDate: today(getLocalTimeZone()),
	setDate: (date: DateValue) => {
		set({ currentDate: date });
	},
}));
