/** @format */
import ListUI from '@/components/list-ui/list-ui';
import { SectionCard, ThinDiver } from '@hyewon/design-system';
import { aboutMe } from '@/commons/apis/sections/about';
import { record } from '@/commons/apis/sections/record';
import { useScrollContext } from '@/commons/context/scroll-context';
import SummaryChildren from './internal-ui/summary-children';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import Intro from './internal-ui/intro/intro';

const Home = () => {
	const { aboutSectionRef, recordSectionRef, sideProjectSectionRef } = useScrollContext();
	return (
		<div className='flex flex-col mr-4'>
			<section ref={aboutSectionRef}>
				<h2 className='hidden'>자기 소개</h2>
				<Intro />
			</section>
			<section className='pt-15 flex flex-col gap-6' ref={recordSectionRef}>
				<h2 className='hidden'>경력, 이력 소개</h2>
				{record.map((i, idx) => {
					return (
						<SectionCard
							as='article'
							key={idx}
							type='record'
							styleType='liquid'
							title={i.company}
							isNeedTitleIcon
							titleIconName='ArrowUpRight'
							onClickTitle={() => onClickOpenNewWindow(i.companyUrl)}
							subtitle={i.period}
							subSectionImgSrc={i.siteGif}
							isNeedMoreBtn
							titleColor='text-white'
							isNeedSummary
							summaryChildren={<SummaryChildren data={i} />}>
							<ThinDiver />
							<ListUI direction='virtical' listMap={i.main} />
						</SectionCard>
					);
				})}
			</section>
			<section className='pt-25' ref={sideProjectSectionRef}>
				<h2 className='hidden'>기록의 조각</h2>
			</section>
		</div>
	);
};

export default Home;
