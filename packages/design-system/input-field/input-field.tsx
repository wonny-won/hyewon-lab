/** @format */
import React from 'react';
import Icons from '../icon/icons';

interface InputFieldPropType {
	iconName: string;
}

const InputField = ({ iconName }: InputFieldPropType) => {
	return (
		<div className='w-full py-4 border border-neutral-200 flex justify-between items-center'>
			<input className='w-full outline-none' />
			<Icons iconName={iconName} size='20' />
		</div>
	);
};

export default InputField;
