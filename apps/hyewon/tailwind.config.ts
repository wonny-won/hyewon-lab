/** @format */

import defaultConfig from '@hyewon/design-system/tailwind-config';

const config = {
	...defaultConfig,
	content: [
		// ...defaultConfig.content,
		'./src/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'../../packages/design-system/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			...defaultConfig.theme?.extend,
		},
	},
	plugins: [],
};

export default config;
