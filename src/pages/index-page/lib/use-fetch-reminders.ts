import { useFetch } from "@/shared/lib/use-fetch";
import { ReminderResponseType } from "@/shared/types";

type UseFetchRemindersOptions = {
	t_user_id: number;
	token: string;
};

export const useFetchReminders = ({
	t_user_id,
	token,
}: UseFetchRemindersOptions) => {
	return useFetch<ReminderResponseType>({
		url: `${import.meta.env.VITE_API_URL}/reminders`,
		method: "POST",
		headers: {
			Authorization: `Bearer ${token ?? import.meta.env.VITE_API_TOKEN}`,
		},
		body: {
			t_user_id,
		},
	});
};
