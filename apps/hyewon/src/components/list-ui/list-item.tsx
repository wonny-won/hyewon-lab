/** @format */

import Image from 'next/image';
import { ListItemProps } from './list-type';
import { useState } from 'react';
import { Icons } from '@hyewon/design-system';

const ListItem = ({
	listItem,
	listClassName,
	typoClassName,
	isNeedBulletPoint = false,
	isNeedChevoronBullet = false,
	onClick,
}: ListItemProps) => {
	const [isOpen, setIsOpen] = useState<boolean[]>(() => {
		if (Array.isArray(listItem)) {
			return listItem.map((i) => i.isOpen ?? false);
		}
		return [];
	});
	const finalListClassName = ['flex flex-col text-core-neutral-300', listClassName].join(' ');

	return (
		<>
			{Array.isArray(listItem) ? (
				listItem.map((i, index) => {
					return (
						<div className={finalListClassName} key={index} onClick={onClick}>
							{!!isNeedChevoronBullet && (
								<div
									className={`hover: cursor-pointer flex items-center gap-1 text-body-m font-semibold ${
										!!i.isImportant ? 'text-core-green-300' : 'text-core-neutral-200'
									}`}
									onClick={() => {
										setIsOpen((prev) => prev.map((val, i) => (i === index ? !val : val)));
									}}>
									<Icons
										iconName={!!isOpen[index] ? 'ChevoronDwon' : 'ChevoronRight'}
										size='16'
										color='#a3a3a3'
									/>
									{i.title}
								</div>
							)}

							{!!isNeedBulletPoint && (
								<p
									className={`text-body-s pb-0.5 ${
										!!i.isImportant ? 'text-core-green-300' : 'text-core-neutral-200/85'
									}`}>
									• {i.title}
								</p>
							)}

							{!isNeedBulletPoint && !isNeedChevoronBullet && (
								<p
									className={`text-body-l font-medium ${
										!!i.isImportant ? 'text-core-green-300' : 'text-core-gray-300/80'
									}`}>
									{i.title}
								</p>
							)}

							{/* 이미지 */}
							{!!i?.imgUrl && (
								<Image
									alt='설명'
									src={i?.imgUrl || ''}
									width={500}
									height={450}
									objectFit='contain'
									className='pl-3.5 pt-2 pb-3.5'
								/>
							)}

							{Array.isArray(i.children) && !!isOpen[index] && (
								<div className='text-body-s pl-6 pb-3.5 pt-0.5'>
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
