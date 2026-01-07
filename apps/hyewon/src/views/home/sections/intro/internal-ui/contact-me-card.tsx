/** @format */
'use client';

import Image from 'next/image';
import { SectionCard, Tags, Typography, VirticalDiver } from '@hyewon/design-system';
import ListUI from '@/components/list-ui/list-ui';
import { aboutMyProfile } from '@/commons/apis/sections/intro';

const ContactMeCard = () => {
	const rainbowTxt =
		'bg-gradient-to-r from-yellow-500 via-core-green-300 to-blue-500 bg-clip-text text-transparent font-semibold';
	return (
		<SectionCard
			type='default'
			styleType='liquid'
			sectionCardClassName='w-full h-full lg:p-8 max-md:min-w-[360px] max-lg:min-w-[500px] max-w-[700px]'>
			<figure className='flex gap-6'>
				<Image
					src={aboutMyProfile.profile}
					alt={'profile img'}
					width={150}
					height={150}
					className='max-lg:hidden rounded-[8px]'
				/>
				<figcaption className='flex flex-col gap-1 min-w-[380px] max-lg:min-w-[300px]'>
					<Typography as='h1' variants='display-s' color='text-white'>
						<p className='hidden lg:block lg:text-[38px] lg:font-extrabold lg:text-white'>
							{aboutMyProfile.name}
						</p>

						{/* <p className='hidden lg:block lg:text-[20px] lg:font-extrabold lg:text-white'>
							{aboutMyProfile.position}
						</p> */}
					</Typography>
					<Typography as='div' variants='body-s' color='text-core-neutarl-300' className='py-3'>
						<p className='hidden lg:block lg:text-[15px] lg:font-regular lg:text-white'>
							{aboutMyProfile.summary}
						</p>
						<p className='block lg:hidden'>{aboutMyProfile.summary}</p>
					</Typography>
					<div className='overflow-hidden'>
						<div
							className='flex animate-[flow_75000ms_linear_infinite]'
							style={{ width: 'max-content', gap: 0 }}>
							<ul className='flex gap-3 shrink-0' style={{ width: 'max-content' }}>
								{aboutMyProfile.skillTag.map((i, idx) => (
									<li key={idx} className='shrink-0'>
										<Tags tagTxt={i} type='normal' size='large' variants='liquidChips' />
									</li>
								))}
							</ul>
						</div>
					</div>
				</figcaption>
			</figure>

			<div className='flex max-lg:flex-col gap-2 lg:gap-12 lg:items-center pt-15'>
				<section>
					<h2 className={`lg:pb-[16px] pb-[10px] text-[18px] font-extrabold ${rainbowTxt}`}>
						CONTACT ME NOW
					</h2>
					<ListUI direction='horizontal' listMap={aboutMyProfile.contact} />
				</section>
				<VirticalDiver height={100} display='max-lg:hidden block' />
				<section>
					<h2 className={`lg:pb-[16px] pb-[10px] text-[18px] font-extrabold ${rainbowTxt}`}>
						Download PDF Resume
					</h2>
					<ListUI direction='horizontal' listMap={aboutMyProfile.export} />
				</section>
			</div>
		</SectionCard>
	);
};
export default ContactMeCard;
