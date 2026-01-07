/** @format */

import React from 'react';

const VirticalDiver = ({
	display = 'block',
	height = 100,
	color = 'core-neutral-700',
}: {
	display?: string;
	height?: number;
	color?: string;
}) => {
	return <div className={`${display} w-[2px] border-l-[1px] h-[${height}px] mt-10 border-${color}`} />;
};
export default VirticalDiver;
