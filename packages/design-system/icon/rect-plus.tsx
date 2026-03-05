/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const RectPlus = ({ size, color, strokeWidth }: BasicIconType) => {
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
			className='lucide lucide-square-plus-icon lucide-square-plus'>
			<rect width='18' height='18' x='3' y='3' rx='2' />
			<path d='M8 12h8' />
			<path d='M12 8v8' />
		</svg>
	);
};

export default RectPlus;
