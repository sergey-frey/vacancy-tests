import { cn } from "@/shared/utils";
import { ButtonHTMLAttributes } from "react";

import "../styles/button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isIconOnly?: boolean;
	size?: "m";
};

export const Button = ({
	isIconOnly,
	size = "m",
	className,
	title,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			className={cn(
				"button",
				isIconOnly && "button_icon-only",
				`button_${size}`,
				className
			)}
			title={title}
			aria-label={title}
		/>
	);
};
