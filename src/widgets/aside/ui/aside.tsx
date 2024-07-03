import {
	currentDateSelector,
	setDateSelector,
	useCurrentDate,
} from "@/entities/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Button } from "@nextui-org/button";
import { Calendar } from "@nextui-org/calendar";
import { cn } from "@nextui-org/theme";

export const Aside = () => {
	const defaultDate = today(getLocalTimeZone());
	const currentDate = useCurrentDate(currentDateSelector);
	const setDate = useCurrentDate(setDateSelector);

	return (
		<aside className={cn("aside", "p-4", "grid gap-4")}>
			<Button color="primary">Add task</Button>

			<div>
				<Calendar
					defaultValue={defaultDate}
					value={currentDate}
					onChange={setDate}
				/>
			</div>
		</aside>
	);
};
