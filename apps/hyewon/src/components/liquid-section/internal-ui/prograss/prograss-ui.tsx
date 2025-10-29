/** @format */

import { useScrollContext } from '@/commons/context/scroll-context';
import { navListType } from '@/views/layout/nav/nav-const';
import { Icons } from '@hyewon/design-system';

interface PrograssUIProps {
	currNavIdx: string;
}

const PrograssUI = ({ currNavIdx }: PrograssUIProps) => {
	const { handleNavClick } = useScrollContext();
	console.log(navListType[currNavIdx]?.id);

	return (
		<div className='flex flex-col items-center'>
			<p className='text-body-m pb-1 font-thin text-core-neutral-200'>{navListType[currNavIdx]?.name}</p>
			<div className='w-full flex flex-col gap-5 items-center mt-5'>
				<div className=' w-full h-[5px] rounded-[20px] bg-core-neutral-500/80 overflow-hidden'>
					<div
						className={`w-${
							navListType[currNavIdx]?.id || 1
						}/3 h-[5px] rounded-[20px] bg-white/80 transition-all duration-300`}
					/>
				</div>
				<div className='flex gap-6'>
					<Icons iconName='BackIcon' />
					<Icons iconName='PauseIcon' />
					<Icons iconName='NextIcon' />
				</div>
			</div>
		</div>
	);
};
export default PrograssUI;
