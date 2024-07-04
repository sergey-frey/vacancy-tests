import {
	currentDateSelector,
	displayMonthSelector,
	setDateSelector,
	setDisplayMonthSelector,
	useCurrentDate,
} from "@/entities/date";
import { useTasksInMonth } from "@/entities/tasks";
import { Button } from "@/shared/ui/button";
import { Calendar } from "@/shared/ui/calendar";
import { cn } from "@/shared/utils";

export const Aside = () => {
	const currentDate = useCurrentDate(currentDateSelector);
	const setDate = useCurrentDate(setDateSelector);
	const displayMonth = useCurrentDate(displayMonthSelector);
	const setDisplayMonth = useCurrentDate(setDisplayMonthSelector);
	const { data: tasks } = useTasksInMonth(currentDate);

	return (
		<aside className={cn("aside", "p-4", "grid gap-4")}>
			<Button>Add task</Button>

			<div>
				<Calendar
					mode="single"
					selected={currentDate}
					onSelect={setDate}
					tasks={tasks ?? []}
					month={displayMonth}
					onMonthChange={setDisplayMonth}
				/>
			</div>
		</aside>
	);
};
