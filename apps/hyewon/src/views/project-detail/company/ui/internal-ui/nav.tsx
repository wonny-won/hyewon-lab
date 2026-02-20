/** @format */

import { Icons } from '@hyewon/design-system';
import { useRouter } from 'next/router';

const Navigation = () => {
	const router = useRouter();

	return (
		<nav className='w-full flex items-center gap-4 pb-10'>
			<button
				className='hover:cursor-pointer'
				onClick={() => {
					router.back();
				}}>
				<Icons iconName='ArrowLeft' size='60' color={'#5eead4'} />
			</button>
		</nav>
	);
};

export default Navigation;
