import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";
import { cn } from "@/shared/utils";
import { type HTMLAttributes, useState } from "react";

type CheckboxTestAnswerViewProps = HTMLAttributes<HTMLUListElement> & {
	options: string[];
	value: string[];
	onChangeAnswer: (answer: string[]) => void;
};

export const CheckboxTestAnswerView = ({
	options,
	value = [],
	onChangeAnswer,
	className,
	...props
}: CheckboxTestAnswerViewProps) => {
	const [answer, setAnswer] = useState<string[]>(value);

	const handleChange = (option: string) => (isChecked: boolean) => {
		let newAnswer = [];

		if (isChecked) {
			newAnswer = [...answer, option];
		} else {
			newAnswer = answer.filter((item) => item !== option);
		}

		setAnswer(newAnswer);
		onChangeAnswer(newAnswer);
	};

	return (
		<ul {...props} className={cn("grid gap-2", className)}>
			{options.map((option) => {
				const isChecked = answer.includes(option);

				return (
					<li key={option} className="flex items-center gap-1.5">
						<Checkbox
							id={option}
							checked={isChecked}
							onCheckedChange={handleChange(option)}
						/>
						<Label htmlFor={option}>{option}</Label>
					</li>
				);
			})}
		</ul>
	);
};
