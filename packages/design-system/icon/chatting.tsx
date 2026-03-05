/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const Chatting = ({ size, color, strokeWidth }: BasicIconType) => {
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
			className='lucide lucide-message-circle-more-icon lucide-message-circle-more'>
			<path d='M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719' />
			<path d='M8 12h.01' />
			<path d='M12 12h.01' />
			<path d='M16 12h.01' />
		</svg>
	);
};

export default Chatting;
