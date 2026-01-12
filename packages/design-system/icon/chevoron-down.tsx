/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const ChevoronDown = ({ size, color }: BasicIconType) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size ?? '24'}
			height={size ?? '24'}
			viewBox='0 0 24 24'
			fill='none'
			stroke={color ?? 'currentColor'}
			strokeWidth='3'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-chevron-down-icon lucide-chevron-down'>
			<path d='m6 9 6 6 6-6' />
		</svg>
	);
};

export default ChevoronDown;
