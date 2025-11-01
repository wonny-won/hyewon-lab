/** @format */
import React from 'react';

const ArrowUpRight = ({ color }: { color: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='13'
			height='13'
			viewBox='0 0 24 24'
			fill='none'
			stroke={color || 'currentColor'}
			strokeWidth='3'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='lucide lucide-arrow-up-right-icon lucide-arrow-up-right'>
			<path d='M7 7h10v10' />
			<path d='M7 17 17 7' />
		</svg>
	);
};

export default ArrowUpRight;
