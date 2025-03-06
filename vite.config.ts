import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	base: "/advice-generator/",
	plugins: [react()],
	resolve: {
		alias: {
			"@app": path.resolve(__dirname, "src/App"),
			"@components": path.resolve(__dirname, "src/components"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@utils": path.resolve(__dirname, "src/utils"),
		},
	},
});
