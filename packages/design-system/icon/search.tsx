/** @format */
import React from 'react';
import { BasicIconType } from './incon-type/type';

const Search = ({ size, color, strokeWidth }: BasicIconType) => {
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
			className='lucide lucide-search-icon lucide-search'>
			<path d='m21 21-4.34-4.34' />
			<circle cx='11' cy='11' r='8' />
		</svg>
	);
};
export default Search;
