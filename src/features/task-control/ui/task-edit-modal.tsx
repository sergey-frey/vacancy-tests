import { Checkbox } from "@/shared/ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import type { DialogProps } from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { type ReactNode, useId } from "react";
import {
	editingTaskSelector,
	setEditingTaskSelector,
} from "../store/editing-task-selectors";
import { useEditingTask } from "../store/use-editing-task";
import { Controller } from "react-hook-form";
import { useEditTaskForm } from "../model/use-edit-task-form";
import { Button } from "@/shared/ui/button";

type TaskEditModalProps = DialogProps & {
	actions?: ReactNode;
};

export const TaskEditModal = ({ actions, ...props }: TaskEditModalProps) => {
	const editingTask = useEditingTask(editingTaskSelector);
	const setEditingTask = useEditingTask(setEditingTaskSelector);
	const checkboxId = useId();
	const formId = useId();
	const inputId = useId();
	const { onSubmit, control } = useEditTaskForm({
		task: editingTask,
		onSubmit: () => setEditingTask(null),
	});

	if (!editingTask) {
		return null;
	}

	return (
		<Dialog
			{...props}
			open={Boolean(editingTask)}
			onOpenChange={() => setEditingTask(null)}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Task editing</DialogTitle>
					<DialogDescription>
						{format(editingTask.deadline, "dd.MM.yyyy")}
					</DialogDescription>
				</DialogHeader>

				<form id={formId} onSubmit={onSubmit}>
					<div>
						<Controller
							control={control}
							name="title"
							render={({ field, fieldState }) => {
								const hasError = Boolean(fieldState.error);

								return (
									<>
										<Input id={inputId} {...field} placeholder="Title" />
										{hasError && (
											<Label
												htmlFor={inputId}
												className="text-xs text-rose-500"
											>
												{fieldState.error?.message}
											</Label>
										)}
									</>
								);
							}}
						/>
					</div>

					<div className="flex gap-2 items-center mt-3">
						<Controller
							control={control}
							name="isDone"
							render={({ field }) => {
								return (
									<Checkbox
										checked={field.value}
										id={checkboxId}
										onCheckedChange={field.onChange}
									/>
								);
							}}
						/>
						<Label htmlFor={checkboxId}>Done</Label>
					</div>
				</form>

				<DialogFooter>
					<Button type="submit" form={formId}>
						Save
					</Button>
					{actions}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
