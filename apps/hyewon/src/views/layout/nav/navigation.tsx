/** @format */

import { Button, Typography } from '@hyewon/design-system';
import { navList } from './nav-const';

const Navigation = () => {
	return (
		<nav className='fixed '>
			<ul className='flex gap-4 py-5'>
				{navList.map((i, idx) => (
					<li key={idx}>
						<Button variants='chips' size='large' status='default'>
							<Typography variants='body-s-strong'>{i}</Typography>
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
