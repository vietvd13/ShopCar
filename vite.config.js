import { defineConfig } from 'vite';
import { createVuePlugin as vue } from "vite-plugin-vue2";

// https://vitejs.dev/config/
const path = require("path");
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
});