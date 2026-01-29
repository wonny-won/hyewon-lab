/** @format */

import { Tags, Typography } from '@hyewon/design-system';

const SummaryChildren = (data: any) => {
	return (
		<>
			<ul className='flex flex-wrap gap-3 pb-3'>
				{data.data.mainStack?.map((item, idx) => (
					<li key={idx}>
						<Tags tagTxt={item} type='normal' size='default' variants='liquidChips' />
					</li>
				))}
			</ul>
			<div className='pb-3'>
				<Typography variants='label-m' color='text-core-gray-400/60'>
					{data.data.company}
				</Typography>
				<Typography as='p' variants='label-m' color='text-core-gray-400/60'>
					{data.data.position}
				</Typography>
			</div>
			<Typography as='p' variants='body-m' color='text-core-neutral-100' className='pb-8'>
				{data.data.summary}
			</Typography>
		</>
	);
};

export default SummaryChildren;
