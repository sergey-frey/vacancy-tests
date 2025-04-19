import { addNMonth } from "@/shared/utils";
import { useState } from "react";

export const useCalendarDate = () => {
	const [date, setDate] = useState(new Date());

	const handleTodayClick = () => {
		setDate(new Date());
	};

	const handleNextMonthClick = () => {
		setDate((prev) => addNMonth(prev, 1));
	};

	const handlePrevMonthClick = () => {
		setDate((prev) => addNMonth(prev, -1));
	};

	const handleChangeDate = (date: Date) => {
		setDate(date);
	};

	return {
		date,
		setDate,
		handleTodayClick,
		handleNextMonthClick,
		handlePrevMonthClick,
		handleChangeDate,
	};
};
