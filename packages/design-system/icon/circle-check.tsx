/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const CircleCheckIcons = ({ size, color }: BasicIconType) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size ?? '24'}
			height={size ?? '24'}
			viewBox='0 0 24 24'
			fill='none'
			stroke={color || 'currentColor'}
			strokeWidth='3'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-circle-check-icon lucide-circle-check'>
			<circle cx='12' cy='12' r='10' />
			<path d='m9 12 2 2 4-4' />
		</svg>
	);
};

export default CircleCheckIcons;
