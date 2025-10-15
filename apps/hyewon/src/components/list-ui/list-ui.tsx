/** @format */
import { Icons, Typography } from '@hyewon/design-system';
import React from 'react';

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
			{listMap?.map((i: any, idx) => {
				return (
					<>
						{i?.children ? (
							<div>
								<Typography variants='body-m' className='flex gap-1'>
									{isNeedIcon && <Icons iconName='DancheongFlowerIcon' size='20px' />}
									{i.main}
								</Typography>
								{i?.children?.map((item, idx) => (
									<li key={idx} className='pl-12.5'>
										<Typography as='p' variants='body-m' className='flex gap-1 items-center py-2'>
											{/* {isNeedIcon && <Icons iconName='DancheongFlowerIcon' size='20px' />} */}
											{item}
										</Typography>
									</li>
								))}
							</div>
						) : (
							<li key={idx}>
								{direction === 'virtical' ? (
									<Typography as='p' variants='body-m' className='flex gap-1 items-center py-2'>
										<Icons iconName='DancheongFlowerIcon' size='20px' />
										{i}
									</Typography>
								) : (
									<a href={i?.onClick}>{i?.icon}</a>
								)}
							</li>
						)}
					</>
				);
			})}
		</ul>
	);
};

export default ListUI;
