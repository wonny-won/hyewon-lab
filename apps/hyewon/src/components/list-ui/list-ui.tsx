/** @format */
import React, { Fragment } from 'react';
import ListItem from './list-item';
import { ListNode } from './list-type';

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
			{listMap?.map((i: ListNode, idx) => {
				return (
					<Fragment key={`${i.id}-${i.title}-${idx}`}>
						{direction === 'virtical' ? (
							<li className='flex flex-col'>
								<ListItem
									listItem={i?.title}
									listClassName='text-body-m pt-4 font-bold text-white/80'
								/>
								{Array.isArray(i.children) && (
									<Fragment key={i.id + 'child'}>
										<ListItem listItem={i.children} isNeedIdx listClassName='pt-1 pl-2' />
									</Fragment>
								)}
							</li>
						) : (
							<li className='flex items-center justify-center w-[45px] h-[45px] rounded-[25px] bg-core-neutral-50/20'>
								<button onClick={i?.onClick}>{i?.icon}</button>
							</li>
						)}
					</Fragment>
				);
			})}
		</ul>
	);
};

export default ListUI;
