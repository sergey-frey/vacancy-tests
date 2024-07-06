import {
	RemoveTaskBtn,
	TaskEditModal,
	editingTaskSelector,
	setEditingTaskSelector,
	useEditingTask,
} from "@/features/task-control";

export const TaskEditor = () => {
	const editingTask = useEditingTask(editingTaskSelector);
	const setEditingTask = useEditingTask(setEditingTaskSelector);

	return (
		<TaskEditModal
			actions={
				<RemoveTaskBtn
					taskId={editingTask?.id}
					variant={"destructive"}
					onClick={() => setEditingTask(null)}
				>
					Delete
				</RemoveTaskBtn>
			}
		/>
	);
};
