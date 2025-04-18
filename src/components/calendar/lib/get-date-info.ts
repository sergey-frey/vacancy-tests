import { DAYS_PER_WEEK } from "@/shared/constants";
import {
	getAmountOfDaysInMonth,
	getFirstDayOfMonth,
	getLastDayOfMonth,
} from "@/shared/utils";

const getPreviousDays = (date: Date, n: number) => {
	const currentDate = new Date(date);
	const days: Date[] = [];

	for (let i = 0; i < n; i++) {
		currentDate.setDate(currentDate.getDate() - 1);
		days.push(new Date(currentDate));
	}

	return days;
};

const getNextDays = (date: Date, n: number) => {
	const currentDate = new Date(date);
	const days: Date[] = [];

	for (let i = 0; i < n; i++) {
		days.push(new Date(currentDate));
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return days;
};

const getDateWeakDays = (date: Date) => {
	const weekdayOfCurrentDate = date.getDay();
	const amountOfDaysAfterCurrent =
		weekdayOfCurrentDate === 1
			? DAYS_PER_WEEK
			: (8 - weekdayOfCurrentDate) % DAYS_PER_WEEK;
	const daysOfWeakBeforeCurrent = getPreviousDays(
		date,
		(weekdayOfCurrentDate + 6) % DAYS_PER_WEEK
	);
	const daysOfWeakAfterCurrent = getNextDays(date, amountOfDaysAfterCurrent);

	return [...daysOfWeakBeforeCurrent.reverse(), ...daysOfWeakAfterCurrent];
};

export const getDateInfo = (date: Date) => {
	const monthName = date.toLocaleString("ru-RU", { month: "long" });
	const fullYear = date.getFullYear();

	const firstDayOfMonth = getFirstDayOfMonth(date);
	const lastDayOfMonth = getLastDayOfMonth(date);
	const weekdayOfFirstMonthDay = firstDayOfMonth.getDay();

	const amountOfDaysFromPreviousMonth =
		(weekdayOfFirstMonthDay + 6) % DAYS_PER_WEEK;

	const amountOfDaysFromNextMonth =
		8 -
		((amountOfDaysFromPreviousMonth + getAmountOfDaysInMonth(date)) %
			DAYS_PER_WEEK);

	const days: Date[] = [
		...getPreviousDays(
			firstDayOfMonth,
			amountOfDaysFromPreviousMonth
		).reverse(),
		...getNextDays(firstDayOfMonth, getAmountOfDaysInMonth(date) - 1),
		...getNextDays(lastDayOfMonth, amountOfDaysFromNextMonth),
	];

	const currentWeak = getDateWeakDays(date);

	return {
		monthName,
		fullYear,
		days,
		currentWeak,
	};
};
