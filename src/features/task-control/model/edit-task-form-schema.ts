import {
	type InferInput,
	boolean,
	minLength,
	object,
	pipe,
	string,
} from "valibot";

export const EditTaskFormSchema = object({
	title: pipe(string(), minLength(1, "Title is required")),
	isDone: boolean(),
});

export type EditTaskFormSchemaType = InferInput<typeof EditTaskFormSchema>;
