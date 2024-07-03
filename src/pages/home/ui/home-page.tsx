import { currentDateSelector, useCurrentDate } from "@/entities/date";
import { cn } from "@nextui-org/theme";

export const HomePage = () => {
	const currentDate = useCurrentDate(currentDateSelector);

	return <section className={cn("p-4")}>
    
  </section>;
};
