/** @format */
import ListUI from '@/components/list-ui/list-ui';
import { SectionCard, ThinDiver, Typography } from '@hyewon/design-system';
import { aboutMe } from '@/commons/apis/about';
import { record } from '@/commons/apis/record';
import { useScrollContext } from '@/commons/context/scroll-context';
// import { sideProjects } from '@/commons/apis/sideProject';

const Home = () => {
	const { aboutSectionRef, recordSectionRef, sideProjectSectionRef } = useScrollContext();
	return (
		<div className='flex flex-col mr-4'>
			<section ref={aboutSectionRef}>
				<SectionCard type='about'>
					<h2 className='hidden'>자기소개</h2>
					<ListUI direction='virtical' listMap={aboutMe} />
				</SectionCard>
			</section>
			<section className='pt-10 flex flex-col gap-6' ref={recordSectionRef}>
				<h2 className='hidden'>경력, 이력 소개</h2>
				{record.map((i, idx) => {
					return (
						<SectionCard
							as='article'
							key={idx}
							type='record'
							styleType='liquid'
							title={i.company}
							subtitle={i.period}
							subSectionImgSrc={i.siteGif}
							isNeedMoreBtn
							titleColor='text-white'
							isNeedSummary
							summaryChildren={
								<>
									<div className='pb-2'>
										<Typography as='h3' variants='body-m-strong' color='text-core-gray-400/60'>
											{i.position}
										</Typography>
										<Typography variants='body-m-strong' color='text-core-gray-400/60'>
											{i.coreProject}
										</Typography>
									</div>
									<p className='text-body-s text-core-gray-200 whitespace-pre-line'>{i.summary}</p>
								</>
							}>
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
