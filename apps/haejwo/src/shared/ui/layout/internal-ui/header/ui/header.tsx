/** @format */

import { Icons } from '@hyewon/design-system';
import Image from 'next/image';

const Header = () => {
	return (
		<header className='w-full fixed top-0 flex justify-between items-center pr-5 pl-2 bg-zinc-50'>
			<Image alt='로고' src='/logo.png' width={50} height={50} />
			<Icons iconName='Bell' size='20' />
		</header>
	);
};

export default Header;
