/** @format */

import Image from 'next/image';
import { ListItemProps } from './list-type';

const ListItem = ({
	listItem,
	listClassName,
	typoClassName,
	isNeedIdx = false,
	isNeedBulletPoint = false,
	onClick,
}: ListItemProps) => {
	const finalListClassName = ['flex flex-col text-core-neutral-300', listClassName].join(' ');
	const rainbowTxt =
		'bg-gradient-to-r from-yellow-500 via-core-green-300 to-blue-500 bg-clip-text text-transparent font-semibold';

	return (
		<>
			{Array.isArray(listItem) ? (
				listItem.map((i, index) => {
					return (
						<div className={finalListClassName} key={index} onClick={onClick}>
							{!!isNeedIdx && (
								<p
									className={`text-body-m font-medium text-core-gray-300 ${
										!!i.isImportant && rainbowTxt
									}`}>
									{index + 1}. {i.title}
								</p>
							)}
							{!!isNeedBulletPoint && (
								<p className={`text-body-s ${!!i.isImportant && rainbowTxt}`}> ‣ {i.title} </p>
							)}
							{!isNeedBulletPoint && !isNeedIdx && (
								<p
									className={`text-body-s font-medium text-core-gray-300 ${
										!!i.isImportant && rainbowTxt
									}`}>
									{i.title}
								</p>
							)}
							{!!i?.imgUrl && (
								<Image
									alt='설명'
									src={i?.imgUrl || ''}
									width={500}
									height={500}
									className='pl-3 pt-2'
								/>
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
				<div className={finalListClassName} onClick={onClick}>
					{listItem}
				</div>
			)}
		</>
	);
};

export default ListItem;
