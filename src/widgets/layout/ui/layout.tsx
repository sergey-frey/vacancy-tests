import { cn } from "@/shared/utils";
import type { ReactNode } from "react";

type LayoutProps = {
	main: ReactNode;
	aside: ReactNode;
};

export const Layout = ({ main, aside }: LayoutProps) => {
	return (
		<>
			<aside className={cn("aside")}>{aside}</aside>
			<main className={cn("main")}>{main}</main>
		</>
	);
};
