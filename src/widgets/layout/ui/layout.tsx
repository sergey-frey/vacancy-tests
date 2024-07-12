import { cn } from "@/shared/utils";
import type { ReactNode } from "react";

type LayoutProps = {
	aside: ReactNode;
	header: ReactNode;
	main: ReactNode;
};

export const Layout = ({ main, aside, header }: LayoutProps) => {
	return (
		<>
			{header}
			{aside}
			<main className={cn("main")}>{main}</main>
		</>
	);
};
