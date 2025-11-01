/** @format */
import React, { Fragment } from 'react';
import ListItem from './list-item';

interface LstProps {
	direction?: 'horizontal' | 'virtical';
	listMap: any;
}

const ListUI = ({ direction = 'virtical', listMap }: LstProps) => {
	const classStyle = {
		horizontal: 'flex gap-5 flex-wrap justify-center items-center',
		virtical: '',
	};

	return (
		<ul className={classStyle[direction]}>
			{listMap?.map((i: any, idx) => {
				return (
					<Fragment key={String(i.id) + idx}>
						{direction === 'virtical' ? (
							<>
								<ListItem
									listItem={i?.title || i}
									listClassName='pt-3'
									typoClassName={'font-semibold text-white'}
								/>
								{i.subtitle &&
									i.subtitle?.map((item, idx) => {
										return (
											<div key={String(item.id) + idx} className='pl-6'>
												<ListItem
													isNeedIdx
													idx={idx + 1}
													listItem={item?.txt}
													listClassName='pt-1'
													typoClassName='body-xs text-core-neutral-100'
												/>
												{item?.children &&
													item?.children?.map((child, idx) => {
														return (
															<div key={item.id + 'child' + idx} className='pl-6'>
																<ListItem
																	listItem={child.childTxt}
																	isNeedBulletPoint
																	listClassName='pt-1'
																	typoClassName='body-xs text-core-neutral-300'
																/>
																{child?.desc &&
																	child?.desc?.map((descItem, idx) => {
																		return (
																			<ListItem
																				key={item.id + 'descItem' + idx}
																				listItem={descItem}
																				isNeedBulletPoint
																				listClassName='pl-6'
																			/>
																		);
																	})}
															</div>
														);
													})}
											</div>
										);
									})}
							</>
						) : (
							<li className='flex items-center justify-center w-[45px] h-[45px] rounded-[25px] bg-core-neutral-50/20'>
								<a href={i?.onClick}>{i?.icon}</a>
							</li>
						)}
					</Fragment>
				);
			})}
		</ul>
	);
};

export default ListUI;
