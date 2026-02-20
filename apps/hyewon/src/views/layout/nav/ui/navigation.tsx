/** @format */

import { useScrollContext } from '@/commons/context/scroll-context';
import { navItems } from '../feature/const';

const Navigation = () => {
	const { handleNavClick, currNavId } = useScrollContext();

	return (
		<nav className='z-1 fixed top-10 left-[38%] max-sm:left-5 hover:cursor-pointer flex flex-col items-center shrink-0 overflow-hidden py-1 px-2 transition-transform duration-600 ease-in-out pointer-events-auto rounded-[30px] bg-[radial-gradient(1200px_1700px_at_10%_50%,rgba(10,180,255,0.27),transparent_35%),radial-gradient(600px_600px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.48),transparent_1%),linear-gradient(180deg,rgba(255,255,255,0.48),transparent_1%)] [background-position:0%_0%,left,top] [background-size:auto,2px_100%,100%_3px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),inset_0_10px_12px_-10px_rgba(0,0,0,0.95),inset_11px_0_15px_-10px_rgba(0,0,0),0_10px_20px_rgba(0,0,0,0.55),0_-12px_17px_-12px_rgba(255,255,255,0.3),inset_-6px_0_9px_-4px_rgba(10,180,255,0.48)] border-[0.5px] border-[rgba(10,180,255,0.7)] border-t-[1px] border-t-[rgba(10,180,255,0.8)] border-r-[1.5px] border-r-[rgba(10,180,255,0.4)] backdrop-blur-[5px] transform-gpu will-change-transform hover:-translate-y-1 hover:scale-[1.01]'>
			<ul className='flex justify-center items-center gap-6 w-full'>
				{navItems.map((item) => (
					<li
						key={item.label}
						className={`text-center shrink-0 text-label-m font-semibold hover:cursor-pointer py-2 px-3 rounded-full ${
							currNavId === item.id
								? 'bg-core-neutral-300/15 text-core-green-300 font-bold'
								: 'text-core-neutral-200'
						}`}
						onClick={() => handleNavClick(item.id as number)}>
						<a href={item.href}>{item.label}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
