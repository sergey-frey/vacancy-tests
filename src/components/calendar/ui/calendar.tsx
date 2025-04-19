import { DayView } from "@/components/day-view";
import { LeftArrowIcon } from "@/shared/assets/icons/left-arrow-icon";
import { RightArrowIcon } from "@/shared/assets/icons/right-arrow-icon";
import { UpArrowIcon } from "@/shared/assets/icons/up-arrow-icon";
import avatar from "@/shared/assets/images/avatar.png";
import { DAYS_PER_WEEK } from "@/shared/constants";
import { Nullable } from "@/shared/types";
import { Avatar, Button } from "@/shared/ui";
import { areDatesEqualByDay, cn } from "@/shared/utils";
import { isDaysFromEqualMonth } from "../lib/is-days-from-equal-monts";
import { useCalendar } from "../lib/use-calendar";
import "../styles/calendar.css";
import { CalendarLayout } from "./calendar-layout";

type CalendarProps<T = unknown> = {
	dateForDisplay: Date;
	onChangeDate: (date: Date) => void;
	onTodayClick: () => void;
	onPrevMonthClick: () => void;
	onNextMonthClick: () => void;
	remindersMap: Nullable<Map<string, T[]>>;
	isLoading?: boolean;
};

export const Calendar = function <T = unknown>({
	dateForDisplay,
	onChangeDate,
	onTodayClick,
	onPrevMonthClick,
	onNextMonthClick,
	remindersMap,
	isLoading,
}: CalendarProps<T>) {
	const {
		monthName,
		fullYear,
		daysForDisplay,
		isFullMonthView,
		toggleFullMonthView,
		collapseButtonTitle,
	} = useCalendar(dateForDisplay);

	return (
		<CalendarLayout
			isLoading={isLoading}
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
				const amountOfEvents =
					remindersMap?.get(day.toISOString())?.length ?? 0;

				return (
					<button
						key={i}
						onClick={() => onChangeDate(day)}
						className="calendar__days__day-button"
						title={day.toDateString()}
						aria-label={day.toDateString()}
					>
						<DayView
							date={day}
							amountOfEvents={amountOfEvents}
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
					onClick={toggleFullMonthView}
					title={collapseButtonTitle}
				>
					<UpArrowIcon />
				</Button>
			}
		/>
	);
};
