/** @format */
import { Typography } from '@hyewon/design-system';
import { useScrollContext } from '@/commons/context/scroll-context';
import IntroSection from './sections/intro/intro-section';
import RecordSection from './sections/record/record-section';
import TroubleShootingSection from './sections/trouble-shooting/trouble-shooting';

const Home = () => {
	const { aboutSectionRef, recordSectionRef, troubleshootingSectionRef } = useScrollContext();
	return (
		<div className='w-full flex flex-col lg:mr-4'>
			<section ref={aboutSectionRef}>
				<h1 className='hidden'>자기 소개</h1>
				<IntroSection />
			</section>
			<section className='max-lg:pt-20 pt-25 flex flex-col gap-10  mx-auto' ref={recordSectionRef}>
				<Typography as='h1' variants='heading-m' color='text-core-gray-400'>
					<span className='text-core-neutral-50'>
						쌓아온 경험. <br className='hidden max-[518px]:block' />
					</span>
					함께 나눌 따끈따끈 경험 이야기.
				</Typography>
				<RecordSection />
			</section>
			<section className='max-lg:pt-20 pt-25 flex flex-col gap-10 max-lg:mx-auto' ref={troubleshootingSectionRef}>
				<Typography as='h1' variants='heading-m' color='text-core-gray-400'>
					<span className='text-core-neutral-50'>
						영광의 순간. <br className='hidden max-[356px]:block' />
					</span>
					격파한 트러블들.
				</Typography>
				<TroubleShootingSection />
			</section>
		</div>
	);
};

export default Home;
