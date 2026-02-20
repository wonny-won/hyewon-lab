/** @format */
import React, { Fragment } from 'react';
import { ListNode, ListUiProps } from '../feature/list.type';
import ListItem from './internal-ui/list-item';
import { classStyle } from '../feature/const';
import ListUIContextProvider from '../feature/list-ui.context';
import BtnListItem from './internal-ui/list-item-type/btn-item';

const ListUIContent = ({ direction = 'virtical', listMap, isNeedtitleIdx }: ListUiProps) => {
	return (
		<ul className={classStyle[direction]}>
			{listMap?.map((i: ListNode, idx) => {
				return (
					<Fragment key={`${i.id}-${i.title}-${idx}`}>
						{direction === 'virtical' ? (
							<li className='flex flex-col gap-2'>
								{i?.title && (
									<ListItem
										isNeedtitleIdx={isNeedtitleIdx}
										titleIdx={idx}
										listItem={i?.title}
										listClassName='pl-2 text-[18px] pt-5 pb-2 font-bold text-white/90 underline decoration-core-green-300/20 decoration-4'
									/>
								)}
								{Array.isArray(i.children) && (
									<Fragment key={i.id + 'child'}>
										<ListItem
											listItem={i.children}
											isNeedChevoronBullet={!!i.children}
											listClassName='pl-2 '
										/>
									</Fragment>
								)}
							</li>
						) : (
							<BtnListItem item={i} idx={idx} />
						)}
					</Fragment>
				);
			})}
		</ul>
	);
};

const ListUI = ({ direction = 'virtical', listMap, isNeedtitleIdx }: ListUiProps) => {
	return (
		<ListUIContextProvider>
			<ListUIContent direction={direction} listMap={listMap} isNeedtitleIdx={isNeedtitleIdx} />
		</ListUIContextProvider>
	);
};

export default ListUI;
