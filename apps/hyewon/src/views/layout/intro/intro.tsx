/** @format */

import { Typography } from '@hyewon/design-system';
import Image from 'next/image';
import ListUI from '@/components/list-ui/list-ui';
import { aboutMyProfile } from '@/commons/apis/intro';

const Intro = () => {
	return (
		<header className='w-[50%] h-screen py-25 flex justify-center'>
			<div className='flex flex-col gap-6'>
				<Image src={aboutMyProfile.profile} alt='profile img' width={200} height={250} />
				<div>
					<Typography as='h1' variants='display-l' color='text-white'>
						{aboutMyProfile.name}
					</Typography>
					<Typography as='h2' variants='body-l-strong' color='text-white'>
						{aboutMyProfile.position}
					</Typography>
				</div>
				<ListUI
					direction='virtical'
					listMap={aboutMyProfile.summaryTxt}
					isNeedIcon
					color='text-core-neutral-300'
				/>
				<ListUI direction='horizontal' listMap={aboutMyProfile.contact} color='text-white' />
			</div>
		</header>
	);
};
export default Intro;
