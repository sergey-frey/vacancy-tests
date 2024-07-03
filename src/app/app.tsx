import { HomePage } from "@/pages/home";
import { Aside } from "@/widgets/aside";
import { Layout } from "@/widgets/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout main={<HomePage />} aside={<Aside />} />
		</QueryClientProvider>
	);
};
