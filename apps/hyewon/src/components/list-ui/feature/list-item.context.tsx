/** @format */

import { createContext, useContext, useState } from 'react';
import { ListNode } from './list.type';

/**
 * type
 */
interface ListItemContextType {
	isOpen: boolean[];
	setIsOpen: React.Dispatch<boolean[] | ((prevState: boolean[]) => boolean[])>;
}
interface ListItemContextProviderType {
	children: React.ReactNode;
	listItem: ListNode[] | string;
}

/**
 * context
 */
const ListItemContext = createContext<ListItemContextType | null>(null);
export const useListItemContext = () => {
	const context = useContext(ListItemContext);
	if (!context) {
		throw new Error('useListItemContext must be used within ListItemContextProvider');
	}
	return context;
};

/**
 *
 * @param children
 * @param listItem
 * @returns
 * [ 컨텍스트 제공 데이터 ]
 * isOpen
 * setIsOpen
 */
const ListItemContextProvider = ({ children, listItem }: ListItemContextProviderType) => {
	const [isOpen, setIsOpen] = useState<boolean[]>(() => {
		if (Array.isArray(listItem)) {
			return listItem.map((i) => i.isOpen ?? false);
		}
		return [];
	});

	return <ListItemContext.Provider value={{ isOpen, setIsOpen }}>{children}</ListItemContext.Provider>;
};
export default ListItemContextProvider;
