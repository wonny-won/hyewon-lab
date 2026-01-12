/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const BackIcon = ({ color, size }: BasicIconType) => {
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
			className='lucide lucide-step-back-icon lucide-step-back'>
			<polygon points='14,4 14,20 4,12' />
			<rect x='19' y='3' width='2' height='18' />
		</svg>
	);
};

export default BackIcon;
