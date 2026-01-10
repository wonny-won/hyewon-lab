/** @format */

import { recordData } from '@/commons/apis/sections/record';
import ListUI from '@/components/list-ui/list-ui';
import { Tags, Typography } from '@hyewon/design-system';
import { useParams } from 'next/navigation';

const CompanyProjectDatail = () => {
	const param = useParams();
	const data = recordData.filter((i) => i.id === param?.id)?.[0] || [];

	return (
		<article className='py-28'>
			<header>
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
			</header>

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
		</article>
	);
};

export default CompanyProjectDatail;
