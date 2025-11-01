/** @format */

import { SectionCard, Tags } from '@hyewon/design-system';
import ListUI from '@/components/list-ui/list-ui';
import { aboutMyProfile } from '@/commons/apis/intro';
import { useScrollContext } from '@/commons/context/scroll-context';
import MainInroSection from './internal-ui/main-intro-section';

const Intro = () => {
	const { currNavId } = useScrollContext();

	return (
		<header className='w-[60%] py-16'>
			<div className='relative flex flex-col gap-6'>
				<SectionCard type='default' styleType='liquid' sectionCardClassName='p-8'>
					<MainInroSection currNavIdx={currNavId} />
				</SectionCard>
				<div className='relative flex gap-4'>
					<SectionCard
						type='default'
						styleType='liquid'
						sectionCardClassName='flex items-center flex-wrap h-fit max-w-[150px]'>
						<ListUI direction='horizontal' listMap={aboutMyProfile.contact} />
					</SectionCard>
				</div>
			</div>
		</header>
	);
};
export default Intro;
