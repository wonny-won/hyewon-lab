/** @format */
import React from 'react';
import ListItem from './list-item';
import { Button } from '@hyewon/design-system';

interface LstProps {
	direction?: 'horizontal' | 'virtical';
	listMap: any;
	color?: string;
}

const ListUI = ({ direction = 'virtical', listMap, color }: LstProps) => {
	const classStyle = {
		horizontal: 'flex gap-5 flex-wrap justify-center items-center',
		virtical: '',
	};

	return (
		<ul className={classStyle[direction]}>
			{listMap?.map((i: any) => {
				return (
					<>
						{direction === 'virtical' ? (
							<>
								<ListItem
									key={i.id}
									listItem={i?.title || i}
									listClassName='pt-2.5'
									typoClassName={['font-semibold', color ?? ''].join(' ')}
								/>
								{i.subtitle &&
									i.subtitle?.map((item, idx) => {
										return (
											<div key={item.id} className='pl-10'>
												<div className='flex items-center text-white py-1'>
													{item?.txt && `${idx + 1}. `} &nbsp;
													<ListItem listItem={item?.txt} />
												</div>
												{item?.children &&
													item?.children?.map((child, idx) => {
														return (
															<div key={item.id + 'child' + idx} className='pl-10'>
																<div className='flex items-center'>
																	‣ &nbsp;
																	<ListItem
																		key={item.id + idx}
																		listItem={child.childTxt}
																		typoClassName='text-body-s'
																	/>
																</div>
																{child?.desc &&
																	child?.desc?.map((descItem, idx) => {
																		return (
																			<div
																				key={item.id + 'descItem' + idx}
																				className='pl-10 flex items-center'>
																				‣ &nbsp;
																				<ListItem
																					key={descItem.id + idx}
																					listItem={descItem}
																					typoClassName='text-body-s'
																				/>
																			</div>
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
					</>
				);
			})}
		</ul>
	);
};

export default ListUI;
