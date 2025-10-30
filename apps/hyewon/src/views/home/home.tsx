/** @format */
import ListUI from '@/components/list-ui/list-ui';
import { SectionCard, ThinDiver } from '@hyewon/design-system';
import { aboutMe } from '@/commons/apis/about';
import { record } from '@/commons/apis/record';
import { useScrollContext } from '@/commons/context/scroll-context';
// import { sideProjects } from '@/commons/apis/sideProject';

const Home = () => {
	const { aboutSectionRef, recordSectionRef, sideProjectSectionRef } = useScrollContext();
	return (
		<div className='flex flex-col mr-4'>
			<div ref={aboutSectionRef}>
				<SectionCard type='about'>
					<ListUI direction='virtical' listMap={aboutMe} />
				</SectionCard>
			</div>
			<div className='pt-10' ref={recordSectionRef}>
				{record.map((i, idx) => {
					return (
						<div key={idx} className='mt-6'>
							<SectionCard
								key={idx}
								type='record'
								styleType='liquid'
								title={i.company}
								subtitle={i.period}
								subSectionImgSrc={i.siteGif}
								isNeedMoreBtn
								titleColor='text-white'
								isNeedSummary>
								<p className='text-body-s font-semibold text-core-neutral-300 whitespace-pre-line'>
									{i.summary}
								</p>
								<ThinDiver />
								<ListUI direction='virtical' listMap={i.main} />
							</SectionCard>
						</div>
					);
				})}
			</div>
			<div className='pt-25' ref={sideProjectSectionRef}>
				{/* {sideProjects.map((i, idx) => {
					const isLast = idx === record.length - 1;
					return (
						<div key={idx} className={isLast ? 'border-b-[1px] border-solid border-core-neutral-700' : ''}>
							<SectionCard
								type='record'
								styleType='line'
								title={i.company}
								subtitle={i.period}
								isNeedMoreBtn
								titleColor='text-white'>
								<ListUI direction='virtical' listMap={i.main} color='text-white' />
							</SectionCard>
						</div>
					);
				})} */}
			</div>
		</div>
	);
};

export default Home;
