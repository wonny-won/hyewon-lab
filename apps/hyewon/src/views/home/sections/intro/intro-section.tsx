/** @format */

import { Tags, Typography } from '@hyewon/design-system';
import ContactMeCard from './internal-ui/contact-me-card';
import SectionNavigation from './internal-ui/section-navigation/section-navigation';
import { useScrollContext } from '@/commons/context/scroll-context';
import { aboutMyProfile } from '@/commons/apis/sections/intro';

const IntroSection = () => {
	const { handleNavClick } = useScrollContext();
	return (
		<section className='flex flex-col w-full lg:items-center min-[1328px]:h-screen '>
			<div className='w-full h-full flex flex-col gap-18 lg:max-w-[1450px] lg:justify-center overflow-hidden'>
				<div className='flex flex-col gap-10 max-lg:items-center lg:flex-row lg:flex-wrap lg:items-center lg:gap-8 lg:justify-around'>
					<div className='flex flex-col gap-1 w-full max-w-[510px]'>
						<Typography as='h1' variants='display-s' color='text-white'>
							<p className='hidden lg:block lg:text-[48px] lg:font-extrabold lg:text-white'>
								{aboutMyProfile.name} <br />
								{aboutMyProfile.position}
							</p>
							<p className='block lg:hidden'>
								{aboutMyProfile.name} <br />
								{aboutMyProfile.position}
							</p>
						</Typography>
						<Typography as='h3' variants='body-s' color='text-core-neutarl-300' className='py-3'>
							<p className='hidden lg:block lg:text-[20px] lg:font-regular lg:text-white'>
								{aboutMyProfile.summary}
							</p>
							<p className='block lg:hidden'>{aboutMyProfile.summary}</p>
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
					<ContactMeCard />
				</div>
				<SectionNavigation onClick={handleNavClick} />
			</div>
		</section>
	);
};
export default IntroSection;
