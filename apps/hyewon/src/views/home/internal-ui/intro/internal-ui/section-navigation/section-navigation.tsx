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
		<ul className='max-w-[1460px] grid grid-cols-[1.5fr_1.3fr_1.2fr] gap-25 mx-auto'>
			{sectionNav.map((i) => (
				<li key={i.id} className='hover:cursor-pointer'>
					<button
						className='pb-3 hover:cursor-pointer'
						onClick={() => {
							console.log();
							if (i.idx) onClick?.(i.idx);
						}}>
						<Typography
							as='a'
							variants='label-xl'
							color={i.idx === currNavId ? 'text-[#5eead4]' : 'text-core-neutral-200'}>
							{i.idx === currNavId && '⎯⎯'} {i.name}
						</Typography>
					</button>
					<div className='flex gap-4'>
						{i.desc.map((item) => (
							<figure key={item.id}>
								{!!item.image && (
									<Image
										src={item.image ?? ''}
										alt='섹션 네비게이션 이미지'
										width={80}
										height={80}
										style={{
											minHeight: '80px',
											borderRadius: '8px',
										}}
									/>
								)}
								<figcaption className='pt-2 text-center'>
									<Typography as='p' variants='label-m'>
										{item.txt}
									</Typography>
								</figcaption>
							</figure>
						))}
					</div>
				</li>
			))}
		</ul>
	);
};

export default SectionNavigation;
