/** @format */

import { Button, Icons, Typography } from '@hyewon/design-system';
import { aboutMyProfile } from '@/commons/apis/sections/intro';

const IntroSection = () => {
	const onClickDownloadResume = () => {
		const link = document.createElement('a');
		link.href = '/hyewon-jeong-fe-resume.pdf';
		link.download = '정혜원_프론트엔드_이력서.pdf';
		link.click();
	};

	return (
		<div className='mt-10 w-full h-full flex flex-col max-sm:gap-5 justify-center max-sm:items-center max-sm:mt-0 max-sm:mb-10 overflow-hidden'>
			<Typography as='p' variants='body-m' color='text-core-green-300 pb-4 pt-5 font-semibold'>
				안녕하세요, 저는 ...
			</Typography>
			<Typography
				as='h3'
				variants='display-extra'
				className='font-extrabold text-core-neutral-200/70 leading-tight mb-0 max-sm:text-display-s'>
				{aboutMyProfile.position}
			</Typography>
			<Typography
				as='h2'
				variants='display-extra'
				className='font-extrabold text-core-neutral-100 leading-tight mt-0.5 max-sm:text-display-m'>
				{aboutMyProfile.name} 입니다.
			</Typography>
			<div className='pt-10'>
				<Typography
					as='p'
					variants='body-l'
					className='text-core-neutral-200/70 whitespace-pre-line max-sm:text-body-m'>
					{aboutMyProfile.summaryList[0].prefix}
					<span className='text-core-green-300'>{aboutMyProfile.summaryList[0].highlight}</span>
				</Typography>
				<Typography
					as='p'
					variants='body-l'
					className='text-core-neutral-200/70 whitespace-pre-line max-sm:text-body-m'>
					{aboutMyProfile.summaryList[1].prefix}
				</Typography>
			</div>

			<Button
				variants='outline'
				size='large'
				status='active'
				className='w-fit border-core-green-300 text-core-green-300 mt-15'
				onClick={onClickDownloadResume}>
				<Typography variants='body-m'>
					<span className='flex gap-2 items-center'>
						이력서 다운로드
						<Icons iconName='FileDownIcon' size='15px' />
					</span>
				</Typography>
			</Button>
		</div>
	);
};
export default IntroSection;
