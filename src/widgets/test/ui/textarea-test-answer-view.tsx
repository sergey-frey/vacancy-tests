import { Textarea, type TextareaProps } from "@/shared/ui/textarea";
import type { ChangeEvent } from "react";

type TextareaTestAnswerViewProps = TextareaProps & {
	onChangeAnswer: (answer: string) => void;
};

export const TextareaTestAnswerView = ({
	onChangeAnswer,
	onChange,
	...props
}: TextareaTestAnswerViewProps) => {
	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (onChange) {
			onChange(event);
		}

		onChangeAnswer(event.target.value);
	};

	return <Textarea {...props} onChange={handleChange} />;
};
