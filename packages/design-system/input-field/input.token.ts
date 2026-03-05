/** @format */

import { Dispatch } from 'react';

export type fieldType = 'inputField' | 'textArea';
export type inputFieldStatus = 'default' | 'disable' | 'active' | 'error';

export const makeInputFn = ({
	variants,
	status,
	className = '',
}: {
	variants?: fieldType;
	status: inputFieldStatus;
	className?: string;
}) => {
	return ['hover: cursor-pointer', fieldBg[status], fieldOutline[status], className].join(' ');
};

const fieldBg = {
	default: 'bg-white',
	disable: 'bg-neutral-300',
	active: 'bg-white',
	error: 'bg-white',
};

const fieldOutline = {
	default: 'border-1 border-neutral-300',
	disable: 'border-2 border-neutral-300',
	active: 'border-2 border-blue-300',
	error: 'border-2 border-blue-500',
};
