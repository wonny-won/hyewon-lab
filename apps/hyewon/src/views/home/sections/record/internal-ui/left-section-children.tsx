/** @format */

import { Tags, ThinDiver, Typography } from '@hyewon/design-system';
import ImgComp from './image';

const LeftSectionChildren = (data: any) => {
	return (
		<>
			<ul className='flex flex-wrap gap-1.5 pb-3'>
				{data.data.mainStack?.map((item, idx) => (
					<li key={idx}>
						<Tags tagTxt={item} type='normal' size='default' variants='liquidChips' />
					</li>
				))}
			</ul>
			<div className='py-2'>
				<Typography as='p' variants='label-l' color='text-core-gray-300/80'>
					{data.data.position}
				</Typography>
				<Typography variants='label-l' color='text-core-gray-300/80'>
					{data.data.coreProject}
				</Typography>
				<Typography variants='body-s-strong' color='text-core-gray-400 pt-4'>
					{data.data.period}
				</Typography>
			</div>
			<ImgComp data={data.data.thumbnail[0]} />
			<div className='max-lg:py-8 lg:hidden'>
				<ThinDiver />
			</div>
		</>
	);
};

export default LeftSectionChildren;
