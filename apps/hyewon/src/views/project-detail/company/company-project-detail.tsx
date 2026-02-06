/** @format */

import { projectDetailData } from '@/commons/apis/projects-detail/projects.detail';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import ListUI from '@/components/list-ui/list-ui';
import { Icons, Tags, Typography } from '@hyewon/design-system';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

const CompanyProjectDatail = () => {
	const router = useRouter();
	const param = useParams();
	const data = projectDetailData.filter((i) => i.id === param?.id)?.[0] || [];

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
				<div className='px-6 max-[450px]:px-0'>
					<button className='max-w-fit' onClick={() => onClickOpenNewWindow(data?.companyUrl)}>
						<Typography
							as='h1'
							variants='display-l'
							className='pb-5 flex gap-0.5 hover:text-core-green-300 hover:cursor-pointer group'>
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

			<div className='max-[450px]:px-0 px-8 pt-20'>
				<div className='flex max-lg:flex-col gap-25 min-[1450px]:gap-30'>
					<section className='flex flex-col gap-8 mx-auto'>
						{data?.siteGif?.map((i) => (
							<figure key={i.id} className='flex flex-col items-center max-lg:items-start'>
								<Image
									alt={i.alt}
									src={i.url}
									width={i.size}
									height={i.size}
									objectFit='contain'
									className='max-[450px]:max-w-[180px] max-[450px]:max-h-[300px] max-lg:min-w-[400px] min-[1450px]:min-w-[420px] rounded-[8px]'
								/>
								<figcaption className='pt-1'>
									<Typography variants='label-s' color='text-core-gray-600'>
										{i.alt}
									</Typography>
								</figcaption>
							</figure>
						))}
					</section>
					<section>
						<Typography as='h2' variants='heading-m' color='text-white' className='pb-3'>
							<span className='text-core-green-300 text-label-xl'>01. </span> 기여 및 역할
						</Typography>
						<ListUI direction='virtical' listMap={data.contribute} />
					</section>
				</div>
				<section className='w-screen bg-slate-800/35 mt-20 relative left-1/2 -translate-x-1/2'>
					<div className='px-6 lg:px-30 max-[450px]:px-0 py-25'>
						<Typography as='h2' variants='heading-m' color='text-white'>
							<span className='text-core-green-300 text-label-xl'>02. </span> 공통 Develop Point
						</Typography>
						{/* <ListUI direction='virtical' listMap={data.troubleshooting} /> */}
					</div>
				</section>
				<section className='w-screen bg-slate-700/35 relative left-1/2 -translate-x-1/2'>
					<div className='px-6 lg:px-30 max-[450px]:px-0 py-25'>
						<Typography as='h2' variants='heading-m' color='text-white'>
							<span className='text-core-green-300 text-label-xl'>03. </span> 문제 해결 사례
						</Typography>
						<ListUI direction='virtical' listMap={data.troubleshooting} />
					</div>
				</section>
			</div>
		</article>
	);
};

export default CompanyProjectDatail;
