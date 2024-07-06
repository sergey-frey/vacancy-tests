import { currentDateSelector, useCurrentDate } from "@/entities/date";
import { cn } from "@/shared/utils";
import { TaskEditor } from "@/widgets/task-editor";
import { TasksList } from "@/widgets/tasks-list";
import { addDays } from "date-fns";

const dayDifferences = [-3, -2, -1, 0, 1, 2, 3];

export const HomePage = () => {
	const currentDate = useCurrentDate(currentDateSelector);

	return (
		<>
			<TaskEditor />
			<section className={cn("p-4 grow", "grid grid-cols-7")}>
				{dayDifferences.map((diff) => (
					<TasksList
						date={addDays(currentDate, diff)}
						key={diff}
						className="grow"
					/>
				))}
			</section>
		</>
	);
};
