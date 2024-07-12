import { Button, type ButtonProps } from "@/shared/ui/button";
import type { MouseEvent } from "react";
import { toggleShowAsideSelector } from "../model/show-aside.selectors";
import { useShowAside } from "../model/use-show-aside";

type ToggleAsideBtnProps = ButtonProps;

export const ToggleAsideBtn = ({ onClick, ...props }: ToggleAsideBtnProps) => {
	const toggleShowAside = useShowAside(toggleShowAsideSelector);

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		if (onClick) onClick(e);

		toggleShowAside();
	};

	return <Button {...props} onClick={handleClick} />;
};
