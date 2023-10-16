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
			typography: ({ theme }) => ({
				pitchblack: {
					css: {
						'--tw-prose-body': theme('colors.black[80]'),
						'--tw-prose-headings': theme('colors.black[90]'),
						'--tw-prose-lead': theme('colors.black[70]'),
						'--tw-prose-links': theme('colors.black[90]'),
						'--tw-prose-bold': theme('colors.black[90]'),
						'--tw-prose-counters': theme('colors.black[60]'),
						'--tw-prose-bullets': theme('colors.black[40]'),
						'--tw-prose-hr': theme('colors.black[30]'),
						'--tw-prose-quotes': theme('colors.black[90]'),
						'--tw-prose-quote-borders': theme('colors.black[30]'),
						'--tw-prose-captions': theme('colors.black[70]'),
						'--tw-prose-code': theme('colors.black[90]'),
						'--tw-prose-pre-code': theme('colors.black[10]'),
						'--tw-prose-pre-bg': theme('colors.black[90]'),
						'--tw-prose-th-borders': theme('colors.black[30]'),
						'--tw-prose-td-borders': theme('colors.black[20]'),
						/* Dark Mode Colors - Invert = Dark Mode */
						'--tw-prose-invert-body': theme('colors.white[80]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.white[30]'),
						'--tw-prose-invert-links': theme('colors.white[40]'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.white[40]'),
						'--tw-prose-invert-bullets': theme('colors.white[60]'),
						'--tw-prose-invert-hr': theme('colors.white[70]'),
						'--tw-prose-invert-quotes': theme('colors.white[10]'),
						'--tw-prose-invert-quote-borders': theme('colors.white[70]'),
						'--tw-prose-invert-captions': theme('colors.white[40]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.white[30]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.white[60]'),
						'--tw-prose-invert-td-borders': theme('colors.white[70]'),
					},
				},
			}),
			colors: {
				'white': {
					10: 'var(--white10)',
					20: 'var(--white20)',
					30: 'var(--white30)',
					40: 'var(--white40)',
					50: 'var(--white50)',
					60: 'var(--white60)',
					70: 'var(--white70)',
					80: 'var(--white80)',
					90: 'var(--white90)',
					100: 'var(--white100)',
				},
				'black': {
					10: 'var(--black10)',
					20: 'var(--black20)',
					30: 'var(--black30)',
					40: 'var(--black40)',
					50: 'var(--black50)',
					60: 'var(--black60)',
					70: 'var(--black70)',
					80: 'var(--black80)',
					90: 'var(--black90)',
					100: 'var(--black100)',
				},
				'blue': 'rgb(25, 25, 112)',
				'beige': 'rgb(245, 245, 220)'
			},
		},
		fontFamily: {
			'panchang': ['"Panchang"', 'sans-serif'],
			'ranade': ['"Ranade"', 'sans-serif'],
			'clash': ['"Clash Display"', 'sans-serif'],
		}
	},
	plugins: [
		require('tailwindcss-animated'),
		require('@tailwindcss/typography'),
	],
}
