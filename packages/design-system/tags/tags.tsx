/** @format */
'use client';
import React, { ReactNode } from 'react';
import { tagSize, tagType, tagVariants, makeTagFn } from './tags.token';

const Tags = ({
	tagTxt,
	icon,
	type,
	size,
	variants,
}: {
	tagTxt: string;
	type: tagType;
	size: tagSize;
	variants: tagVariants;
	icon?: ReactNode;
}) => {
	return (
		<>
			<div className={makeTagFn({ size, type, variants })}>{tagTxt}</div>
		</>
	);
};

export default Tags;
