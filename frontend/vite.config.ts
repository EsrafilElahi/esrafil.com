/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	// preview: {
	// 	host: true,
	// 	port: 3000,
	// },
	plugins: [react(), svgr()],
	test: {
		globals: true,
		environment: 'jsdom',
	},
});
