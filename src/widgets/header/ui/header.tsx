import { ToggleAsideBtn } from "@/features/show-aside";
import { cn } from "@/shared/utils";
import { MenuIcon } from "lucide-react";

export const Header = () => {
	return (
		<header
			className={cn("header", "p-4", "border-b", "shadow-md", "xl:hidden")}
		>
			<ToggleAsideBtn size={"icon"}>
				<MenuIcon />
			</ToggleAsideBtn>
		</header>
	);
};
