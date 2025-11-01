/** @format */

import Image from 'next/image';
import PrograssUI from './prograss/prograss-ui';
import { Tags, Typography } from '@hyewon/design-system';
import { aboutMyProfile } from '@/commons/apis/intro';

interface MainInroSectionProps {
	type?: 'imgCard' | 'txtCard' | 'prograssCard';
	currNavIdx?: string;
}
const MainInroSection = ({ currNavIdx = '' }: MainInroSectionProps) => {
	return (
		<section className='flex flex-col gap-6'>
			<figure className='flex gap-6 items-center'>
				<Image
					src={aboutMyProfile.profile}
					alt={'profile img'}
					width={80}
					height={80}
					style={{ borderRadius: '10px' }}
				/>
				<div>
					<Typography as='h1' variants='display-l' color='text-white'>
						{aboutMyProfile.name}
					</Typography>
					<Typography as='h2' variants='body-l-strong' color='text-white'>
						{aboutMyProfile.position}
					</Typography>
				</div>
			</figure>
			<div className='overflow-hidden max-w-[450px]'>
				<div
					className='flex py-2.5 animate-[flow_75000ms_linear_infinite]'
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

			<PrograssUI currNavIdx={currNavIdx} />
		</section>
	);
};
export default MainInroSection;
