import { ReminderType } from "@/shared/types";
import { useEffect, useState } from "react";
import { scheduleReminder } from "./schedule-reminder";

export const useReminderNotifications = (reminders: ReminderType[]) => {
	const [notificationMap, setNotificationMap] = useState<
		Record<ReminderType["id"], boolean>
	>(
		reminders.reduce((acc, reminder) => ({ ...acc, [reminder.id]: false }), {})
	);

	useEffect(() => {
		const notify = () => {
			for (const reminder of reminders) {
				scheduleReminder(reminder, () => {
					setNotificationMap((prev) => ({
						...prev,
						[reminder.id]: true,
					}));
				});
			}
		};

		notify();
	}, [reminders]);

	return { notificationMap };
};
