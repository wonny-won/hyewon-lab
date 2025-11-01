/** @format */

import { Tags, Typography } from '@hyewon/design-system';

const SummaryChildren = (data: any) => {
	return (
		<>
			<ul className='flex flex-wrap gap-3 pb-2'>
				{data.data.mainStack?.map((item, idx) => (
					<li key={idx}>
						<Tags tagTxt={item} type='normal' size='large' variants='liquidChips' />
					</li>
				))}
			</ul>
			<div className='pb-3'>
				<Typography as='h3' variants='body-m-strong' color='text-core-gray-400/60'>
					{data.data.position}
				</Typography>
				<Typography variants='body-m-strong' color='text-core-gray-400/60'>
					{data.data.coreProject}
				</Typography>
			</div>
			<Typography as='p' variants='body-s' color='text-core-gray-200'>
				{data.data.summary}
			</Typography>
		</>
	);
};

export default SummaryChildren;
