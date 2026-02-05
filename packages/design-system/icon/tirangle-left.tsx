/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const TriangleLeft = ({ size, color, className }: BasicIconType) => {
	return (
		<svg
			width={size ?? '24'}
			height={size ?? '24'}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}>
			<path
				d='M8 5.5 L19 12 L8 18.5 Z'
				fill='none'
				stroke={color ?? '#5eead4'}
				strokeWidth='2.6'
				strokeLinejoin='miter'
				strokeLinecap='butt'
			/>
		</svg>
	);
};

export default TriangleLeft;
