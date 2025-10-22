/** @format */

import { Icons, Typography } from '@hyewon/design-system';

interface ListItemProps {
	key?: string;
	isNeedIcon?: boolean;
	listItem: string | any;
	listClassName?: string;
	typoClassName?: string;
}

const ListItem = ({ key, isNeedIcon = false, listItem, listClassName, typoClassName }: ListItemProps) => {
	const typo = [typoClassName ?? '', 'flex gap-1 items-center whitespace-pre-line py-1'].join(' ');
	const displayText =
		typeof listItem === 'object' && listItem !== null ? listItem.title || JSON.stringify(listItem) : listItem;

	return (
		<li key={key} className={listClassName}>
			<Typography as='p' variants='body-m' className={typo}>
				{isNeedIcon && <Icons iconName='DancheongFlowerIcon' size='20px' />}
				{displayText}
			</Typography>
		</li>
	);
};

export default ListItem;
