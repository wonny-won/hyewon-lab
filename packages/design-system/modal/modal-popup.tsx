/** @format */

import React, { ReactNode } from 'react';
import Icons from '../icon/icons';
import Typography from '../typography/typography';

interface ModalPopupProps {
	setIsOpen: (state) => void;
	title?: string;
	iconName?: string;
	iconColor?: string;
	children?: ReactNode;
}

const ModalPopup = ({ setIsOpen, title, iconName, iconColor, children }: ModalPopupProps) => {
	return (
		<div className='fixed inset-0 flex justify-center items-center z-30'>
			<div
				role='dialog'
				aria-modal='true'
				className='relative w-[70%] h-[75vh] max-sm:w-full max-sm:h-full overflow-auto px-10 pb-10 bg-slate-950 text-white rounded-lg'>
				<div className='sticky h-[110px] max-sm:h-[130px] pt-10 top-0 z-10 flex justify-between bg-slate-950 pb-8'>
					<div className='flex'>
						{iconName && <Icons iconName={iconName} size='45px' color={iconColor ?? 'currentColor'} />}
						{title && (
							<Typography
								as='h1'
								variants='heading-l'
								color='text-core-green-300'
								className='pl-4 max-sm:text-heading-s'>
								{title}
							</Typography>
						)}
					</div>
					<button
						className='hover: cursor-pointer ml-auto'
						onClick={() => {
							setIsOpen((prev) => !prev);
						}}>
						<Icons iconName='Close' size='30px' />
					</button>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default ModalPopup;
