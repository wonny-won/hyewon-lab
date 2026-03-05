/** @format */

import { createPortal } from 'react-dom';
import React, { ReactNode } from 'react';
import BackDrop from './modal-backdrop';
import ModalPopup from './modal-popup';

interface ModalPropType {
	setIsOpen: (open: any) => void;
	title?: string;
	iconName?: string;
	iconColor?: string;
	children?: ReactNode;
}

const Modal = ({ setIsOpen, title, iconName, iconColor, children }: ModalPropType) => {
	if (typeof window === 'undefined') return null;

	const el = document.getElementById('modal');
	if (!el) return null;

	return createPortal(
		<>
			<BackDrop />
			<ModalPopup title={title} iconName={iconName} iconColor={iconColor} setIsOpen={setIsOpen}>
				{children}
			</ModalPopup>
		</>,
		el
	);
};

export default Modal;
