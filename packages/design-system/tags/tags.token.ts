/** @format */
export type tagType = 'normal' | 'negative';
export type tagVariants = 'primary' | 'secondary' | 'outline' | 'liquidChips';
export type tagSize = 'default' | 'large';

const tagSize = {
	default: 'px-1.5 py-0.5 h-[22px] text-[12px] w-fit font-bold',
	large: 'px-1.5 py-0.5 h-[24px] text-label-s w-fit',
};

const tagBorder = {
	normal: {
		primary: '',
		secondary: '',
		outline: 'border-[1px] border-solid border-core-green-500',
		liquidChips: '',
	},
	negative: {
		primary: 'text-white',
		secondary: 'text-core-red-500',
		outline: 'border-[1px] border-solid border-core-red-500',
		liquidChips: '',
	},
};

const tagTxtColor = {
	normal: {
		primary: 'text-white',
		secondary: 'text-core-green-500',
		outline: 'text-core-green-500',
		liquidChips: 'text-core-green-300 font-semibold',
	},
	negative: {
		primary: 'text-white',
		secondary: 'text-core-red-500',
		outline: 'text-core-red-500',
		liquidChips: 'text-core-red-500',
	},
};

const tagBgColor = {
	normal: {
		primary: 'bg-core-green-500',
		secondary: 'bg-core-green-100',
		outline: 'bg-transparents',
		liquidChips: 'bg-core-green-600/40 rounded-[30px]',
	},
	negative: {
		primary: 'bg-core-red-500',
		secondary: 'bg-core-red-100',
		outline: 'bg-transparents',
		liquidChips: 'rounded-[30px] bg-core-red-600/40',
	},
};

export const makeTagFn = ({ size, type, variants }: { size: tagSize; type: tagType; variants: tagVariants }) => {
	return [
		'rounded-[4px]',
		tagSize[size],
		tagTxtColor[`${type}`][`${variants}`],
		tagBgColor[`${type}`][`${variants}`],
		tagBorder[`${type}`][`${variants}`],
	].join(' ');
};
