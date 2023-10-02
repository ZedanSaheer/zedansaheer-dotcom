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

			'md': { 'max': '867px' },
			// => @media (max-width: 867px) { ... }

			'sm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }

			'xs': { 'max': '420px' },
			// => @media (max-width: 420px) { ... }

		},
		extend: {
			colors: {
				'white': {
					10: 'rgb(var(--white10))',
					20: 'rgb(var(--white20))',
					30: 'rgb(var(--white30))',
					40: 'rgb(var(--white40))',
					50: 'rgb(var(--white50))',
					60: 'rgb(var(--white60))',
					70: 'rgb(var(--white70))',
					80: 'rgb(var(--white80))',
					90: 'rgb(var(--white90))',
					100: 'rgb(var(--white100))',
				},
				'black': {
					10: 'rgb(var(--black10))',
					20: 'rgb(var(--black20))',
					30: 'rgb(var(--black30))',
					40: 'rgb(var(--black40))',
					50: 'rgb(var(--black50))',
					60: 'rgb(var(--black60))',
					70: 'rgb(var(--black70))',
					80: 'rgb(var(--black80))',
					90: 'rgb(var(--black90))',
					100: 'rgb(var(--black100))',
				},
				'blue':'rgb(25, 25, 112)',
				'beige':'rgb(245, 245, 220)'
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
