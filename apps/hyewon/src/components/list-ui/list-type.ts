/** @format */
import { ReactNode } from 'react';

export type ListNode = {
	id: string;
	title: string;
	children?: ListNode[];
	isImportant: boolean;
	onClick?: () => void | boolean | Promise<void | boolean>;
	icon?: ReactNode;
	imgUrl?: string;
	href?: string;
};

export interface ListItemProps {
	key?: string;
	listItem: ListNode[] | string;
	listClassName?: string;
	typoClassName?: string;
	isNeedIdx?: boolean;
	iconName?: string;
	isNeedBulletPoint?: boolean;
	onClick?: () => void;
}
