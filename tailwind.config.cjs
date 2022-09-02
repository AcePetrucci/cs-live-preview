/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			translate: {
				'1p': '1px'
			}
		}
	},
	plugins: []
};
