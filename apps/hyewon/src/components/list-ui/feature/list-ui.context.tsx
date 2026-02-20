/** @format */

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ListNode } from './list.type';
import { CopyClipboardResult } from '@/commons/utils/copy.clipborad';

interface ListUIContextType {
	activeTooltipId: string | null;
	clipboardTxt: string | null;
	handleIconClick: (node: ListNode, identifier: string) => void;
	getIdentifier: (node: ListNode, idx: number) => string;
}

/**
 * context
 */
const ListUIContext = createContext<ListUIContextType | null>(null);
export const useListUIContext = () => {
	const context = useContext(ListUIContext);
	if (!context) {
		throw new Error('ListUIContext must be used within ListUIContextProvider');
	}
	return context;
};

/**
 *
 * @param children
 * @returns
 */
const ListUIContextProvider = ({ children }) => {
	const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
	const [clipboardTxt, setClipboardTxt] = useState<string | null>(null);
	const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (tooltipTimerRef.current) {
				clearTimeout(tooltipTimerRef.current);
			}
		};
	}, []);

	const resolveTooltipContent = (result: unknown): string | null => {
		if (React.isValidElement(result)) {
			const content = (result.props as { content?: string })?.content;
			return typeof content === 'string' ? content : null;
		}

		if (result && typeof result === 'object' && 'successMessage' in result) {
			return (result as CopyClipboardResult & { successMessage: string }).successMessage;
		}

		if (typeof result === 'string') {
			return result;
		}

		return null;
	};

	const handleIconClick = async (node: ListNode, identifier: string) => {
		const handler = node?.onClick;
		if (!handler) return;

		try {
			const result = await handler();

			if (result) {
				setActiveTooltipId(identifier);
				setClipboardTxt(resolveTooltipContent(result) ?? 'nothing-to-clipboard');
				if (tooltipTimerRef.current) {
					clearTimeout(tooltipTimerRef.current);
				}
				tooltipTimerRef.current = setTimeout(() => {
					setActiveTooltipId(null);
					tooltipTimerRef.current = null;
				}, 1500);
			} else {
				setActiveTooltipId(null);
			}
		} catch {
			setActiveTooltipId(null);
		}
	};

	const getIdentifier = (node: ListNode, idx: number) => node?.id ?? node?.title ?? `list-item-${idx}`;

	return (
		<ListUIContext.Provider value={{ activeTooltipId, clipboardTxt, handleIconClick, getIdentifier }}>
			{children}
		</ListUIContext.Provider>
	);
};

export default ListUIContextProvider;
