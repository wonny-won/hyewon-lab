/** @format */
'use client';
import React, { ReactNode } from 'react';
import { btnSize, btnStatus, btnVariants, makeBtnFn } from './btn.token';

interface BtnProps {
	variants: btnVariants;
	size: btnSize;
	status: btnStatus;
	children?: ReactNode;
	onClick?: (param?: any) => void;
	className?: string;
}

const Button = ({ variants, size, status, children, className, onClick }: BtnProps) => {
	return (
		<>
			<button className={makeBtnFn({ variants, size, status, className })} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;
