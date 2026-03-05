/** @format */

import { InputField } from '@hyewon/design-system';
import Image from 'next/image';
import HomeMenu from '../features/home-menu/ui/home-menu';

export default function Home() {
	return (
		<div className='w-full flex justify-center font-sans dark:bg-black'>
			<HomeMenu />
		</div>
	);
}
