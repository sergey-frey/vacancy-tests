import { Nullable, ReminderResponseType, ReminderType } from "@/shared/types";
import { apiDateToISO, keys, stripTime } from "@/shared/utils";

export const mapRemindersToDates = (
	response: Nullable<ReminderResponseType>
) => {
	if (!response) return null;

	const remindersResponseKeys = keys(response.reminders);
	const remindersMap = new Map<string, ReminderType[]>();

	for (const key of remindersResponseKeys) {
		const reminder = response.reminders[key];
		const reminderDateString = stripTime(
			new Date(apiDateToISO(reminder.reminder_on_datetime))
		).toISOString();

		if (remindersMap.has(reminderDateString)) {
			remindersMap.get(reminderDateString)?.push({ id: key, ...reminder });
		} else {
			remindersMap.set(reminderDateString, [{ id: key, ...reminder }]);
		}
	}

	return remindersMap;
};
