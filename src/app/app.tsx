import { HomePage } from "@/pages/home";
import { Aside } from "@/widgets/aside";
import { Layout } from "@/widgets/layout";
import { NextUIProvider } from "@nextui-org/system";

export const App = () => {
	return (
		<NextUIProvider style={{ display: "contents" }}>
			<Layout main={<HomePage />} aside={<Aside />} />
		</NextUIProvider>
	);
};
