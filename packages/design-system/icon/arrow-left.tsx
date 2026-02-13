/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const ArrowLeft = ({ color, size }: BasicIconType) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size ?? '24'}
			height={size ?? '24'}
			viewBox='0 0 24 24'
			fill='none'
			stroke={color ?? 'Color'}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-arrow-left-icon lucide-arrow-left'>
			<path d='m12 19-7-7 7-7' />
			<path d='M19 12H5' />
		</svg>
	);
};

export default ArrowLeft;
