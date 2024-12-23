import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	resolve: {
        alias: {
            $components: "/src/lib/components",
        }
    },

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
