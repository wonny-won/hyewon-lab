/** @format */

import { Icons, SectionCard, Typography } from '@hyewon/design-system';
import MainInroSection from './internal-ui/main-intro-section';
import SectionNavigation from './internal-ui/section-navigation/section-navigation';
import { useScrollContext } from '@/commons/context/scroll-context';
import { aboutMyProfile } from '@/commons/apis/sections/intro';

const IntroSection = () => {
	const { handleNavClick } = useScrollContext();
	return (
		<section className='flex flex-col w-full h-screen py-10'>
			<div className='w-full h-full flex flex-col gap-25 justify-center'>
				<div className='flex gap-45 justify-center items-center'>
					<div className='flex flex-col gap-1 max-w-[730px]'>
						<Typography as='h1' variants='display-l' color='text-white'>
							{aboutMyProfile.name} <br />
							{aboutMyProfile.position}
						</Typography>
						<Typography as='h3' variants='body-l' color='text-core-neutarl-300'>
							{aboutMyProfile.summary}
						</Typography>
					</div>
					<SectionCard
						as='figure'
						type='default'
						styleType='liquid'
						sectionCardClassName='p-8 min-w-[400px] max-w-[550px]'>
						<MainInroSection />
					</SectionCard>
				</div>
				<SectionNavigation onClick={handleNavClick} />
			</div>
			<p className='w-full h-[32px] flex justify-center will-change-transform animate-[pop_500ms_ease-out_infinite] motion-reduce:animate-none'>
				<Icons iconName='DoubleArrowDownIcon' color='#5eead466' />
			</p>
		</section>
	);
};
export default IntroSection;
