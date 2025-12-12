/** @format */

import { sectionNav } from '@/commons/apis/layout/section-navigation/section-navigation';
import { useScrollContext } from '@/commons/context/scroll-context';
import { Typography } from '@hyewon/design-system';
import Image from 'next/image';
interface NavigationProps {
	onClick?: (id: any) => void;
}

const SectionNavigation = ({ onClick }: NavigationProps) => {
	const { currNavId } = useScrollContext();
	return (
		<ul className='max-w-full grid max-[1297px]:grid-rows-[1fr_1fr]  min-[1300px]:grid-cols-[1fr_1fr] max-[1300px]:gap-5 min-[1300px]:gap-30 mx-auto max-[1300px]:overflow-x-auto max-[600px]:overflow-hidden'>
			{sectionNav.map((i) => (
				<li key={`${i.id}-${i.idx}`} className='hover:cursor-pointer min-w-0'>
					<button
						className='pb-4 hover:cursor-pointer'
						onClick={() => {
							if (i.idx) onClick?.(i.idx);
						}}>
						<Typography
							as='a'
							variants='label-xl'
							color={i.idx === currNavId ? 'text-core-green-300' : 'text-core-neutral-200'}>
							{i.idx === currNavId && '⎯⎯'} {i.name}
						</Typography>
					</button>
					<ul className='flex flex-nowrap gap-6 overflow-x-auto w-full max-w-[600px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
						{i.desc?.map((item, idx) => (
							<li
								key={idx}
								onClick={() => {
									if (item.idx) onClick?.(item.idx);
								}}
								className='flex flex-col items-center bg-white/10 px-2 py-3 rounded-[8px] flex-shrink-0'>
								{!!item.image && (
									<Image
										src={item.image ?? ''}
										alt='섹션 네비게이션 이미지'
										width={70}
										height={70}
										style={{
											minHeight: '70px',
											borderRadius: '4px',
										}}
									/>
								)}
								<Typography
									as='p'
									variants='label-m'
									className='flex flex-col pt-2 text-center font-semibold'>
									{item.title}
									<span
										className={`text-[13px] text-core-gray-200 font-thin pt-1 text-center min-w-[130px] max-w-[135px] ${
											i.id === 'troubleshooting' && 'min-w-[140px] max-w-[145px]'
										}`}>
										{item.summary}
									</span>
								</Typography>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
};

export default SectionNavigation;
