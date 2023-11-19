/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

export default defineConfig({
	base: '/voting/',
  plugins: [react()],
	resolve: {
		alias: [
				{ find: '@', replacement: path.resolve(__dirname, 'src') },
		],
},
})
