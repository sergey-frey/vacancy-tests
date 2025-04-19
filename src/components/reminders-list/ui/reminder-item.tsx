import { ReminderType } from "@/shared/types";
import { getTimeDiffFormatted } from "@/shared/utils";
import { reminderDatetimeToTime } from "../lib/reminder-date";

type ReminderItemProps = {
	reminder: ReminderType;
	isShowNotice?: boolean;
};

export const ReminderItem = ({ reminder, isShowNotice }: ReminderItemProps) => {
	const timeToEvent = getTimeDiffFormatted(
		new Date(reminder.reminder_on_datetime)
	);

	return (
		<div className="reminders-item">
			{isShowNotice && (
				<div className="reminders-item__notice">
					скоро начнется: {timeToEvent}
				</div>
			)}
			<div className="reminders-item__inner">
				<span className="reminders-item__decoration"></span>
				<div className="reminders-item__content">
					<h3 className="reminders-item__title">{reminder.reminder_text}</h3>
					<time
						dateTime={reminder.reminder_on_datetime}
						className="reminders-item__time"
					>
						{reminderDatetimeToTime(reminder)}
					</time>
				</div>
			</div>
		</div>
	);
};
