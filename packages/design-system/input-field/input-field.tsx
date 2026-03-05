/** @format */
'use client';
import React, { useState } from 'react';
import Icons from '../icon/icons';
import { fieldType, makeInputFn, inputFieldStatus } from './input.token';

interface InputFieldPropType {
	variants?: fieldType;
	className?: string;
	iconName: string;
	placeholder?: string;
	onChange?: (e: any) => void;
}

const InputField = ({ iconName, variants, className, placeholder, onChange }: InputFieldPropType) => {
	const [inputStatus, setInputStatus] = useState<inputFieldStatus>('default');

	return (
		<div
			className={`w-full rounded-[8px] p-2.5 flex justify-between items-center ${makeInputFn({
				variants,
				status: inputStatus,
				className,
			})}`}
			onClick={() => {
				setInputStatus('active');
			}}>
			<input
				className='w-full outline-none mr-1'
				placeholder={placeholder}
				onBlur={() => {
					setInputStatus('default');
				}}
				onChange={onChange}
			/>
			<Icons iconName={iconName} size='18' className='shrink-0' />
		</div>
	);
};

export default InputField;
