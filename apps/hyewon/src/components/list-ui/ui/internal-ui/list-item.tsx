/** @format */

import ListItemContextProvider from '../../feature/list-item.context';
import { ListItemProps } from '../../feature/list.type';
import ListItemContent from './list-item-content';

const ListItem = ({
	listItem,
	listClassName,
	typoClassName,
	isNeedBulletPoint = false,
	isNeedChevoronBullet = false,
	isNeedtitleIdx = false,
	titleIdx,
	onClick,
}: ListItemProps) => {
	return (
		<ListItemContextProvider listItem={listItem}>
			<ListItemContent
				listItem={listItem}
				listClassName={listClassName}
				typoClassName={typoClassName}
				isNeedBulletPoint={isNeedBulletPoint}
				isNeedChevoronBullet={isNeedChevoronBullet}
				isNeedtitleIdx={isNeedtitleIdx}
				titleIdx={titleIdx}
				onClick={onClick}
			/>
		</ListItemContextProvider>
	);
};

export default ListItem;
