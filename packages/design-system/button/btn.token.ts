/** @format */
export type btnVariants =
	| 'primary'
	| 'secondary'
	| 'teriary'
	| 'negative'
	| 'neutral'
	| 'outline'
	| 'chips'
	| 'chipsOutline'
	| 'liquidChips';
export type btnStatus = 'default' | 'active' | 'disabled';
export type btnSize = 'xlarge' | 'large' | 'default' | 'small' | 'xsmall';

export const makeBtnFn = ({
	variants,
	size,
	status,
	className = '',
}: {
	variants: btnVariants;
	size: btnSize;
	status: btnStatus;
	className?: string;
}) => {
	return [
		btnSize[`${size}`],
		btnBorder[`${variants}`][`${status}`],
		btnColor[`${variants}`]?.[`${status}`],
		btnBgColor[`${variants}`]?.[`${status}`],
		className,
	].join(' ');
};

export const btnSize = {
	xlarge: 'px-6 text-label-xl h-13',
	large: 'px-5 text-label-l h-12',
	default: 'px-4 text-label-m h-10',
	small: 'px-2 text-label-s h-8',
	xsmall: 'px-2 text-body-xs-strong h-6',
};

export const btnBorder = {
	primary: {
		default: 'rounded-[8px]',
		active: 'rounded-[8px]',
		disabled: 'rounded-[8px]',
	},
	secondary: {
		default: 'rounded-[8px]',
		active: 'rounded-[8px]',
		disabled: 'rounded-[8px]',
	},
	teriary: {
		default: 'rounded-[8px]',
		active: 'rounded-[8px]',
		disabled: 'rounded-[8px]',
	},
	negative: {
		default: 'rounded-[8px]',
		active: 'rounded-[8px]',
		disabled: 'rounded-[8px]',
	},
	neutral: {
		default: 'rounded-[8px]',
		active: 'rounded-[8px]',
		disabled: 'rounded-[8px]',
	},
	outline: {
		default: 'rounded-[8px] border-[1px] border-solid border-core-gray-200',
		active: 'rounded-[8px] border-[1px] border-solid border-core-gray-200',
		disabled: 'rounded-[8px] border-[1px] border-solid border-core-gray-200',
	},
	chips: {
		default: 'rounded-[30px]',
		active: 'rounded-[30px]',
		disabled: 'rounded-[30px]',
	},
	chipsOutline: {
		default:
			'rounded-[30px] border-[1px] border-solid border-core-green-500 hover:bg-core-green-50 hover:cursor-pointer',
		active: 'rounded-[30px] border-[1px] border-core-green-500',
		disabled: 'rounded-[30px] border-[1px] border-solid border-core-gray-200',
	},
	liquidChips: {
		default:
			'rounded-[30px] border-[0.5px] border-solid border-white/20 shadow-[0_5px_9px_rgba(0,0,0,0.35),0_-10px_36px_inset_rgba(0,0,0,0.35),0_-1px_5px_2px_inset_rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.05)]',
		active: 'rounded-[30px] border-[0.5px] border-solid border-white/20 shadow-[0_5px_9px_rgba(0,0,0,0.35),0_-10px_36px_inset_rgba(0,0,0,0.35),0_-1px_5px_2px_inset_rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.05)]',
		disabled:
			'rounded-[30px] border-[0.5px] border-solid border-white/20 shadow-[0_5px_9px_rgba(0,0,0,0.35),0_-10px_36px_inset_rgba(0,0,0,0.35),0_-1px_5px_2px_inset_rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.05)]',
	},
};

export const btnColor = {
	primary: {
		default: 'text-white',
		active: 'text-white',
		disabled: 'text-core-green-200',
	},
	secondary: {
		default: 'text-core-green-500',
		active: 'text-core-green-500',
		disabled: 'text-core-green-200',
	},
	teriary: {
		default: 'text-white',
		active: 'text-white',
		disabled: 'text-core-neutral-200',
	},
	negative: {
		default: 'text-white',
		active: 'text-white',
		disabled: 'text-core-red-200',
	},
	neutral: {
		default: 'text-core-neutral-600',
		active: 'text-core-neutral-600',
		disabled: 'text-core-neutral-200',
	},
	outline: {
		default: 'text-core-typo-second',
		active: 'text-core-typo-normal',
		disabled: 'text-core-typo-third',
	},

	chips: {
		default: 'text-core-typo-primary',
		active: 'text-core-typo-normal',
		disabled: 'text-core-typo-third',
	},

	chipsOutline: {
		default: 'text-core-typo-normal',
		active: 'text-core-typo-normal',
		disabled: 'text-core-typo-third',
	},
	liquidChips: {
		default: 'text-white',
		active: 'text-white',
		disabled: 'text-typo-third',
	},
};

export const btnBgColor = {
	primary: {
		default: 'bg-core-green-500',
		active: 'bg-core-green-600',
		disabled: 'bg-core-green-300',
	},
	secondary: {
		default: 'bg-core-green-100',
		active: 'bg-core-green-200',
		disabled: 'bg-core-green-50',
	},
	teriary: {
		default: 'bg-core-neutral-800',
		active: 'bg-core-neutral-800',
		disabled: 'bg-core-neutral-400',
	},
	negative: {
		default: 'bg-core-red-500',
		active: 'bg-core-red-600',
		disabled: 'bg-core-red-300',
	},
	neutral: {
		default: 'bg-core-neutral-100',
		active: 'bg-core-neutral-200',
		disabled: 'bg-core-neutral-50',
	},
	outline: {
		default: 'bg-transparents',
		active: 'bg-transparents',
		disabled: 'bg-transparents',
	},
	chips: {
		default: 'bg-core-neutral-50/50 backdrop-blur-[5px]',
		active: 'bg-core-green-200',
		disabled: 'bg-core-neutral-50',
	},
	chipsOutline: {
		default: 'bg-transparents',
		active: 'bg-transparents',
		disabled: 'bg-transparents',
	},
	liquidChips: {
		default:
			'bg-[linear-gradient(290deg,rgba(255,255,255,0.1),transparent)] backdrop-blur-[5px] backdrop-brightness-[1.5] backdrop-saturate-110',
		active: 'bg-[linear-gradient(290deg,rgba(255,255,255,0.15),transparent)] backdrop-blur-[5px] backdrop-brightness-[1.5] backdrop-saturate-110',
		disabled:
			'bg-[linear-gradient(290deg,rgba(255,255,255,0.1),transparent)]backdrop-blur-[5px] backdrop-brightness-[1.5] backdrop-saturate-110',
	},
};
