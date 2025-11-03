/** @format */

import Image from 'next/image';
import PrograssUI from './prograss/prograss-ui';
import { SectionCard, Tags, Typography } from '@hyewon/design-system';
import { aboutMyProfile } from '@/commons/apis/intro';
import ListUI from '@/components/list-ui/list-ui';

interface MainInroSectionProps {
	type?: 'imgCard' | 'txtCard' | 'prograssCard';
	currNavIdx?: number;
}
const MainInroSection = ({ currNavIdx = 1 }: MainInroSectionProps) => {
	return (
		<section className='flex flex-col gap-6'>
			<figure className='flex gap-6 items-center'>
				<Image
					src={aboutMyProfile.profile}
					alt={'profile img'}
					width={150}
					height={150}
					style={{ borderRadius: '20px' }}
				/>
			</figure>
			<div className='overflow-hidden'>
				<div
					className='flex py-5 animate-[flow_75000ms_linear_infinite]'
					style={{ width: 'max-content', gap: 0 }}>
					<ul className='flex gap-3 shrink-0' style={{ width: 'max-content' }}>
						{aboutMyProfile.skillTag.map((i, idx) => (
							<li key={idx} className='shrink-0'>
								<Tags tagTxt={i} type='normal' size='large' variants='liquidChips' />
							</li>
						))}
					</ul>
				</div>
			</div>
			<SectionCard
				type='default'
				styleType='liquid'
				sectionCardClassName='flex items-center flex-wrap h-fit max-w-[300px] p-0 rounded-[52px]'>
				<ListUI direction='horizontal' listMap={aboutMyProfile.contact} />
			</SectionCard>

			{/* <PrograssUI currNavIdx={currNavIdx} /> */}
		</section>
	);
};
export default MainInroSection;
