/**
 * @format
 */

import React from 'react';

type TooltipProps = {
	children?: React.ReactNode;
	content?: React.ReactNode;
	position?: 'top' | 'bottom' | 'left' | 'right' | 'right-top';
	bgColor?: string;
};

const getTooltipPositionClass = (position: TooltipProps['position']) => {
	switch (position) {
		case 'top':
			return 'bottom-full left-1/2 -translate-x-[42%] max-sm:translate-y-[-5px] min-[1450px]:-translate-x-[30%] mb-[35px] z-1';
		case 'bottom':
			return 'top-full left-1/2 -translate-x-1/3 mt-2';
		case 'left':
			return 'right-full top-1/2 -translate-y-1/3 mr-2';
		case 'right-top':
			return 'bottom-full left-1/2 -translate-x-[2%] translate-y-[-8px] max-sm:translate-y-[-5px] min-[1450px]:-translate-x-[30%] mb-[35px] z-1';
		case 'right':
		default:
			return 'left-full top-1/2 -translate-y-1/3 ml-2';
	}
};

const getArrowStyle = (position: TooltipProps['position']) => {
	const size = 10;

	switch (position) {
		case 'top':
		case 'right-top':
			return {
				width: `${size}px`,
				height: `${size}px`,
				bottom: `-${size / 2}px`,
				left: '50%',
				transform: 'translateX(-50%) rotate(45deg)',
			} as React.CSSProperties;
		case 'bottom':
			return {
				width: `${size}px`,
				height: `${size}px`,
				top: `-${size / 2}px`,
				left: '50%',
				transform: 'translateX(-50%) rotate(45deg)',
			} as React.CSSProperties;
		case 'left':
			return {
				width: `${size}px`,
				height: `${size}px`,
				right: `-${size / 2}px`,
				top: '50%',
				transform: 'translateY(-50%) rotate(45deg)',
			} as React.CSSProperties;
		case 'right':
		default:
			return {
				width: `${size}px`,
				height: `${size}px`,
				left: `-${size / 2}px`,
				top: '50%',
				transform: 'translateY(-50%) rotate(45deg)',
			} as React.CSSProperties;
	}
};

const Tooltip = ({ children, content, position = 'top', bgColor = 'bg-core-green-300' }: TooltipProps) => (
	<div className='z-[10000] relative inline-flex items-center'>
		<div
			className={`absolute whitespace-nowrap rounded px-2 py-1 text-[12px] text-gray-800 font-semibold ${bgColor} ${getTooltipPositionClass(
				position
			)}`}>
			<div className='flex gap-1 items-center'>
				{children}
				{content}
			</div>
			<div className={`absolute ${bgColor}`} style={getArrowStyle(position)} />
		</div>
	</div>
);

export default Tooltip;
