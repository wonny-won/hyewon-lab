/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const Ellipsis = ({ size, color, strokeWidth }: BasicIconType) => {
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
			className='lucide lucide-ellipsis-icon lucide-ellipsis'>
			<circle cx='12' cy='12' r='1' fill='#686868' />
			<circle cx='19' cy='12' r='1' fill='#686868' />
			<circle cx='5' cy='12' r='1' fill='#686868' />
		</svg>
	);
};

export default Ellipsis;
