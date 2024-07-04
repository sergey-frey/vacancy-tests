import type { UseCurrentDate } from "../types";

export const currentDateSelector = (store: UseCurrentDate) => {
	return store.currentDate;
};

export const setDateSelector = (store: UseCurrentDate) => {
	return store.setDate;
};

export const displayMonthSelector = (store: UseCurrentDate) => {
	return store.currentDisplayMonth;
};

export const setDisplayMonthSelector = (store: UseCurrentDate) => {
	return store.setDisplayMonth;
};
