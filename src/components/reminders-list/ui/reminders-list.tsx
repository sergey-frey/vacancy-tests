import { ReminderType } from "@/shared/types";
import { cn } from "@/shared/utils";
import { HTMLAttributes } from "react";
import { useReminderNotifications } from "../lib/use-reminders-notifications";
import "../styles/reminders-list.css";
import { ReminderItem } from "./reminder-item";

type RemindersListProps = HTMLAttributes<HTMLElement> & {
	dateForDisplay: Date;
	reminders: ReminderType[];
};

export const RemindersList = ({
	className,
	dateForDisplay,
	reminders,
	...props
}: RemindersListProps) => {
	const formattedDate = dateForDisplay.toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "long",
	});

	const { notificationMap } = useReminderNotifications(reminders);

	const isRemindersEmpty = reminders.length === 0;

	return (
		<article {...props} className={cn("reminders-list", className)}>
			<h2 className="reminders-list__title">{formattedDate}</h2>

			<div className="reminders-list__content">
				{isRemindersEmpty && (
					<p className="reminders-list__empty">Сегодня событий нет</p>
				)}

				<ul className="reminders-list__items">
					{reminders.map((reminder, i) => {
						return (
							<li key={i}>
								<ReminderItem
									reminder={reminder}
									isShowNotice={notificationMap[reminder.id]}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</article>
	);
};
