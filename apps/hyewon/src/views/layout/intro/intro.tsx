/** @format */

import { Tags, Typography } from '@hyewon/design-system';
import ListUI from '@/components/list-ui/list-ui';
import { aboutMyProfile } from '@/commons/apis/intro';
import LiquidSection from '@/components/liquid-section/liquid-section';
import { useScrollContext } from '@/commons/context/scroll-context';

const Intro = () => {
	const { currNavId } = useScrollContext();

	return (
		<header className='w-[60%] h-screen py-25'>
			<div className='relative flex flex-col gap-6'>
				<LiquidSection
					calssName='shrink-0 p-8'
					type='prograssCard'
					imgSrc={aboutMyProfile.profile}
					imgAlt='profile img'
					currNavIdx={currNavId}>
					<div>
						<Typography as='h1' variants='display-l' color='text-white'>
							{aboutMyProfile.name}
						</Typography>
						<Typography as='h2' variants='body-l-strong' color='text-white'>
							{aboutMyProfile.position}
						</Typography>
					</div>
				</LiquidSection>
				<div className='relative flex gap-4'>
					<LiquidSection calssName='flex flex-wrap h-full max-w-[250px]'>
						{/* <ListUI direction='virtical' listMap={aboutMyProfile.skillTag} color='text-core-neutral-300' /> */}
						<ul className='flex flex-wrap gap-3 justify-center'>
							{aboutMyProfile.skillTag.map((i, idx) => (
								<li key={idx}>
									<Tags tagTxt={i} type='normal' size='large' variants='outline' />
								</li>
							))}
						</ul>
					</LiquidSection>
					<div className='flex flex-col gap-5'>
						<LiquidSection calssName='h-fit max-w-[150px]'>
							<ListUI direction='horizontal' listMap={aboutMyProfile.contact} color='text-white' />
						</LiquidSection>
						<LiquidSection calssName='h-fit max-w-[150px]'>
							<div>지쳤나요</div>
						</LiquidSection>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Intro;
