/** @format */

import Navigation from '@/views/layout/nav/navigation';
import AboutMeSection from './internal-ui/about-me-section';

const IntroSection = () => {
	return (
		<section className='mt-10 w-full h-full flex flex-col justify-center items-center overflow-hidden'>
			<AboutMeSection />
			<Navigation />
		</section>
	);
};
export default IntroSection;
