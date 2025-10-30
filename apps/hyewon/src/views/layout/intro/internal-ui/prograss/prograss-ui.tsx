/** @format */

import { useScrollContext } from '@/commons/context/scroll-context';
import { navListType } from '@/views/layout/nav/nav-const';
import { Icons } from '@hyewon/design-system';

interface PrograssUIProps {
	currNavIdx: string;
}

const PrograssUI = ({ currNavIdx }: PrograssUIProps) => {
	const { handleNavClick } = useScrollContext();

	return (
		<aside aria-label='현재 위치' className='flex flex-col items-center'>
			<p className='text-body-m pb-1 font-thin text-core-neutral-200'>{navListType[currNavIdx]?.name}</p>
			<div className='w-full flex flex-col gap-5 items-center mt-3'>
				<div className=' w-full h-[5px] rounded-[20px] bg-core-neutral-500/80 overflow-hidden'>
					<div
						className={`h-[5px] rounded-[20px] bg-white/80 transition-all duration-300`}
						style={{ width: `${(navListType[currNavIdx]?.id / 3) * 100}%` }}
					/>
				</div>
				<div className='flex gap-6'>
					<Icons iconName='BackIcon' />
					<Icons iconName='PauseIcon' />
					<Icons iconName='NextIcon' />
				</div>
			</div>
		</aside>
	);
};
export default PrograssUI;
