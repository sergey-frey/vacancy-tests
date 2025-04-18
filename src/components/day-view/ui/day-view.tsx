import { TimeHTMLAttributes } from "react";
import "../styles/day-view.css";
import { cn } from "@/shared/utils";

type DayViewProps = TimeHTMLAttributes<HTMLTimeElement> & {
	amountOfEvents?: number;
	date: Date;
	isCurrentDate?: boolean;
};

export const DayView = ({
	amountOfEvents = 0,
	isCurrentDate,
	className,
	date,
	...props
}: DayViewProps) => {
	const day = date.getDate();
	const amountOfEventsForDisplay = amountOfEvents === 0 ? -1 : amountOfEvents;

	return (
		<time {...props} className={cn("day-view", className)}>
			<span className={cn("day-view__day", isCurrentDate && "current-day")}>
				{day}
			</span>

			<span
				className="day-view__events-indicator"
				style={{ ["--amount-of-events"]: amountOfEventsForDisplay }}
			/>
		</time>
	);
};
