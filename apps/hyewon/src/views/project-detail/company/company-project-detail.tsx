/** @format */

import { recordData } from '@/commons/apis/sections/record';
import ListUI from '@/components/list-ui/list-ui';
import { Icons, Tags, Typography } from '@hyewon/design-system';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const CompanyProjectDatail = () => {
	const param = useParams();
	const data = recordData.filter((i) => i.id === param?.id)?.[0] || [];

	return (
		<article className='pt-10 pb-28'>
			<header>
				<nav className='w-full flex items-center gap-4 pb-10'>
					<button>
						<Icons iconName='ArrowLeft' size='60' color={'#5eead4'} />
					</button>
					<Link href='/'>홈</Link>
				</nav>
				<div className='px-6'>
					<Typography as='h1' variants='display-l' className='pb-5'>
						{data?.company || '회사명'}
					</Typography>
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

			<div className='px-8'>
				<section className='pt-10'>
					<Typography as='h2' variants='heading-s'>
						기여 및 역할
					</Typography>
					<ListUI direction='virtical' listMap={data.contribute} />
				</section>
				<section className='pt-10'>
					<Typography as='h2' variants='heading-s'>
						문제 해결 사례
					</Typography>
					<ListUI direction='virtical' listMap={data.troubleshooting} />
				</section>
			</div>
		</article>
	);
};

export default CompanyProjectDatail;
