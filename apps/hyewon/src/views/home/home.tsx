/** @format */
import { Typography } from '@hyewon/design-system';
import { useScrollContext } from '@/commons/context/scroll-context';
import IntroSection from './internal-ui/intro/intro-section';
import RecordSection from './internal-ui/record/record-section';

const Home = () => {
	const { aboutSectionRef, recordSectionRef, sideProjectSectionRef } = useScrollContext();
	return (
		<div className='flex flex-col mr-4'>
			<section ref={aboutSectionRef}>
				<h1 className='hidden'>자기 소개</h1>
				<IntroSection />
			</section>
			<section className='py-25 flex flex-col gap-10' ref={recordSectionRef}>
				<Typography as='h1' variants='heading-m' color='text-core-gray-400'>
					<span className='text-core-neutral-50'>쌓아온 경험.</span> 함께 나눌 따끈따끈 경험 이야기.
				</Typography>
				<RecordSection />
			</section>
			<section className='py-25 flex flex-col gap-6' ref={sideProjectSectionRef}>
				<Typography as='h1' variants='heading-m' color='text-core-gray-400'>
					<span className='text-core-neutral-50'>쌓아온 경험.</span> 함께 나눌 따끈따끈 경험 이야기.
				</Typography>
			</section>
		</div>
	);
};

export default Home;
