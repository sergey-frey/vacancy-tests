import { HomePage } from "@/pages/home";
import { queryClient } from "@/shared/constants/query-client";
import { Aside } from "@/widgets/aside";
import { Layout } from "@/widgets/layout";
import { QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout main={<HomePage />} aside={<Aside />} />
		</QueryClientProvider>
	);
};
