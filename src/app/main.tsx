import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CurrentUrlProvider } from "@/shared/utils/use-query-param-state";
import { App } from "./app";

import "./global.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CurrentUrlProvider>
			<App />
		</CurrentUrlProvider>
	</StrictMode>,
);
