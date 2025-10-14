/** @format */

import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['../**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: {
				'display-l': 'var(--text-display-l)',
				'display-m': 'var(--text-display-m)',
				'display-s': 'var(--text-display-s)',
				'heading-l': 'var(--text-heading-l)',
				'heading-m': 'var(--text-heading-m)',
				'heading-s': 'var(--text-heading-s)',
				'body-l-strong': 'var(--text-body-l-strong)',
				'body-l': 'var(--text-body-l)',
				'body-m-strong': 'var(--text-body-m-strong)',
				'body-m': 'var(--text-body-m)',
				'body-s-strong': 'var(--text-body-s-strong)',
				'body-s': 'var(--text-body-s)',
				'body-xs-strong': 'var(--text-body-xs-strong)',
				'label-xl': 'var(--text-label-l)',
				'label-l': 'var(--text-label-l)',
				'label-m': 'var(--text-label-m)',
				'label-s': 'var(--text-label-s)',
			},
			fontWeight: {
				extrabold: 'var(--font-weight-extrabold)',
				bold: 'var(--font-weight-bold)',
				semibold: 'var(--font-weight-semibold)',
				medium: 'var(--font-weight-medium)',
				regular: 'var(--font-weight-regular)',
			},
			colors: {
				core: {
					typo: {
						primary: 'var(--color-core-typo-primary)',
						second: 'var(--color-core-typo-second)',
						third: 'var(--color-core-typo-third)',
					},
					korea: {
						yangram: 'var(--color-core-korea-yangram)',
						beokja: 'var(--color-core-korea-beokja)',
						jangdan: 'var(--color-core-korea-jangdan)',
						choonyurok: 'var(--color-core-korea-choonyurok)',
						chooiram: 'var(--color-core-korea-chooiram)',
						cheonghyeon: 'var(--color-core-korea-cheonghyeon)',
						choohyang: 'var(--color-core-korea-choohyang)',
						gold: 'var(--color-core-five-gold)',
					},
					green: {
						900: 'var(--color-core-green-900)',
						800: 'var(--color-core-green-800)',
						700: 'var(--color-core-green-700)',
						600: 'var(--color-core-green-600)',
						500: 'var(--color-core-green-500)',
						400: 'var(--color-core-green-400)',
						300: 'var(--color-core-green-300)',
						200: 'var(--color-core-green-200)',
						100: 'var(--color-core-green-100)',
						50: 'var(--color-core-green-50)',
					},
					gray: {
						800: 'var(--color-core-gray-800)',
						700: 'var(--color-core-gray-700)',
						600: 'var(--color-core-gray-600)',
						500: 'var(--color-core-gray-500)',
						400: 'var(--color-core-gray-400)',
						300: 'var(--color-core-gray-300)',
						200: 'var(--color-core-gray-200)',
						100: 'var(--color-core-gray-100)',
						50: 'var(--color-core-gray-50)',
					},
					neutral: {
						800: 'var(--color-core-neutral-800)',
						700: 'var(--color-core-neutral-700)',
						600: 'var(--color-core-neutral-600)',
						500: 'var(--color-core-neutral-500)',
						400: 'var(--color-core-neutral-400)',
						300: 'var(--color-core-neutral-300)',
						200: 'var(--color-core-neutral-200)',
						100: 'var(--color-core-neutral-100)',
						50: 'var(--color-core-neutral-50)',
					},
					red: {
						800: 'var(--color-core-red-800)',
						700: 'var(--color-core-red-700)',
						600: 'var(--color-core-red-600)',
						500: 'var(--color-core-red-500)',
						400: 'var(--color-core-red-400)',
						300: 'var(--color-core-red-300)',
						200: 'var(--color-core-red-200)',
						100: 'var(--color-core-red-100)',
						50: 'var(--color-core-red-50)',
					},
				},
			},
		},
	},
};

export default config;
