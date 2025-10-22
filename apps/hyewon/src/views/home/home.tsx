/** @format */
import ListUI from '@/components/list-ui/list-ui';
import { SectionCard } from '@hyewon/design-system';
import { aboutMe } from '@/commons/apis/about';
import { record } from '@/commons/apis/record';

const Home = () => {
	return (
		<div className='flex flex-col gap-20'>
			<SectionCard type='about'>
				<ListUI direction='virtical' listMap={aboutMe} isNeedIcon={false} />
			</SectionCard>
			{record.map((i, idx) => {
				return (
					<div key={idx}>
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
	);
};

export default Home;
