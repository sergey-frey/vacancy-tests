import { DayView } from "@/components/day-view";
import { LeftArrowIcon } from "@/shared/assets/icons/left-arrow-icon";
import { RightArrowIcon } from "@/shared/assets/icons/right-arrow-icon";
import { UpArrowIcon } from "@/shared/assets/icons/up-arrow-icon";
import avatar from "@/shared/assets/images/avatar.png";
import { DAYS_PER_WEEK } from "@/shared/constants";
import { Avatar, Button } from "@/shared/ui";
import { areDatesEqualByDay, cn } from "@/shared/utils";
import { useState } from "react";
import { getDateInfo } from "../lib/get-date-info";
import { isDaysFromEqualMonth } from "../lib/is-days-from-equal-monts";
import "../styles/calendar.css";
import { CalendarLayout } from "./calendar-layout";

type CalendarProps = {
	dateForDisplay: Date;
	onChangeDate: (date: Date) => void;
	onTodayClick: () => void;
	onPrevMonthClick: () => void;
	onNextMonthClick: () => void;
};

export const Calendar = ({
	dateForDisplay,
	onChangeDate,
	onTodayClick,
	onPrevMonthClick,
	onNextMonthClick,
}: CalendarProps) => {
	const [isFullMonthView, setIsFullMonthView] = useState(false);
	const { monthName, fullYear, days, currentWeak } =
		getDateInfo(dateForDisplay);

	const daysForDisplay = isFullMonthView ? days : currentWeak;
	const collapseButtonTitle = isFullMonthView
		? "Свернуть календарь"
		: "Развернуть календарь";

	const handleCollapseClick = () => {
		setIsFullMonthView((prev) => !prev);
	};

	const handleDayClick = (date: Date) => {
		onChangeDate(date);
	};

	return (
		<CalendarLayout
			monthName={monthName}
			fullYear={fullYear}
			avatar={<Avatar size="s" src={avatar} />}
			headerActions={
				<>
					<Button
						size="m"
						isIconOnly
						title={"Предыдущий месяц"}
						onClick={onPrevMonthClick}
					>
						<LeftArrowIcon />
					</Button>
					<Button
						size="m"
						isIconOnly
						title={"Следующий месяц"}
						onClick={onNextMonthClick}
					>
						<RightArrowIcon />
					</Button>
					<Button size="m" onClick={onTodayClick} title={"Сегодня"}>
						Сегодня
					</Button>
				</>
			}
			days={daysForDisplay.map((day, i) => {
				const isFirstRow = i < DAYS_PER_WEEK;
				const isFromCurrentMonth = isDaysFromEqualMonth(day, dateForDisplay);
				const isCurrentDate = areDatesEqualByDay(day, dateForDisplay);

				return (
					<button
						key={i}
						onClick={() => handleDayClick(day)}
						className="calendar__days__day-button"
						title={day.toDateString()}
						aria-label={day.toDateString()}
					>
						<DayView
							date={day}
							amountOfEvents={3}
							isCurrentDate={isCurrentDate}
							className={cn(
								"calendar__days__day",
								isFirstRow && "is-first-row",
								!isFromCurrentMonth && "from-different-month"
							)}
						/>
					</button>
				);
			})}
			collapseButton={
				<Button
					isIconOnly
					size="m"
					className={cn(
						"calendar__days__collapse__button",
						isFullMonthView && "to-close"
					)}
					onClick={handleCollapseClick}
					title={collapseButtonTitle}
				>
					<UpArrowIcon />
				</Button>
			}
		/>
	);
};
