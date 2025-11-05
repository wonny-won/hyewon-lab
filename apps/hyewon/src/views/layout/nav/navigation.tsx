/** @format */

import { Typography } from '@hyewon/design-system';
import { navList } from './nav-const';
import { useScrollContext } from '@/commons/context/scroll-context';
interface NavigationProps {
	onClick?: (id: any) => void;
}

const Navigation = ({ onClick }: NavigationProps) => {
	const { currNavId } = useScrollContext();
	return (
		<nav className='sticky top-0 '>
			<ul className='flex gap-10'>
				{navList.map((i) => (
					<li key={i.id} className='hover:cursor-pointer'>
						<button
							className='p-2 hover:cursor-pointer'
							onClick={() => {
								if (i.idx) onClick?.(i.idx);
							}}>
							<Typography variants='label-xl'>
								{i.idx === currNavId && '⎯⎯'} {i.name}
							</Typography>
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
