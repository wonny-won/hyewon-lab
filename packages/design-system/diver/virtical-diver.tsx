/** @format */

import React from 'react';

const VirticalDiver = ({
	display = 'block',
	height,
	color = 'core-neutral-700',
}: {
	display?: string;
	height: number;
	color?: string;
}) => {
	return <div className={`${display} border-l-[1px] h-[${height || 100}px] mt-10 border-${color}`}></div>;
};
export default VirticalDiver;
