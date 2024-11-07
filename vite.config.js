import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    server: {
        host: process.env.VITE_HOST || "0.0.0.0",
        port: Number(process.env.VITE_PORT) || 5173,
    },
});
