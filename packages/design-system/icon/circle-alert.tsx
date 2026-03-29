/** @format */
import { BasicIconType } from './incon-type/type';
import React from 'react';

const CircleAlert = ({ size, color, strokeWidth }: BasicIconType) => {
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
			className='lucide lucide-circle-alert-icon lucide-circle-alert'>
			<circle cx='12' cy='12' r='10' />
			<line x1='12' x2='12' y1='8' y2='12' />
			<line x1='12' x2='12.01' y1='16' y2='16' />
		</svg>
	);
};

export default CircleAlert;
