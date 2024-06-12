import { cn } from "@/shared/utils";
import { Test } from "@/widgets/test";

export const App = () => {
	return (
		<main className={cn("grid place-items-center", "h-screen", "px-4")}>
			<Test />
		</main>
	);
};
