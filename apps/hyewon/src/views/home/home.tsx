/** @format */
import ListUI from '@/components/list-ui/list-ui';
import { SectionCard } from '@hyewon/design-system';
import { aboutMe } from '@/commons/apis/about';
import { record } from '@/commons/apis/record';
import { useScrollContext } from '@/commons/context/scroll-context';

const Home = () => {
	const { aboutSectionRef, recordSectionRef } = useScrollContext();
	return (
		<div className='flex flex-col' ref={aboutSectionRef}>
			<SectionCard type='about'>
				<ListUI direction='virtical' listMap={aboutMe} isNeedIcon={false} />
			</SectionCard>
			<div className='pt-25' ref={recordSectionRef}>
				{record.map((i, idx) => {
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
								<ListUI direction='virtical' listMap={i.main} isNeedIcon color='text-white' />
							</SectionCard>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
