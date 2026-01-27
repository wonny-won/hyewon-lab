/** @format */

import React, { ReactNode } from 'react';
import Icons from '../icon/icons';

interface ModalPopupProps {
	setIsOpen: (state) => void;
	children?: ReactNode;
}

const ModalPopup = ({ setIsOpen, children }: ModalPopupProps) => {
	return (
		<div className='fixed inset-0 flex justify-center items-center z-30'>
			<div className='w-[70%] h-fit p-10 bg-slate-950 text-white rounded-lg'>
				<button
					className='hover: cursor-pointer'
					onClick={() => {
						setIsOpen((prev) => !prev);
					}}>
					<Icons iconName='Close' />
				</button>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default ModalPopup;
