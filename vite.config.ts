import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	build: {
		minify: 'esbuild',
		sourcemap: process.env.NODE_ENV === 'development',
	},

	server: {
		fs: {
			strict: true,
		}
	},

	resolve: {
        alias: {
            $components: "/src/lib/components",
        }
    },

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
