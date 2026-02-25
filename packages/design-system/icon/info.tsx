/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const InfoIcon = ({ size, color, strokeWidth }: BasicIconType) => {
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
			className='lucide lucide-info-icon lucide-info'>
			<circle cx='12' cy='12' r='10' />
			<path d='M12 8v6' />
			<path d='M12 18h.2' />
		</svg>
	);
};
export default InfoIcon;
