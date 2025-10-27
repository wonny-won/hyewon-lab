/** @format */

import { Button, Typography } from '@hyewon/design-system';
import { navList } from './nav-const';
interface NavigationProps {
	onClick: (id: string) => void;
}

const Navigation = ({ onClick }: NavigationProps) => {
	return (
		<nav className='fixed z-10'>
			<ul className='flex gap-4'>
				{navList.map((i) => (
					<li key={i.id}>
						<Button variants='liquidChips' size='large' status='active' onClick={() => onClick(i.id)}>
							<Typography variants='body-s-strong'>{i.name}</Typography>
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
