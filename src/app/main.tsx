import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";

import "@fontsource-variable/montserrat/index.css";
import "./styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
