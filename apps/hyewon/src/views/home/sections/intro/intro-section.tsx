/** @format */

import { Tags, Typography } from '@hyewon/design-system';
import MainInroSection from './internal-ui/main-intro-section';
import SectionNavigation from './internal-ui/section-navigation/section-navigation';
import { useScrollContext } from '@/commons/context/scroll-context';
import { aboutMyProfile } from '@/commons/apis/sections/intro';

const IntroSection = () => {
	const { handleNavClick } = useScrollContext();
	return (
		<section className='flex flex-col w-full h-screen pt-10 pb-5'>
			<div className='w-full h-full flex flex-col gap-18 justify-center'>
				<div className='flex gap-45 justify-around'>
					<div className='flex flex-col gap-1 max-w-[510px]'>
						<Typography as='h1' variants='display-l' color='text-white'>
							{aboutMyProfile.name} <br />
							{aboutMyProfile.position}
						</Typography>
						<Typography as='h3' variants='body-l' color='text-core-neutarl-300'>
							{aboutMyProfile.summary}
						</Typography>
						<div className='overflow-hidden'>
							<div
								className='flex py-5 animate-[flow_75000ms_linear_infinite]'
								style={{ width: 'max-content', gap: 0 }}>
								<ul className='flex gap-3 shrink-0' style={{ width: 'max-content' }}>
									{aboutMyProfile.skillTag.map((i, idx) => (
										<li key={idx} className='shrink-0'>
											<Tags tagTxt={i} type='normal' size='large' variants='liquidChips' />
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<MainInroSection />
				</div>
				<SectionNavigation onClick={handleNavClick} />
			</div>
		</section>
	);
};
export default IntroSection;
