/** @format */
'use-client';
import React from 'react';
import { BasicIconType } from './incon-type/type';

const PauseIcon = ({ size, color }: BasicIconType) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill={color || 'currentColor'}
			stroke={color || 'currentColor'}
			strokeWidth='2'
			strokeLinecap='square'
			strokeLinejoin='miter'
			className='lucide lucide-pause-icon lucide-pause'>
			<rect x='14' y='3' width='4' height='22' rx='0.5' />
			<rect x='4' y='3' width='4' height='22' rx='0.5' />
		</svg>
	);
};

export default PauseIcon;
