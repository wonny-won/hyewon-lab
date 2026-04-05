/** @format */

import { Button, Icons, InputField } from '@hyewon/design-system';
import Image from 'next/image';

const Header = () => {
	return (
		<header className='bg-[#e5e5e5a5] z-10 w-full gap-1 fixed top-0 flex justify-between items-center px-2'>
			<Image alt='로고' src='/logo.png' width={70} height={70} />
			<div className='flex max-w-[60%] items-center'>
				<InputField iconName='Search' placeholder='근처 심부름 검색' className='py-1 px-2.5 rounded-[50px]' />
				<Button variants='txtBtn' size='default' status='default'>
					<Icons iconName='Bell' size='20' />
				</Button>
			</div>
		</header>
	);
};

export default Header;
