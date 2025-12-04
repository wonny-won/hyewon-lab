/** @format */
'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { SectionCard, VirticalDiver } from '@hyewon/design-system';
import ListUI from '@/components/list-ui/list-ui';
import { aboutMyProfile } from '@/commons/apis/sections/intro';

const BREAKPOINT = 1024;
const PROJECT_IMAGES = ['/honored.gif', '/teamstone.gif', '/teamstone2.gif', '/dingco.gif'];

const ContactMeCard = () => {
	const [imageSrc, setImageSrc] = useState(aboutMyProfile.profile);
	const projectIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const projectIndexRef = useRef(0);

	const clearProjectRotation = () => {
		if (projectIntervalRef.current) {
			clearInterval(projectIntervalRef.current);
			projectIntervalRef.current = null;
		}
	};

	const startProjectRotation = () => {
		if (projectIntervalRef.current) return;

		projectIndexRef.current = 0;
		setImageSrc(PROJECT_IMAGES[projectIndexRef.current]);

		projectIntervalRef.current = setInterval(() => {
			projectIndexRef.current = (projectIndexRef.current + 1) % PROJECT_IMAGES.length;
			setImageSrc(PROJECT_IMAGES[projectIndexRef.current]);
		}, 17000);
	};

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const applyImageByWidth = () => {
			if (window.innerWidth >= BREAKPOINT) {
				clearProjectRotation();
				setImageSrc(aboutMyProfile.profile);
			} else {
				startProjectRotation();
			}
		};

		applyImageByWidth();
		window.addEventListener('resize', applyImageByWidth);

		return () => {
			window.removeEventListener('resize', applyImageByWidth);
			clearProjectRotation();
		};
	}, []);

	const rainbowTxt =
		'bg-gradient-to-r from-yellow-500 via-core-green-300 to-blue-500 bg-clip-text text-transparent font-semibold';

	return (
		<SectionCard
			type='default'
			styleType='liquid'
			sectionCardClassName='p-10 lg:p-8 w-full lg:min-w-[530px] max-w-[600px] max-lg:max-auto'>
			<Image
				src={imageSrc}
				alt={'profile img'}
				width={150}
				height={150}
				className='w-[200px] h-[170px] rounded-[8px] lg:w-[150px] lg:h-[150px] lg:rounded-[16px] max-lg:max-h-[300px]'
			/>

			<div className='flex max-lg:flex-col gap-2 lg:gap-10 lg:items-center'>
				<section>
					<h3 className={`pt-[40px] lg:pb-[16px] pb-[10px] text-[18px] font-extrabold ${rainbowTxt}`}>
						CONTACT ME NOW
					</h3>
					<ListUI direction='horizontal' listMap={aboutMyProfile.contact} />
				</section>
				<VirticalDiver height={100} display='max-lg:hidden' />
				<section>
					<h3 className={`pt-[40px] lg:pb-[16px] pb-[10px] text-[18px] font-extrabold ${rainbowTxt}`}>
						Download PDF Resume
					</h3>
					<ListUI direction='horizontal' listMap={aboutMyProfile.export} />
				</section>
			</div>
		</SectionCard>
	);
};
export default ContactMeCard;
