import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@styles/globals.scss";
const Advice = lazy(() => import("@components/advice"));

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<Advice />
	</StrictMode>,
);
