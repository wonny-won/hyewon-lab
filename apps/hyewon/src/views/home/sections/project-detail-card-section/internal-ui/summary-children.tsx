/** @format */

import { TroubleShootingDataType } from '@/commons/apis/sections/trouble-shooting';
import { Tags, Typography } from '@hyewon/design-system';

interface SummaryProps {
	data: TroubleShootingDataType;
}

const SummaryChildren = ({ data }: SummaryProps) => {
	return (
		<>
			<Typography as='p' variants='label-m' color='text-core-neutral-200' className='pb-8 h-[130px]'>
				{data.summary}
			</Typography>
			<ul className='flex flex-wrap gap-2 pb-5 h-[90px]'>
				{data.relativeTag?.map((item, idx) => (
					<li key={idx}>
						<Tags tagTxt={item} type='normal' size='large' variants='liquidChips' />
					</li>
				))}
			</ul>
		</>
	);
};
export default SummaryChildren;
