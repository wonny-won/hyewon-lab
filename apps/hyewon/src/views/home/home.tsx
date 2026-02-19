/** @format */
import { Typography } from '@hyewon/design-system';
import { useScrollContext } from '@/commons/context/scroll-context';
import IntroSection from './sections/intro/intro-section';
import RecordSection from './sections/record/record-section';
import ProjectDetailCardSection from './sections/project-detail-card-section/project-detail-card';
import ContactMe from './sections/contact/contact-me';

const Home = () => {
	const { aboutSectionRef, recordSectionRef, projectDetailSectionRef, contactRef } = useScrollContext();
	const sectionInfo = [
		{
			id: 'intro',
			sectionClassName: 'h-screen',
			sectionRef: aboutSectionRef,
			typoClassName: 'hidden',
			title: '자기 소개',
			subTitle: null,
			component: <IntroSection />,
		},
		{
			id: 'record',
			sectionClassName: 'w-full py-25 max-sm:pb-15 max-sm:pt-25 flex flex-col gap-5 mx-auto',
			sectionRef: recordSectionRef,
			typoClassName: 'text-core-neutral-100/90',
			title: '쌓아온 경험',
			subTitle: '01.',
			component: <RecordSection />,
		},
		{
			id: 'projectDetail',
			sectionClassName: 'w-full py-25 max-sm:pt-15 max-sm:pb-25 flex flex-col gap-5 mx-auto',
			sectionRef: projectDetailSectionRef,
			typoClassName: 'text-core-neutral-100/90',
			title: '프로젝트 상세',
			subTitle: '02.',
			component: <ProjectDetailCardSection />,
		},
		{
			id: 'contactMe',
			sectionClassName: 'flex flex-col items-center py-30 mb-35',
			sectionRef: contactRef,
			typoClassName: 'text-core-green-300 pb-6',
			title: '03. 함께 다음 단계로 가볼까요?',
			subTitle: null,
			component: <ContactMe />,
		},
	];

	return (
		<div className='w-full flex flex-col lg:mr-4'>
			{sectionInfo?.map((item) => (
				<section key={item.id} className={item.sectionClassName} ref={item.sectionRef}>
					<Typography
						as='h1'
						variants={item.id === 'contactMe' ? 'body-m-strong' : 'heading-l'}
						className={item.typoClassName}>
						{item.subTitle && <span className='text-body-l text-core-green-300'>{item.subTitle}</span>}
						{item.title}
					</Typography>
					{item.component}
				</section>
			))}
		</div>
	);
};

export default Home;
