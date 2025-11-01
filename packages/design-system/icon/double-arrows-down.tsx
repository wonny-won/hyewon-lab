/** @format */
import React from 'react';

const DoubleArrowDownIcon = ({ color }: { color: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke={color || '#8e97995d'}
			strokeWidth='2.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-chevrons-down-icon lucide-chevrons-down'>
			<path d='M1 6 L12 15 L23 6' />
			<path d='M1 12 L12 21 L23 12' />
		</svg>
	);
};

export default DoubleArrowDownIcon;
