/** @format */
import React from 'react';
import ListItem from './list-item';

interface LstProps {
	direction?: 'horizontal' | 'virtical';
	listMap: any;
	isNeedIcon?: boolean;
}

const ListUI = ({ direction = 'virtical', listMap, isNeedIcon = false }: LstProps) => {
	const classStyle = {
		horizontal: 'flex gap-2.5 mt-auto',
		virtical: '',
	};

	return (
		<ul className={classStyle[direction]}>
			{listMap?.map((i: any) => {
				return (
					<>
						{direction === 'virtical' ? (
							<>
								<ListItem key={i.id} isNeedIcon={false} listItem={i?.title || i} />
								{i.subtitle &&
									i.subtitle?.map((item, idx) => {
										console.log(item);
										return (
											<div key={item.id} className='pl-10'>
												<div className='flex items-center'>
													{idx + 1}. &nbsp;
													<ListItem isNeedIcon={false} listItem={item?.txt} />
												</div>
												{item?.children &&
													item?.children?.map((child, idx) => {
														return (
															<div key={item.id + 'child' + idx} className='pl-10'>
																<div className='flex items-center'>
																	▸ &nbsp;
																	<ListItem
																		key={item.id + idx}
																		isNeedIcon={false}
																		listItem={child.childTxt}
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
