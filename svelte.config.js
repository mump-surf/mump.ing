import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: staticAdapter({
			pages: 'docs', assets: 'docs', // GitHub pages deployment
			fallback: 'index.html'
		}),
		paths: {
			base: process.env.BASE_PATH || ''
		},
	}
};

export default config;