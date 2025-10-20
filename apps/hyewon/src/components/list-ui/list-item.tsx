/** @format */

import { Icons, Typography } from '@hyewon/design-system';

interface ListItemProps {
	key?: string;
	isNeedIcon?: boolean;
	listItem: string | any;
}

const ListItem = ({ key, isNeedIcon = false, listItem }: ListItemProps) => {
	const displayText =
		typeof listItem === 'object' && listItem !== null ? listItem.title || JSON.stringify(listItem) : listItem;

	return (
		<li key={key}>
			<Typography as='p' variants='body-m' className='flex gap-1 items-center py-2 whitespace-pre-line'>
				{isNeedIcon && <Icons iconName='DancheongFlowerIcon' size='20px' />}
				{displayText}
			</Typography>
		</li>
	);
};

export default ListItem;
