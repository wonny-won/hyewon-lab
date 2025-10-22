/** @format */

import { Button, Typography } from '@hyewon/design-system';
import { navList } from './nav-const';

//inset-0 bg-core-neutral-50/50 backdrop-blur-sm
const Navigation = () => {
	return (
		<nav className='fixed z-10'>
			<ul className='flex gap-4'>
				{navList.map((i, idx) => (
					<li key={idx}>
						<Button variants='chips' size='large' status='active'>
							<Typography variants='body-s-strong'>{i}</Typography>
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
