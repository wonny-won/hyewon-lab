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
	isNeedtitleIdx = false,
	titleIdx,
	onClick,
}: ListItemProps) => {
	const [isOpen, setIsOpen] = useState<boolean[]>(() => {
		if (Array.isArray(listItem)) {
			return listItem.map((i) => i.isOpen ?? false);
		}
		return [];
	});
	const finalListClassName = ['flex flex-col text-core-neutral-300', listClassName].join(' ');
	console.log(listItem);

	return (
		<>
			{Array.isArray(listItem) ? (
				listItem.map((i, index) => {
					return (
						<div className={finalListClassName} key={index} onClick={onClick}>
							{!!isNeedChevoronBullet && (
								<div
									className={`hover: cursor-pointer flex items-center gap-1 text-label-l font-semibold ${
										!!i.isImportant ? 'text-core-green-300' : 'text-core-neutral-100'
									}`}
									onClick={() => {
										setIsOpen((prev) => prev.map((val, i) => (i === index ? !val : val)));
									}}>
									<span className='pr-0.5'>
										<Icons
											iconName='TriangleLeft'
											size='16px'
											className={`transition-transform duration-200 ${
												Array.isArray(i.children) && !!isOpen[index] ? 'rotate-90' : 'rotate-0'
											}`}
										/>
									</span>

									{i.title}
								</div>
							)}

							{!!isNeedBulletPoint && (
								<p
									className={`text-body-s py-0.5 whitespace-pre-line ${
										!!i.isImportant ? 'text-white/95' : 'text-core-neutral-200/90'
									}`}>
									• {i.title}
								</p>
							)}

							{!isNeedBulletPoint && !isNeedChevoronBullet && (
								<p
									className={`text-label-xl font-medium whitespace-pre-line ${
										!!i.isImportant ? 'text-core-green-300/80' : 'text-core-gray-300/80'
									}`}>
									{i.title}
								</p>
							)}

							{/* 이미지 */}
							{i?.imgUrl?.length && (
								<div className={`flex ${i?.imgUrl?.[0].direction} overflow-auto`}>
									{!!i?.imgUrl?.length &&
										i?.imgUrl?.map((item) => (
											<figure key={item.id} className='overflow-hidden rounded-[8px]'>
												<Image
													alt='설명'
													src={item?.url || ''}
													width={500}
													height={450}
													objectFit='contain'
													className='pl-3.5 pt-2 pb-3.5 max-w-[350px] max-h-[550px] max-lg:max-w-[300px] max-sm:max-w-[200px]'
													style={{ borderRadius: '8px' }}
												/>
											</figure>
										))}
								</div>
							)}

							{Array.isArray(i.children) && (isNeedChevoronBullet ? !!isOpen[index] : true) && (
								<div className='text-body-s pl-2.5 pb-1.5 pt-0.5'>
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
				<div
					className={`${finalListClassName} flex-row items-center ${
						isNeedtitleIdx ? 'mt-7' : typeof titleIdx === 'number' && titleIdx === 0 ? '' : 'mt-10'
					}`}
					onClick={onClick}>
					{isNeedtitleIdx && typeof titleIdx === 'number' && (
						<span className='text-label-s text-core-green-300 mr-2 font-extrabold'>{++titleIdx}. </span>
					)}
					{listItem}
				</div>
			)}
		</>
	);
};

export default ListItem;
