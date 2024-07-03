import { currentDateSelector, useCurrentDate } from "@/entities/date";
import { useTasks } from "@/entities/tasks";
import { cn } from "@/shared/utils";

export const HomePage = () => {
	const currentDate = useCurrentDate(currentDateSelector);
	const { data } = useTasks(currentDate);

	return (
		<section className={cn("p-4")}>
			{data?.map((task) => (
				<div key={task.id}>{task.title}</div>
			))}
		</section>
	);
};
