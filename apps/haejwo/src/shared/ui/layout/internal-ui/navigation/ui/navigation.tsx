/** @format */
'use client';
import { Button, Icons } from '@hyewon/design-system';
import { navigationList } from '../model/const';

const Navigation = () => {
	return (
		<nav className='w-full flex gap-6 py-3 px-5 fixed bottom-0 justify-center border-t-1 border-neutral-300 bg-white'>
			<ul className='w-full flex justify-around '>
				{navigationList.map((i) => (
					<Button
						variants='txtBtn'
						size='default'
						status='default'
						key={i.id}
						className='h-full w-full flex justify-center hover:cursor-pointer'>
						<Icons iconName={i.IconName} strokeWidth='1.5' color='#333' size='20' />
					</Button>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
