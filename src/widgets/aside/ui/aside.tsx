import {
	currentDateSelector,
	displayMonthSelector,
	setDateSelector,
	setDisplayMonthSelector,
	useCurrentDate,
} from "@/entities/date";
import { useTasksInMonthQuery } from "@/entities/tasks";
import {
	isShowAsideSelector,
	toggleShowAsideSelector,
	useShowAside,
} from "@/features/show-aside";
import { AddTaskBtn } from "@/features/task-control";
import { Calendar } from "@/shared/ui/calendar";
import { Sheet, SheetContent } from "@/shared/ui/sheet";
import { cn } from "@/shared/utils";

export const AsideContent = () => {
	const currentDate = useCurrentDate(currentDateSelector);
	const setDate = useCurrentDate(setDateSelector);
	const displayMonth = useCurrentDate(displayMonthSelector);
	const setDisplayMonth = useCurrentDate(setDisplayMonthSelector);
	const { data: tasks } = useTasksInMonthQuery(currentDate);

	return (
		<>
			<AddTaskBtn
				date={currentDate}
				editAfterCreate
				className="block w-full xl:hidden"
			>
				Add task
			</AddTaskBtn>

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
		</>
	);
};

export const Aside = () => {
	const isShowAside = useShowAside(isShowAsideSelector);
	const toggleShowAside = useShowAside(toggleShowAsideSelector);

	return (
		<>
			<Sheet open={isShowAside} onOpenChange={toggleShowAside}>
				<SheetContent side={"left"} className="w-auto block xl:hidden">
					<aside
						className={cn(
							"aside",
							"p-4",
							"flex flex-col items-center gap-4",
							"min-w-[230px]",
						)}
					>
						<AsideContent />
					</aside>
				</SheetContent>
			</Sheet>

			<aside
				className={cn(
					"aside",
					"p-4",
					"flex-col gap-4",
					"min-w-[230px] hidden",
					"xl:flex",
				)}
			>
				<AsideContent />
			</aside>
		</>
	);
};
