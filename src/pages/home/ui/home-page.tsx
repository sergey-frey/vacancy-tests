import { currentDateSelector, useCurrentDate } from "@/entities/date";
import { TaskEditModal } from "@/features/task-control";
import { cn } from "@/shared/utils";
import { TasksList } from "@/widgets/tasks-list";
import { addDays } from "date-fns";

const dayDifferences = [-3, -2, -1, 0, 1, 2, 3];

export const HomePage = () => {
	const currentDate = useCurrentDate(currentDateSelector);

	return (
		<>
			<TaskEditModal />
			<section className={cn("p-4", "grid grid-cols-7")}>
				{dayDifferences.map((diff) => (
					<TasksList date={addDays(currentDate, diff)} key={diff} />
				))}
			</section>
		</>
	);
};
