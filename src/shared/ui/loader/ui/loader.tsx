import { HTMLAttributes } from "react";
import "../styles/loader.css";
import { cn } from "@/shared/utils";

type LoaderProps = HTMLAttributes<HTMLSpanElement> & {
	size: number;
	spinDurationMs?: number;
	borderWidth?: number;
};

export const Loader = ({
	size,
	spinDurationMs,
	borderWidth,
	className,
	...props
}: LoaderProps) => {
	return (
		<span
			{...props}
			className={cn("loader", className)}
			style={{
				width: size,
				height: size,
				"--loader-border-width": Boolean(borderWidth) && `${borderWidth}px`,
				"--loader-spin-duration":
					Boolean(spinDurationMs) && `${spinDurationMs}ms`,
			}}
		></span>
	);
};
