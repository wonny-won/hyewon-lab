/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const Bell = ({ size, color, strokeWidth }: BasicIconType) => {
	return (
		<>
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
				className='lucide lucide-bell-icon lucide-bell'>
				<path d='M10.268 21a2 2 0 0 0 3.464 0' />
				<path d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326' />
			</svg>

			{/* <svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
				className='lucide lucide-bell-dot-icon lucide-bell-dot'>
				<path d='M10.268 21a2 2 0 0 0 3.464 0' />
				<path d='M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348' />
				<circle cx='18' cy='5' r='3' />
			</svg> */}
		</>
	);
};
export default Bell;
