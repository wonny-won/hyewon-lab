/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const DownArrowList = ({ size, color, strokeWidth }: BasicIconType) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size ?? '24'}
			height={size ?? '24'}
			viewBox='0 0 24 24'
			fill='none'
			stroke={color ?? 'currentColor'}
			strokeWidth={strokeWidth ?? '2'}
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-arrow-down-wide-narrow-icon lucide-arrow-down-wide-narrow'>
			<path d='m3 16 4 4 4-4' />
			<path d='M7 20V4' />
			<path d='M11 4h10' />
			<path d='M11 8h7' />
			<path d='M11 12h4' />
		</svg>
	);
};

export default DownArrowList;
