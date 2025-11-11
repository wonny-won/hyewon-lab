/** @format */

import { ListItemProps } from './list-type';

const ListItem = ({
	listItem,
	listClassName,
	typoClassName,
	isNeedIdx = false,
	isNeedBulletPoint = false,
	onClick,
}: ListItemProps) => {
	const finalListClassName = ['flex flex-col gap-1 text-core-neutral-300', listClassName].join(' ');
	const rainbowTxt =
		'bg-gradient-to-r from-yellow-500 via-core-green-300 to-blue-500 bg-clip-text text-transparent font-semibold';

	return (
		<>
			{Array.isArray(listItem) ? (
				listItem.map((i, index) => {
					return (
						<div className={finalListClassName} key={index}>
							{!!isNeedIdx && (
								<div
									className={`text-body-s font-medium text-core-gray-300 ${
										!!i.isImportant && rainbowTxt
									}`}>
									{index + 1}. {i.title}
								</div>
							)}
							{!!isNeedBulletPoint && (
								<div className={`text-body-xs ${!!i.isImportant && rainbowTxt}`}> ‣ {i.title} </div>
							)}
							{!isNeedBulletPoint && !isNeedIdx && (
								<div
									className={`text-body-s font-medium text-core-gray-300 ${
										!!i.isImportant && rainbowTxt
									}`}>
									{i.title}
								</div>
							)}

							{Array.isArray(i.children) && (
								<div className='text-body-s pl-6'>
									<ListItem
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
				<div className={finalListClassName}>{listItem}</div>
			)}
		</>
	);
};

export default ListItem;
