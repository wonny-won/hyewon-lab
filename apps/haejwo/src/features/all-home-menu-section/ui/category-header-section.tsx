/** @format */
'use client';
import { Button, Typography } from '@hyewon/design-system';
import { homeMenuList } from '../model/const';
import { useState } from 'react';

const CategoryHeaderSection = () => {
	const [isActiveId, setIsActiveId] = useState<string | null>(null);

	return (
		<section className='w-full flex justify-center font-sans py-5 overflow-x-scroll'>
			<h1 className='hidden'>홈 메뉴 모두 보기</h1>
			<ul className='flex gap-1'>
				{homeMenuList.map((i) => (
					<li key={i.id} className='shrink-0 bg-white rounded-full'>
						<Button
							variants='chipsOutline'
							status={isActiveId === i.id ? 'active' : 'default'}
							size='default'
							className='w-full flex gap-3 py-4 items-center'
							onClick={() => setIsActiveId((prev) => (prev === i.id ? null : i.id))}>
							<Typography as='p' variants='label-m' color='text-core-neutral-600'>
								{i.title}
							</Typography>
						</Button>
					</li>
				))}
			</ul>
		</section>
	);
};

export default CategoryHeaderSection;
