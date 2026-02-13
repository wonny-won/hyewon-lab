/** @format */

import { createPortal } from 'react-dom';
import React from 'react';
import BackDrop from './modal-backdrop';
import ModalPopup from './modal-popup';

const Modal = ({ setIsOpen, title, iconName, iconColor, children }) => {
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
