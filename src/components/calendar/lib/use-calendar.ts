import { useState } from "react";
import { getDateInfo } from "./get-date-info";

export const useCalendar = (date: Date) => {
	const [isFullMonthView, setIsFullMonthView] = useState(false);
	const { monthName, fullYear, days, currentWeak } = getDateInfo(date);

	const daysForDisplay = isFullMonthView ? days : currentWeak;
	const collapseButtonTitle = isFullMonthView
		? "Свернуть календарь"
		: "Развернуть календарь";

	const toggleFullMonthView = () => {
		setIsFullMonthView((prev) => !prev);
	};

	return {
		isFullMonthView,
		toggleFullMonthView,
		daysForDisplay,
		collapseButtonTitle,
		monthName,
		fullYear,
	};
};
