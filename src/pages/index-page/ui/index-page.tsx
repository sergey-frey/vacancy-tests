import { Calendar } from "@/components/calendar";

export const IndexPage = () => {
	return (
		<section className="container">
			<Calendar dateForDisplay={new Date()} />
		</section>
	);
};
