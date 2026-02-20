/** @format */

import { onClickOpenNewWindow } from '@/commons/utils/link';
import ListUI from '@/components/list-ui/list-ui';
import { Icons, Typography, SkeletonUI, Tooltip } from '@hyewon/design-system';
import Image from 'next/image';
import Header from './internal-ui/header';
import CompanyProjectDatailContextProvider, {
	useCompanyProjectDatailContext,
} from '../feature/company-project-detail.context';

const CompanyProjectDatailContent = () => {
	const { clipboardTxt, prodDetaildata, loadedImages, handleImageLoad } = useCompanyProjectDatailContext();

	return (
		<article className='pt-15 pb-28 min-[1450px]:px-[150px]'>
			<Header data={prodDetaildata} onClickOpenNewWindow={onClickOpenNewWindow} />

			<div className='max-sm:px-0 px-8 pt-20 max-sm:pt-15'>
				<div className='flex overflow-auto max-lg:flex-col gap-25 min-[1450px]:gap-30'>
					<section className='flex overflow-auto gap-8 mx-auto'>
						{prodDetaildata?.siteGif?.map((i) => (
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
						<ListUI direction='virtical' listMap={prodDetaildata.contribute} />
					</div>
				</section>
				<section className='w-screen bg-slate-800/40 relative left-1/2 -translate-x-1/2'>
					<div className='px-6 lg:px-60 max-sm:px-5 py-25 max-sm:py-15'>
						<Typography as='h2' variants='heading-l' color='text-white'>
							<span className='text-core-green-300 text-label-xl'>02. </span> Develop Point
						</Typography>
						<ListUI direction='virtical' listMap={prodDetaildata.commonDev} />
					</div>
				</section>
			</div>
		</article>
	);
};

const CompanyProjectDatail = () => {
	return (
		<CompanyProjectDatailContextProvider>
			<CompanyProjectDatailContent />
		</CompanyProjectDatailContextProvider>
	);
};

export default CompanyProjectDatail;
