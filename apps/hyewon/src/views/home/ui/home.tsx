/** @format */
import { Typography } from '@hyewon/design-system';
import HomeDataContextProvider, { useHomeDataContext } from '../feature/home.context';
import IntroSection from '../sections/intro/ui/intro-section';
import RecordSection from '../sections/record/ui/record-section';
import ProjectDetailCardSection from '../sections/project-detail-card-section/ui/project-detail-card';
import ContactMe from '../sections/contact/ui/contact-me';

const HomeContent = () => {
	const { sectionInfo } = useHomeDataContext();
	const sectionComp = {
		intro: <IntroSection />,
		record: <RecordSection />,
		projectDetail: <ProjectDetailCardSection />,
		contactMe: <ContactMe />,
	};

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
					{sectionComp[item.id]}
				</section>
			))}
		</div>
	);
};

const Home = () => {
	return (
		<HomeDataContextProvider>
			<HomeContent />
		</HomeDataContextProvider>
	);
};

export default Home;
