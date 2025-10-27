/** @format */

import { Typography } from '@hyewon/design-system';
import ListUI from '@/components/list-ui/list-ui';
import { aboutMyProfile } from '@/commons/apis/intro';
import LiquidSection from '@/components/liquid-section/liquid-section';

const Intro = () => {
	return (
		<header className='w-[50%] h-screen py-25 p-5 flex justify-center'>
			<div className='flex flex-col gap-6'>
				<LiquidSection type='prograssCard' imgSrc={aboutMyProfile.profile} imgAlt='profile img'>
					<div>
						<Typography as='h1' variants='display-l' color='text-white'>
							{aboutMyProfile.name}
						</Typography>
						<Typography as='h2' variants='body-l-strong' color='text-white'>
							{aboutMyProfile.position}
						</Typography>
					</div>
				</LiquidSection>
				<div className='flex gap-4'>
					<LiquidSection>
						<ListUI
							direction='virtical'
							listMap={aboutMyProfile.summaryTxt}
							isNeedIcon
							color='text-core-neutral-300'
						/>
					</LiquidSection>
					<LiquidSection calssName='h-fit max-w-[150px]'>
						<ListUI direction='horizontal' listMap={aboutMyProfile.contact} color='text-white' />
					</LiquidSection>
				</div>
			</div>
		</header>
	);
};
export default Intro;
