import { ReactNode } from "react";
import { WEEKDAYS } from "../lib/constants";

type CalendarLayoutProps = {
	monthName: ReactNode;
	fullYear: ReactNode;
	avatar: ReactNode;
	headerActions: ReactNode;
	days: ReactNode;
	collapseButton: ReactNode;
};

export const CalendarLayout = ({
	monthName,
	fullYear,
	avatar,
	headerActions,
	days,
	collapseButton,
}: CalendarLayoutProps) => {
	return (
		<article className="calendar">
			<div className="calendar__days">
				<div className="calendar__days__header">
					<h1 className="calendar__days__header__title">
						<span className="calendar__days__header__month">{monthName}</span>{" "}
						{fullYear}
					</h1>

					<div className="calendar__days__header__controls">
						{avatar}

						<div className="calendar__days__header__actions">
							{headerActions}
						</div>
					</div>
				</div>

				<div className="calendar__days__content">
					{WEEKDAYS.map((weekday, i) => {
						return (
							<div key={i} className="calendar__days__weekday">
								{weekday}
							</div>
						);
					})}

					{days}
				</div>

				<div className="calendar__days__collapse">{collapseButton}</div>
			</div>
		</article>
	);
};
