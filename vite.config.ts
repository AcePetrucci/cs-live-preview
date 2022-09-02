import path from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'$static': path.resolve(__dirname, './src/shared/static'),
			'$models': path.resolve(__dirname, './src/shared/models'),
			'$utils': path.resolve(__dirname, './src/shared/utils'),
			'$stores': path.resolve(__dirname, './src/shared/stores'),
		}
	}
};

export default config;
