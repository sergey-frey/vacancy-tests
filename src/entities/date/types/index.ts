import type { DateValue } from "@nextui-org/calendar";

export type UseCurrentDate = {
	currentDate: DateValue;
	setDate: (date: DateValue) => void;
};
