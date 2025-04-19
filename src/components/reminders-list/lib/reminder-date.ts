import { ReminderType } from "@/shared/types";
import { apiDateToISO, getTime } from "@/shared/utils";

export const reminderDatetimeToTime = (reminder: ReminderType) => {
	return getTime(new Date(apiDateToISO(reminder.reminder_on_datetime)));
};
