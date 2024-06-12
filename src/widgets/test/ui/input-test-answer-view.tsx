import { Input, type InputProps } from "@/shared/ui/input";
import type { ChangeEvent } from "react";

type InputTestView = InputProps & {
	onChangeAnswer: (answer: string) => void;
};

export const InputTestAnswerView = ({
	onChangeAnswer,
	onChange,
	...props
}: InputTestView) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event);
		}

		onChangeAnswer(event.target.value);
	};

	return <Input {...props} onChange={handleChange} />;
};
