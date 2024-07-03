import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { NextUIProvider } from "@nextui-org/system";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<NextUIProvider>
			<App />
		</NextUIProvider>
	</React.StrictMode>,
);
