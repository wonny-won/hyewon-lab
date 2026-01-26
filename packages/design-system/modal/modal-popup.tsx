/** @format */

import React from 'react';

interface ModalPopupProps {
	setIsOpen: (state) => void;
}

const ModalPopup = ({ setIsOpen }: ModalPopupProps) => {
	return (
		<div className='fixed inset-0 flex justify-center items-center z-30'>
			<div className='w-[500px] h-[500px] flex justify-center items-center bg-black text-white rounded-lg'>
				<button
					onClick={() => {
						setIsOpen((prev) => !prev);
					}}>
					click
				</button>
				으아아아
			</div>
		</div>
	);
};

export default ModalPopup;
