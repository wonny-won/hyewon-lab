/** @format */
import React from 'react';
import ListItem from './list-item';

interface LstProps {
	direction?: 'horizontal' | 'virtical';
	listMap: any;
	isNeedIcon?: boolean;
	color?: string;
}

const ListUI = ({ direction = 'virtical', listMap, color }: LstProps) => {
	const classStyle = {
		horizontal: 'flex gap-5 mt-auto',
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
									isNeedIcon={false}
									listItem={i?.title || i}
									typoClassName={['font-semibold', color ?? ''].join(' ')}
								/>
								{i.subtitle &&
									i.subtitle?.map((item, idx) => {
										return (
											<div key={item.id} className='pl-10'>
												<div className='flex items-center text-white py-1'>
													{idx + 1}. &nbsp;
													<ListItem isNeedIcon={false} listItem={item?.txt} />
												</div>
												{item?.children &&
													item?.children?.map((child, idx) => {
														return (
															<div key={item.id + 'child' + idx} className='pl-10'>
																<div className='flex items-center'>
																	‣ &nbsp;
																	<ListItem
																		key={item.id + idx}
																		isNeedIcon={false}
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
																					isNeedIcon={false}
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
							<a href={i?.onClick}>{i?.icon}</a>
						)}
					</>
				);
			})}
		</ul>
	);
};

export default ListUI;
