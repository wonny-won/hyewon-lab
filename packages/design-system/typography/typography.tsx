/** @format */

'use client';
import React from 'react';
import { variants, variant } from './typo.token';

interface TypoProp {
	children: React.ReactNode;
	variants: variants;
	color?: string;
	className?: string;
}

const Typography = ({ children, variants, className = '', color = 'core-typo-primary' }: TypoProp) => {
	const finalClassName = [variant[variants], color, className].join(' ');
	return <div className={finalClassName}>{children}</div>;
};

export default Typography;
