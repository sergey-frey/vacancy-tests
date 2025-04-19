import { Calendar } from "@/components/calendar";
import { RemindersList } from "@/components/reminders-list";
import { getCredentialsFromUrl } from "@/shared/lib/get-credentials-from-url";
import { stripTime } from "@/shared/utils";
import { mapRemindersToDates } from "../lib/map-reminders-to-dates";
import { useCalendarDate } from "../lib/use-calendar-date";
import { useFetchReminders } from "../lib/use-fetch-reminders";
import "../styles/index-page.css";

export const IndexPage = () => {
	const {
		date,
		handleNextMonthClick,
		handlePrevMonthClick,
		handleTodayClick,
		handleChangeDate,
	} = useCalendarDate();

	const { data: reminders, isLoading: isRemindersLoading } = useFetchReminders(
		getCredentialsFromUrl()
	);

	const remindersMap = mapRemindersToDates(reminders);

	const currentReminders =
		remindersMap?.get(stripTime(date).toISOString()) ?? [];

	return (
		<section className="container">
			<Calendar
				dateForDisplay={date}
				onChangeDate={handleChangeDate}
				onTodayClick={handleTodayClick}
				onPrevMonthClick={handlePrevMonthClick}
				onNextMonthClick={handleNextMonthClick}
				remindersMap={remindersMap}
				isLoading={isRemindersLoading}
			/>

			<RemindersList
				className="main__reminders-list"
				dateForDisplay={date}
				reminders={currentReminders}
				isLoading={isRemindersLoading}
			/>
		</section>
	);
};
