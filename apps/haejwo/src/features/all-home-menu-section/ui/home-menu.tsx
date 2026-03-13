/** @format */
'use client';
import { Button, Icons, Typography } from '@hyewon/design-system';
import { homeMenuList } from '../model/const';
import { useState } from 'react';

const HomeMenu = () => {
	const [isActiveId, setIsActiveId] = useState<string | null>(null);

	return (
		<section className='w-full flex justify-center font-sans py-5'>
			<h1 className='hidden'>홈 메뉴 모두 보기</h1>
			<ul className='flex flex-wrap gap-3'>
				{homeMenuList.map((i) => (
					<li key={i.id} className='flex-grow bg-white rounded-[12px]'>
						<Button
							variants='outline'
							status={isActiveId === i.id ? 'active' : 'default'}
							size='xlarge'
							className='w-full flex whitespace-pre-line text-left gap-3 py-4 items-center'
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
		</section>
	);
};

export default HomeMenu;
