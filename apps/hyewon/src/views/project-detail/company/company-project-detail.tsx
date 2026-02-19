/** @format */

import { projectDetailData } from '@/commons/apis/projects-detail/projects.detail';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import ListUI from '@/components/list-ui/list-ui';
import { Icons, Tags, Typography, SkeletonUI, Tooltip } from '@hyewon/design-system';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

const CompanyProjectDatail = () => {
	const router = useRouter();
	const param = useParams();
	const clipboardTxt = '클릭시 상세설명 토글이 열립니다.';
	const data = projectDetailData.filter((i) => i.id === param?.id)?.[0] || [];
	const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

	const handleImageLoad = useCallback((id: string) => {
		setLoadedImages((prev) => ({ ...prev, [id]: true }));
	}, []);

	return (
		<article className='pt-15 pb-28 min-[1450px]:px-[150px]'>
			<header>
				<nav className='w-full flex items-center gap-4 pb-10'>
					<button
						className='hover:cursor-pointer'
						onClick={() => {
							router.back();
						}}>
						<Icons iconName='ArrowLeft' size='60' color={'#5eead4'} />
					</button>
				</nav>
				<div className='px-6 max-sm:px-0'>
					<button className='max-w-fit' onClick={() => onClickOpenNewWindow(data?.companyUrl)}>
						<Typography
							as='h1'
							variants='display-l'
							className='pb-5 flex gap-0.5 hover:text-core-green-300 hover:cursor-pointer group max-sm:text-display-m'>
							{data?.company || '회사명'}
							<p className='pt-1.5 group-hover:pt-1 group-hover:pl-1'>
								<Icons iconName='ArrowUpRight' />
							</p>
						</Typography>
					</button>

					<div className='border-l-[2px] border-core-green-300 pl-4 ml-1'>
						<Typography as='p' variants='label-xl'>
							{data?.period}
							<br />
							<span className='pb-4'>
								{data?.position}
								<br />
								{data?.coreProject || '진행 프로젝트'}
							</span>
						</Typography>
						<ul className='flex gap-2 pt-3'>
							{data?.mainStack?.map((i, idx) => {
								return (
									<li key={i + idx}>
										<Tags size='large' variants='liquidChips' type='normal' tagTxt={i} />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</header>

			<div className='max-sm:px-0 px-8 pt-20 max-sm:pt-15'>
				<div className='flex overflow-auto max-lg:flex-col gap-25 min-[1450px]:gap-30'>
					<section className='flex overflow-auto gap-8 mx-auto'>
						{data?.siteGif?.map((i) => (
							<figure key={i.id} className='flex flex-col items-center max-lg:items-start'>
								<div className='relative min-w-[250px] max-sm:max-w-[280px] max-lg:max-w-[320px] min-[1450px]:max-w-[360px]'>
									{!loadedImages[i.id] && <SkeletonUI width={i.size} height={i.size} />}
									<Image
										alt={i.alt}
										src={i.url}
										width={i.size}
										height={i.size}
										objectFit='contain'
										className='relative z-10 rounded-[8px]'
										onLoad={() => handleImageLoad(i.id)}
									/>
								</div>
								<figcaption className='pt-1'>
									<Typography variants='label-s' color='text-core-gray-600'>
										{i.alt}
									</Typography>
								</figcaption>
							</figure>
						))}
					</section>
				</div>
				<section className='w-screen bg-slate-900/35 relative left-1/2 -translate-x-1/2'>
					<div className='px-6 lg:px-60 max-sm:px-5 py-25 max-sm:pb-18 max-sm:pt-25'>
						<Typography as='h2' variants='heading-l' color='text-white' className='pb-3'>
							<Tooltip content={clipboardTxt} position='right-top' bgColor='bg-core-green-300'>
								<Icons iconName='CircleCheckIcons' size='14' color='green' />
							</Tooltip>
							<span className='text-core-green-300 text-label-xl'>01. </span> 기여 및 역할
						</Typography>
						<ListUI direction='virtical' listMap={data.contribute} />
					</div>
				</section>
				<section className='w-screen bg-slate-800/40 relative left-1/2 -translate-x-1/2'>
					<div className='px-6 lg:px-60 max-sm:px-5 py-25 max-sm:py-15'>
						<Typography as='h2' variants='heading-l' color='text-white'>
							<span className='text-core-green-300 text-label-xl'>02. </span> Develop Point
						</Typography>
						<ListUI direction='virtical' listMap={data.commonDev} />
					</div>
				</section>
				{/* <section className='w-screen bg-slate-700/35 relative left-1/2 -translate-x-1/2'>
					<div className='px-6 lg:px-60 max-[450px]:px-0 py-25'>
						<Typography as='h2' variants='heading-l' color='text-white'>
							<span className='text-core-green-300 text-label-xl'>03. </span> 문제 해결 사례
						</Typography>
						<ListUI direction='virtical' listMap={data.troubleshooting} />
					</div>
				</section> */}
			</div>
		</article>
	);
};

export default CompanyProjectDatail;
