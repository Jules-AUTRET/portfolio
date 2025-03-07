import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			preprocess: true,
			precompress: true,
		}),

		prerender: {
			entries: [
				"/a-propos",
				"/projects/breizh-ile",
				"/projects/puissance4",
				"/projects/LLTK",
				"/projects/outil-info-schema",
				"/projects/team-building",
				"/projects/automatisation",
			]
		},
	}
};

export default config;
