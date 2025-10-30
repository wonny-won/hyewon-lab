/** @format */

import Image from 'next/image';
import PrograssUI from './prograss/prograss-ui';
import { Typography } from '@hyewon/design-system';
import { aboutMyProfile } from '@/commons/apis/intro';

interface MainInroSectionProps {
	type?: 'imgCard' | 'txtCard' | 'prograssCard';
	currNavIdx?: string;
}
const MainInroSection = ({ currNavIdx = '' }: MainInroSectionProps) => {
	return (
		<>
			<div className='flex gap-6 items-center'>
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
			</div>
			<PrograssUI currNavIdx={currNavIdx} />
		</>
	);
};
export default MainInroSection;
