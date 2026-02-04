/** @format */

import { Icons, Typography } from '@hyewon/design-system';

const Footer = () => {
	return (
		<footer className='flex justify-center'>
			<Typography as='a' variants='body-s' className='flex gap-2 items-center'>
				see in hyewon-lab github repo
				<Icons iconName='GitBranchIcon' size='12' />
			</Typography>
		</footer>
	);
};

export default Footer;
