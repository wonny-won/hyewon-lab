/** @format */

import React from 'react';
import { Tooltip } from '@hyewon/design-system';

export const onClickCopyClipboard = async (copyContent: string, successMessage: string, errorMessage: string) => {
	if (!copyContent) return;
	try {
		await window.navigator.clipboard.writeText(copyContent);
		return (
			<Tooltip content={successMessage} position='top' bgColor='green'>
				{successMessage}
			</Tooltip>
		);
	} catch (error) {
		console.error(error);
		return (
			<Tooltip content={errorMessage} position='top' bgColor='red'>
				{errorMessage}
			</Tooltip>
		);
	}
};
