/** @format */

import { onClickOpenNewWindow } from '@/commons/utils/link';
import { Icons, Typography } from '@hyewon/design-system';

const Footer = () => {
	return (
		<footer className='flex justify-center pb-6'>
			<button
				className='border-none hover:cursor-pointer hover:text-core-green-300'
				onClick={() => onClickOpenNewWindow('https://github.com/wonny-won/hyewon-lab')}>
				<Typography variants='label-m' className='flex gap-1 items-center'>
					see in hyewon-lab github repo
					<Icons iconName='GitBranchIcon' size='13' />
				</Typography>
			</button>
		</footer>
	);
};

export default Footer;
