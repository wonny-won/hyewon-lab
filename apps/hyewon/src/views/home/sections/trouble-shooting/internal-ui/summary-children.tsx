/** @format */

import { TroubleShootingDataType } from '@/commons/apis/sections/trouble-shooting';
import { Tags, Typography } from '@hyewon/design-system';

interface SummaryProps {
	data: TroubleShootingDataType;
}

const SummaryChildren = ({ data }: SummaryProps) => {
	return (
		<>
			<ul className='flex flex-wrap gap-2 pb-5'>
				{data.relativeTag?.map((item, idx) => (
					<li key={idx}>
						<Tags tagTxt={item} type='normal' size='large' variants='liquidChips' />
					</li>
				))}
			</ul>
			<div className='pb-5'>
				<Typography as='h3' variants='body-m-strong' color='text-core-gray-400/60'>
					{data.company}
				</Typography>
				<Typography variants='body-m-strong' color='text-core-gray-400/60'>
					{data.project}
				</Typography>
			</div>
			<Typography as='p' variants='body-m-strong' color='text-core-neutral-200'>
				{data.summary}
			</Typography>
		</>
	);
};
export default SummaryChildren;
