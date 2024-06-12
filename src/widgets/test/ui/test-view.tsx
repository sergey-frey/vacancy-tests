import type { Question } from "@/entities/question";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/ui/card";
import { Progress } from "@/shared/ui/progress";
import { cn } from "@/shared/utils";
import type { HTMLAttributes, ReactNode } from "react";

type TestViewProps = HTMLAttributes<HTMLDivElement> & {
	question: Question;
	progress?: number;
	titleNode: ReactNode;
	answer: ReactNode;
	controls: ReactNode;
};

export const TestView = ({
	question,
	progress = 0,
	titleNode,
	answer,
	controls,
	className,
	...props
}: TestViewProps) => {
	const { text, id } = question;

	return (
		<Card {...props} className={cn("w-full max-w-lg", "overflow-hidden")}>
			<CardHeader>
				<CardTitle>{titleNode}</CardTitle>
				<CardDescription>{text}</CardDescription>
			</CardHeader>
			<CardContent>{answer}</CardContent>
			<CardFooter>{controls}</CardFooter>

			<Progress value={progress} />
		</Card>
	);
};
