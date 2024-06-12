import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import type { RadioGroupProps } from "@radix-ui/react-radio-group";

type RadioTestAnswerViewProps = RadioGroupProps & {
	options: string[];
	value: string;
	onChangeAnswer: (answer: string) => void;
};

export const RadioTestAnswerView = ({
	options,
	value,
	onChangeAnswer,
	className,
	...props
}: RadioTestAnswerViewProps) => {
	return (
		<RadioGroup {...props} defaultValue={value} onValueChange={onChangeAnswer}>
			{options.map((option) => {
				return (
					<div key={option} className="flex items-center gap-1.5">
						<RadioGroupItem id={option} value={option} />
						<Label htmlFor={option}>{option}</Label>
					</div>
				);
			})}
		</RadioGroup>
	);
};
