import { Calendar } from "@/components/calendar";
import { addNMonth } from "@/shared/utils";
import { useState } from "react";

export const IndexPage = () => {
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

	return (
		<section className="container">
			<Calendar
				dateForDisplay={date}
				onChangeDate={setDate}
				onTodayClick={handleTodayClick}
				onPrevMonthClick={handlePrevMonthClick}
				onNextMonthClick={handleNextMonthClick}
			/>
		</section>
	);
};
