/** @format */
'use client';
import { Button, Icons, Typography } from '@hyewon/design-system';
import { homeMenuList } from '../model/const';
import { useState } from 'react';

const HomeMenu = () => {
	const [isActiveId, setIsActiveId] = useState<string | null>(null);

	return (
		<ul className='flex flex-wrap gap-3'>
			{homeMenuList.map((i) => (
				<li key={i.id} className='shrink-0 bg-white rounded-[12px]'>
					<Button
						variants='outline'
						status={isActiveId === i.id ? 'active' : 'default'}
						size='xlarge'
						className='flex whitespace-pre-line text-left gap-3 py-4 items-center'
						onClick={() => setIsActiveId((prev) => (prev === i.id ? null : i.id))}>
						<Typography as='p' variants='label-m' color='text-core-neutral-600'>
							{i.title}
						</Typography>
						<span className='ml-auto'>
							<Icons iconName={i.iconName} size='40' strokeWidth='0.8' color='#686868' />
						</span>
					</Button>
				</li>
			))}
		</ul>
	);
};

export default HomeMenu;
