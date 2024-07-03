import type { UseCurrentDate } from "../types";

export const currentDateSelector = (store: UseCurrentDate) => {
	return store.currentDate;
};

export const setDateSelector = (store: UseCurrentDate) => {
	return store.setDate;
};
