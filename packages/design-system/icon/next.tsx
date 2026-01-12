/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const NextIcon = ({ color, size }: BasicIconType) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill={color || 'currentColor'}
			stroke={color || 'currentColor'}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-step-forward-icon lucide-step-forward'>
			<polygon points='10,4 10,20 20,12' />
			<rect x='3' y='3' width='2' height='18' />
		</svg>
	);
};

export default NextIcon;
