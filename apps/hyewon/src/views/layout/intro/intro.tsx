/** @format */

import { SectionCard, Typography } from '@hyewon/design-system';
import { aboutMyProfile } from '@/commons/apis/intro';
import { useScrollContext } from '@/commons/context/scroll-context';
import MainInroSection from './internal-ui/main-intro-section';
import Navigation from '../nav/navigation';

const Intro = () => {
	const { currNavId, handleNavClick } = useScrollContext();

	return (
		<header className='w-full p-26'>
			<div className='relative flex gap-30 items-center justify-center'>
				<div className='flex flex-col gap-1'>
					<Typography as='h1' variants='display-l' color='text-white'>
						{aboutMyProfile.name} <br />
						{aboutMyProfile.position}
					</Typography>
					<Typography as='h3' variants='body-l' color='text-core-neutarl-300'>
						{aboutMyProfile.summary}
					</Typography>
				</div>
				<SectionCard type='default' styleType='liquid' sectionCardClassName='p-8 min-w-[400px] max-w-[550px]'>
					<MainInroSection currNavIdx={currNavId} />
				</SectionCard>
			</div>
			<Navigation onClick={handleNavClick} />
		</header>
	);
};
export default Intro;
