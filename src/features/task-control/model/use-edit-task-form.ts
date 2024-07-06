import { useEditTaskMutation, type TaskType } from "@/entities/tasks";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
	EditTaskFormSchema,
	type EditTaskFormSchemaType,
} from "./edit-task-form-schema";

type UseEditTaskFormOptions = {
	task: TaskType | null;
	onSubmit?: () => void;
};

export const useEditTaskForm = ({
	task,
	onSubmit: onSubmitCb = () => {},
}: UseEditTaskFormOptions) => {
	const { handleSubmit, formState, watch, ...form } =
		useForm<EditTaskFormSchemaType>({
			mode: "onBlur",
			defaultValues: {
				title: "",
				isDone: false,
			},
			values: {
				title: task?.title ?? "",
				isDone: task?.isDone ?? false,
			},
			resolver: valibotResolver(EditTaskFormSchema),
		});
	const { mutate } = useEditTaskMutation(task?.id ?? "", {
		title: watch("title"),
		isDone: watch("isDone"),
		deadline: task?.deadline ?? new Date(),
	});

	const onSubmit = handleSubmit(async () => {
		await mutate();
		onSubmitCb();
	});

	return {
		onSubmit,
		formState,
		...form,
	};
};
