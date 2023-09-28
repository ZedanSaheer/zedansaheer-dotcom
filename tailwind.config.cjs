/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'2xl': { 'max': '1535px' },
			// => @media (max-width: 1535px) { ... }

			'xl': { 'max': '1279px' },
			// => @media (max-width: 1279px) { ... }

			'lg': { 'max': '1023px' },
			// => @media (max-width: 1023px) { ... }

			'md': { 'max': '767px' },
			// => @media (max-width: 767px) { ... }

			'sm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }

			'xs': { 'max': '420px' },
			// => @media (max-width: 420px) { ... }

		},
		extend: {
			colors: {
				'white': {
					10: 'rgb(255,255,254,10%)',
					20: 'rgb(255,255,254,20%)',
					30: 'rgb(255,255,254,30%)',
					40: 'rgb(255,255,254,40%)',
					50: 'rgb(255,255,254,50%)',
					60: 'rgb(255,255,254,60%)',
					70: 'rgb(255,255,254,70%)',
					80: 'rgb(255,255,254,80%)',
					90: 'rgb(255,255,254,90%)',
					100: 'rgb(255,255,254,100%)',
				},
				'black': {
					10: 'rgb(36,37,35,10%)',
					20: 'rgb(36,37,35,20%)',
					30: 'rgb(36,37,35,30%)',
					40: 'rgb(36,37,35,40%)',
					50: 'rgb(36,37,35,50%)',
					60: 'rgb(36,37,35,60%)',
					70: 'rgb(36,37,35,70%)',
					80: 'rgb(36,37,35,80%)',
					90: 'rgb(36,37,35,90%)',
					100: 'rgb(36,37,35,100%)',
				},
			},
		},
		fontFamily: {
			'panchang': ['"Panchang"', 'sans-serif'],
			'ranade': ['"Ranade"', 'sans-serif'],
			'clash': ['"Clash Display"', 'sans-serif'],
		}
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
