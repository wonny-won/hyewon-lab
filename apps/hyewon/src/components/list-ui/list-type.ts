/** @format */
import { ReactNode } from 'react';

export type ListNode = {
	id: string;
	title: string;
	children?: ListNode[];
	isImportant: boolean;
	onClick?: () => void | boolean | Promise<void | boolean>;
	icon?: ReactNode;
	imgUrl?: { id: string; url: string; direction: string }[];
	href?: string;
	isOpen?: boolean;
};

export interface ListItemProps {
	key?: string;
	// listStyle?: 'custom' | 'default';
	listItem: ListNode[] | string;
	listClassName?: string;
	typoClassName?: string;
	iconName?: string;
	isNeedBulletPoint?: boolean;
	isNeedChevoronBullet?: boolean;
	isNeedtitleIdx?: boolean;
	titleIdx?: number;
	onClick?: () => void;
}
