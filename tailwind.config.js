/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif']
			},
			colors: {},
			screens: {},
			transitionProperty: {
				'spacing': 'margin, padding',
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
};
