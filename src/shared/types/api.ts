export type ReminderType = {
	id: `${number}`;
	reminder_ai_text: string;
	reminder_created_at: string;
	reminder_notify_minutes: number;
	reminder_on_datetime: string;
	reminder_text: string;
	user_notified: boolean;
};

export type ReminderResponseType = {
	reminders: { [key: `${number}`]: Omit<ReminderType, "id"> };
	status: string;
	token: string;
};
