/** @format */

export type variants =
	| 'display-l'
	| 'display-m'
	| 'display-s'
	| 'heading-l'
	| 'heading-m'
	| 'heading-s'
	| 'body-l-strong'
	| 'body-l'
	| 'body-m-strong'
	| 'body-m'
	| 'body-s-strong'
	| 'body-s'
	| 'body-xs-strong'
	| 'body-xs'
	| 'label-xl'
	| 'label-l'
	| 'label-m'
	| 'label-s';

export const variant = {
	'display-l': 'text-display-l font-extrabold',
	'display-m': 'text-display-m font-extrabold',
	'display-s': 'text-display-s font-extrabold',

	'heading-l': 'text-heading-l font-extrabold',
	'heading-m': 'text-heading-m font-extrabold',
	'heading-s': 'text-heading-s font-extrabold',

	'body-l-strong': 'text-body-l-strong font-semibold',
	'body-l': 'text-body-l font-regular',

	'body-m-strong': 'text-body-m-strong font-semibold',
	'body-m': 'text-body-m font-regular',

	'body-s-strong': 'text-body-s-strong font-extrabold',
	'body-s': 'text-body-s font-regular',

	'body-xs-strong': 'text-body-xs-strong font-semibold',
	'body-xs': 'text-body-xs-strong font-regular',

	'label-xl': 'text-label-xl font-semibold',
	'label-l': 'text-label-l font-semibold',
	'label-m': 'text-label-m font-semibold',
	'label-s': 'text-label-s font-semibold',
} as const;
