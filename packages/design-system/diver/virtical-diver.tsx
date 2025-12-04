/** @format */

import React from 'react';

const VirticalDiver = ({ height, color = 'core-neutral-700' }: { height: number; color?: string }) => {
	return <div className={`border-l-[1px] h-[${height || 100}px] mt-10 border-${color}`}></div>;
};
export default VirticalDiver;
