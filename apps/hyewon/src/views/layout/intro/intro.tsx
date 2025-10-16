/** @format */

import { Typography } from '@hyewon/design-system';
import { aboutMyProfile } from './intro-const';
import Image from 'next/image';
import ListUI from '@/components/list-ui/list-ui';

const Intro = () => {
	return (
		<header className="w-[460px] h-screen fixed py-26 px-30 flex flex-col gap-7 bg-[url('/side-panel-bg.png')]">
			<Image src={aboutMyProfile.profile} alt='profile img' width={200} height={250} />

			<div className='flex flex-col gap-1'>
				<Typography as='h1' variants='display-l'>
					{aboutMyProfile.name}
				</Typography>
				<Typography as='h2' variants='heading-m'>
					{aboutMyProfile.position}
				</Typography>
			</div>
			<ListUI direction='virtical' listMap={aboutMyProfile.summaryTxt} isNeedIcon />
			<ListUI direction='horizontal' listMap={aboutMyProfile.contact} />
		</header>
	);
};
export default Intro;
