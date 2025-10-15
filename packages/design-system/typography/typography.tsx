/** @format */

'use client';
import React, { JSX } from 'react';
import { variants, variant } from './typo.token';

interface TypoProp {
	children: React.ReactNode;
	variants: variants;
	color?: string;
	className?: string;
	as?: keyof JSX.IntrinsicElements;
}

const Typography = ({
	children,
	variants,
	className = '',
	color = 'core-typo-primary',
	as: Component = 'div',
}: TypoProp) => {
	const finalClassName = [variant[variants], color, className].join(' ');
	return <Component className={finalClassName}>{children}</Component>;
};

export default Typography;
