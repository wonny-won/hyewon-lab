/** @format */
import { Typography } from '@hyewon/design-system';
import HomeDataContextProvider, { useHomeDataContext } from '../feature/home.data.provider';

const HomeContent = () => {
	const { sectionInfo } = useHomeDataContext();
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

const Home = () => {
	return (
		<HomeDataContextProvider>
			<HomeContent />
		</HomeDataContextProvider>
	);
};

export default Home;
