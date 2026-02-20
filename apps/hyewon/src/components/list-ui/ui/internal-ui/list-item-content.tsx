/** @format */

import { ListItemProps } from '../../feature/list.type';
import { useListItemContext } from '../../feature/list-item.context';
import NormalIdxTxtItem from './list-item-type/normal-idx-txt';
import BulletChevoronItem from './list-item-type/bullet-chvoron';
import BulletPointItem from './list-item-type/bullet-point';
import ImgItem from './list-item-type/img-item';

const ListItemContent = ({
	listItem,
	listClassName,
	typoClassName,
	isNeedBulletPoint = false,
	isNeedChevoronBullet = false,
	isNeedtitleIdx = false,
	titleIdx,
	onClick,
}: ListItemProps) => {
	const { isOpen } = useListItemContext();
	const finalListClassName = ['flex flex-col text-core-neutral-300', listClassName].join(' ');

	return (
		<>
			{Array.isArray(listItem) ? (
				listItem.map((i, index) => {
					return (
						<div className={finalListClassName} key={index} onClick={onClick}>
							<BulletChevoronItem item={i} isNeedChevoronBullet={isNeedChevoronBullet} index={index} />
							<BulletPointItem isNeedBulletPoint={isNeedBulletPoint} item={i} />
							<ImgItem item={i} />

							{Array.isArray(i.children) && (isNeedChevoronBullet ? !!isOpen[index] : true) && (
								<div className='text-body-s pl-2.5 pb-1.5 pt-0.5'>
									<ListItemContent
										listItem={i.children}
										isNeedBulletPoint
										listClassName={listClassName}
										typoClassName={typoClassName}
									/>
								</div>
							)}
						</div>
					);
				})
			) : (
				<NormalIdxTxtItem
					finalListClassName={finalListClassName}
					isNeedtitleIdx={isNeedtitleIdx}
					titleIdx={titleIdx}
					onClick={onClick}
					listItem={listItem}
				/>
			)}
		</>
	);
};
export default ListItemContent;
