/** @format */
import { Typography } from '@hyewon/design-system';
import { useScrollContext } from '@/commons/context/scroll-context';
import IntroSection from './sections/intro/intro-section';
import RecordSection from './sections/record/record-section';
import ProjectDetailCardSection from './sections/project-detail-card-section/project-detail-card';
import ContactMe from './sections/contact/contact-me';

const Home = () => {
	const { aboutSectionRef, recordSectionRef, projectDetailSectionRef, contactRef } = useScrollContext();
	return (
		<div className='w-full flex flex-col lg:mr-4'>
			<section className='h-screen ' ref={aboutSectionRef}>
				<h1 className='hidden'>자기 소개</h1>
				<IntroSection />
			</section>
			<section className='w-full py-25 flex flex-col gap-5 mx-auto' ref={recordSectionRef}>
				<Typography as='h1' variants='heading-l' color='text-core-neutral-100/90'>
					<span className='text-body-l text-core-green-300'>01.</span> 쌓아온 경험
				</Typography>
				<RecordSection />
			</section>
			<section className='w-full py-25 flex flex-col gap-5 mx-auto' ref={projectDetailSectionRef}>
				<Typography as='h1' variants='heading-l' color='text-core-neutral-100/90'>
					<span className='text-body-l text-core-green-300'>02.</span> 프로젝트 상세
				</Typography>
				<ProjectDetailCardSection />
			</section>
			<section className='flex flex-col items-center py-30 mb-35' ref={contactRef}>
				<Typography as='h1' variants='body-m-strong' color='text-core-green-300' className='pb-6'>
					03. 함께 다음 단계로 가볼까요?
				</Typography>
				<ContactMe />
			</section>
		</div>
	);
};

export default Home;
