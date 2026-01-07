/** @format */

import ContactMeCard from './internal-ui/contact-me-card';
import SectionNavigation from './internal-ui/section-navigation/section-navigation';
import { useScrollContext } from '@/commons/context/scroll-context';

const IntroSection = () => {
	const { handleNavClick } = useScrollContext();
	return (
		<div className='w-full h-full flex flex-col gap-25 min-[1450px]:gap-30 lg:justify-center overflow-hidden'>
			<ContactMeCard />
			<SectionNavigation onClick={handleNavClick} />
		</div>
	);
};
export default IntroSection;
