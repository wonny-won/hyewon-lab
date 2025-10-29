/** @format */

import { Typography } from '@hyewon/design-system';
import ListUI from '@/components/list-ui/list-ui';
import { aboutMyProfile } from '@/commons/apis/intro';
import LiquidSection from '@/components/liquid-section/liquid-section';
import { useScrollContext } from '@/commons/context/scroll-context';

const Intro = () => {
	const { currNavId } = useScrollContext();

	return (
		<header className='w-[60%] h-screen py-25 pl-10 flex justify-center'>
			<div className='relative flex flex-col gap-6'>
				<LiquidSection
					calssName='p-8'
					type='prograssCard'
					imgSrc={aboutMyProfile.profile}
					imgAlt='profile img'
					currNavIdx={currNavId}>
					<div>
						<Typography as='h1' variants='display-l' color='text-white'>
							{aboutMyProfile.name}
						</Typography>
						<Typography as='h2' variants='body-l-strong' color='text-white'>
							{aboutMyProfile.position}
						</Typography>
					</div>
				</LiquidSection>
				<div className='relative flex gap-4'>
					<LiquidSection calssName='p-8'>
						<ListUI
							direction='virtical'
							listMap={aboutMyProfile.summaryTxt}
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
