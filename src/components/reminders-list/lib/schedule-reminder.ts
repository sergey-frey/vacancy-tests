import { ReminderType } from "@/shared/types";
import { sendNotification } from "@/shared/utils";

export const scheduleReminder = (reminder: ReminderType, cb?: () => void) => {
	const notifyTime =
		new Date(reminder.reminder_on_datetime).getTime() -
		reminder.reminder_notify_minutes * 60 * 1000;

	const delay = notifyTime - Date.now();

	if (delay <= 0 || reminder.user_notified) return;

	setTimeout(() => {
		sendNotification({
			title: "Напоминание",
			body: reminder.reminder_text || "У вас запланировано дело",
		});

		cb?.();
	}, delay);
};
