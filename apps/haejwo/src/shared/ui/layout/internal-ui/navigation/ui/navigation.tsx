/** @format */
import { Icons } from '@hyewon/design-system';
import { navigationList } from '../model/const';

const Navigation = () => {
	return (
		<nav className='w-full flex gap-6 py-3 px-5 fixed bottom-0 justify-center border-t-1 border-neutral-200 bg-zinc-50'>
			<ul className='w-full flex justify-around '>
				{navigationList.map((i) => (
					<button key={i.id}>
						<Icons iconName={i.IconName} strokeWidth='1.5' color='#333' size='20' />
					</button>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
