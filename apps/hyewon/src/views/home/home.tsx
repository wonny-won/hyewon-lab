/** @format */
import ListUI from '@/components/list-ui/list-ui';
import { SectionCard } from '@hyewon/design-system';
import { aboutMyProfile } from './const';

const Home = () => {
	return (
		<div className='flex flex-col gap-4'>
			<SectionCard type='about' title='타이틀'>
				<ListUI direction='virtical' listMap={aboutMyProfile.record} />
			</SectionCard>
			<SectionCard type='record' title='타이틀' subtitle='2024 - 2025'>
				<ListUI direction='virtical' listMap={aboutMyProfile.record} isNeedIcon />
			</SectionCard>
			<SectionCard type='record' title='타이틀' subtitle='2024 - 2025'>
				<ListUI direction='virtical' listMap={aboutMyProfile.record} isNeedIcon />
			</SectionCard>
			<SectionCard type='record' title='타이틀' subtitle='2024 - 2025'>
				<ListUI direction='virtical' listMap={aboutMyProfile.record} isNeedIcon />
			</SectionCard>
			<SectionCard type='record' title='타이틀' subtitle='2024 - 2025'>
				<ListUI direction='virtical' listMap={aboutMyProfile.record} isNeedIcon />
			</SectionCard>
		</div>
	);
};

export default Home;
