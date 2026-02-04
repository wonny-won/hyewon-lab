/** @format */

import { Tags, Typography } from '@hyewon/design-system';
import ImgComp from './image';

const LeftSectionChildren = (data: any) => {
	return (
		<>
			<ul className='flex flex-wrap gap-3 pb-3'>
				{data.data.mainStack?.map((item, idx) => (
					<li key={idx}>
						<Tags tagTxt={item} type='normal' size='default' variants='liquidChips' />
					</li>
				))}
			</ul>
			<div className='pt-2 pb-4'>
				<Typography as='p' variants='label-l' color='text-core-gray-400/60'>
					{data.data.position}
				</Typography>
				<Typography variants='label-l' color='text-core-gray-400/60'>
					{data.data.coreProject}
				</Typography>
			</div>
			<ImgComp data={data.data.thumbnail[0]} />
		</>
	);
};

export default LeftSectionChildren;
