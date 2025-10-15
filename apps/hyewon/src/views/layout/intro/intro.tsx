/** @format */

import { Typography, Icons } from '@hyewon/design-system';
import { aboutMyProfile } from './intro-const';
import Image from 'next/image';

const Intro = () => {
	return (
		<div className="w-[460px] h-screen fixed py-26 px-30 flex flex-col gap-6 bg-[url('/side-panel-bg.png')]">
			<Image src={aboutMyProfile.profile} alt='profile img' width={200} height={250} />
			<Typography as='h1' variants='display-l'>
				{aboutMyProfile.name}
			</Typography>
			<Typography as='h2' variants='heading-m'>
				{aboutMyProfile.position}
			</Typography>
			<ul>
				<li>
					{aboutMyProfile.summaryTxt.map((i, idx) => (
						<Typography as='p' variants='body-m' key={idx} className='flex gap-1 items-center py-2'>
							<Icons iconName='DancheongFlower' size='20px' />
							{i}
						</Typography>
					))}
				</li>
			</ul>
		</div>
	);
};
export default Intro;
