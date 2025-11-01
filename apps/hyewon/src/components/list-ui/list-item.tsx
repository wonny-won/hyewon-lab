/** @format */

import { Icons, Typography } from '@hyewon/design-system';

interface ListItemProps {
	key?: string;
	listItem: string;
	listClassName?: string;
	typoClassName?: string;
	isNeedIdx?: boolean;
	idx?: number;
	iconName?: string;
	isNeedBulletPoint?: boolean;
}

const ListItem = ({
	listItem,
	listClassName,
	typoClassName,
	iconName,
	isNeedIdx = false,
	isNeedBulletPoint = false,
	idx = 0,
}: ListItemProps) => {
	const typo = ['flex gap-1.5 items-center whitespace-pre-line', typoClassName ?? ''].join(' ');
	const finalListClassName = ['flex items-center gap-1', listClassName].join(' ');

	return (
		<li className={finalListClassName}>
			{!!iconName?.length && <Icons iconName={iconName || ''} />}
			{!!isNeedIdx && !!idx && <div className='text-body-s'>{idx}.</div>}
			{!!isNeedBulletPoint && <div className='text-body-s'>‣</div>}
			<Typography as='p' variants='body-s' className={typo}>
				{listItem}
			</Typography>
		</li>
	);
};

export default ListItem;
