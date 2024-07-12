import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import type { TaskType } from "@/entities/tasks";
import { Button, buttonVariants } from "@/shared/ui/button";
import { cn } from "@/shared/utils";
import { isEqualDates } from "../lib/date";
import type { ComponentProps } from "react";

export type CalendarProps = Omit<
	ComponentProps<typeof DayPicker>,
	"selected" | "onSelect"
> & {
	tasks: TaskType[];
	selected: Date;
	onSelect?: (date: Date) => void;
};

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	tasks,
	onSelect,
	selected,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("p-3", className)}
			classNames={{
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				month: "space-y-4",
				caption: "flex justify-center pt-1 relative items-center",
				caption_label: "text-sm font-medium",
				nav: "space-x-1 flex items-center",
				nav_button: cn(
					buttonVariants({ variant: "outline" }),
					"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
				),
				nav_button_previous: "absolute left-1",
				nav_button_next: "absolute right-1",
				table: "w-full border-collapse space-y-1",
				head_row: "flex justify-between",
				head_cell:
					"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
				row: cn("relative flex w-full mt-2 gap-1"),
				cell: cn(
					"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
				),
				day: cn(
					buttonVariants({ variant: "ghost" }),
					"relative h-9 w-9 p-0 font-normal aria-selected:opacity-100",
				),
				day_range_end: "day-range-end",
				day_selected:
					"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
				day_today: "bg-accent text-accent-foreground",
				day_outside:
					"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
				day_disabled: "text-muted-foreground opacity-50",
				day_range_middle:
					"aria-selected:bg-accent aria-selected:text-accent-foreground",
				day_hidden: "invisible",
				...classNames,
			}}
			components={{
				IconLeft: () => <ChevronLeft className="h-4 w-4" />,
				IconRight: () => <ChevronRight className="h-4 w-4" />,
				Day: ({ date, displayMonth }) => {
					const isDisabled = date.getMonth() !== displayMonth.getMonth();

					const amountOfTasks = tasks.filter((task) => {
						return isEqualDates(task.deadline, date);
					}).length;

					const tasksMarkerLimit = 4;
					const markerOpacity = Math.min(amountOfTasks / tasksMarkerLimit, 1);

					const hasTasks = amountOfTasks > 0;
					const isActive = isEqualDates(selected, date);

					const getVariant = () => {
						if (isActive) {
							return "default";
						}

						return hasTasks ? "outline" : "ghost";
					};

					return (
						<Button
							size={"sm"}
							className="w-full h-full relative"
							variant={getVariant()}
							disabled={isDisabled}
							onClick={() => onSelect?.(date)}
						>
							{date.getDate()}
							<span
								className={cn(
									"absolute w-2 h-2 rounded-full bg-sky-500 top-0.5 right-0.5",
								)}
								style={{
									opacity: markerOpacity,
								}}
							/>
						</Button>
					);
				},
			}}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };
