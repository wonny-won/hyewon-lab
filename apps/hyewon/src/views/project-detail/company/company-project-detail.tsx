/** @format */

import { recordData } from '@/commons/apis/sections/record';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import ListUI from '@/components/list-ui/list-ui';
import { Icons, Tags, Typography } from '@hyewon/design-system';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

const CompanyProjectDatail = () => {
	const router = useRouter();
	const param = useParams();
	const data = recordData.filter((i) => i.id === param?.id)?.[0] || [];

	return (
		<article className='pt-15 pb-28 min-[1450px]:px-[150px]'>
			<header>
				<nav className='w-full flex items-center gap-4 pb-10'>
					<button
						onClick={() => {
							router.back();
						}}>
						<Icons iconName='ArrowLeft' size='60' color={'#5eead4'} />
					</button>
				</nav>
				<div className='px-6'>
					<button
						className='max-w-fit'
						onClick={() => onClickOpenNewWindow('https://ontune.co.kr/pd-product.php')}>
						<Typography
							as='h1'
							variants='display-l'
							className='pb-5 flex gap-0.5 hover:text-core-green-300 hover:cursor-pointer group'>
							{data?.company || '회사명'}
							<p className='pt-1.5 group-hover:pt-1 group-hover:pl-1'>
								<Icons iconName='ArrowUpRight' size='20' />
							</p>
						</Typography>
					</button>

					<div className='border-l-[2px] border-core-green-300 pl-4 ml-1'>
						<Typography as='p' variants='label-xl'>
							{data?.period}
							<br />
							{data?.coreProject || '진행 프로젝트'}
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

			<div className='px-8 pt-20 flex gap-20 min-[1450px]:gap-30'>
				<section className='bg-blend-hard-light'>
					{data?.siteGif?.map((i) => (
						<figure key={i.id} className='pb-4 flex flex-col items-center'>
							<Image
								alt={i.alt}
								src={i.url}
								width={i.size}
								height={i.size}
								className='min-[1450px]:min-w-[450px]  rounded-[8px]'
							/>
							<figcaption className='pt-1'>
								<Typography variants='label-s' color='text-core-gray-600'>
									{i.alt}
								</Typography>
							</figcaption>
						</figure>
					))}
				</section>
				<div>
					<section>
						<Typography as='h2' variants='heading-m'>
							기여 및 역할
						</Typography>
						<ListUI direction='virtical' listMap={data.contribute} />
					</section>
					<section className='pt-20'>
						<Typography as='h2' variants='heading-m'>
							문제 해결 사례
						</Typography>
						<ListUI direction='virtical' listMap={data.troubleshooting} />
					</section>
				</div>
			</div>
		</article>
	);
};

export default CompanyProjectDatail;
