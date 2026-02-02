/** @format */

import { Button, Typography } from '@hyewon/design-system';
import Navigation from '@/views/layout/nav/navigation';

const IntroSection = () => {
	return (
		<div className='w-full h-full flex flex-col gap-25 min-[1450px]:gap-30 lg:justify-center overflow-hidden'>
			<div>
				<h2>
					<Typography as='p' variants='body-m' color='text-core-green-300 pb-3 font-semibold'>
						안녕하세요, 저는 ...
					</Typography>
					<Typography
						as='p'
						variants='display-extra'
						className='text-[48px] font-extrabold text-core-neutral-200/70'>
						웹 프론트엔드 개발자
					</Typography>
					<Typography
						as='p'
						variants='display-extra'
						className='text-[48px] font-extrabold text-core-neutral-100'>
						정혜원 입니다.
					</Typography>
				</h2>
				<div className='pt-4'>
					<Typography as='p' variants='body-l' className='text-core-neutral-200/70'>
						구조적 문제를 정리하고 사용자 경험을 개선하며 <br />
						성능 ・ 유지보수성을 함께 고려해{' '}
						<span className='text-core-green-300'>제품의 품질을 향상시킵니다.</span>
					</Typography>
					<Typography as='p' variants='body-l' className='text-core-neutral-200/70'>
						제품의 품질을 함께 고민하고, 과정속에서 발생하는 문제를 책임감 있게 해결하며 <br />
						동료와 함께 성장할 수 있는 팀과 회사를 찾고 있습니다.
					</Typography>
				</div>
			</div>

			<Button
				variants='outline'
				size='large'
				status='active'
				className='w-fit border-core-green-300 text-core-green-300'
				onClick={() => {
					const link = document.createElement('a');
					link.href = '/hyewon-jeong-fe-resume.pdf';
					link.download = '정혜원_프론트엔드_이력서.pdf';
					link.click();
				}}>
				이력서 다운로드
			</Button>
			<Navigation />
		</div>
	);
};
export default IntroSection;
