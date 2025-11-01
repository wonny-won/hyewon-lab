/** @format */
import React, { ReactNode } from 'react';
import Intro from './intro/intro';
import Navigation from './nav/navigation';
import { useScrollContext } from '@/commons/context/scroll-context';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const { handleNavClick } = useScrollContext();

	return (
		<div className='h-screen w-full overflow-hidden flex gap-25 py-5 px-12'>
			<Intro />
			<div className='w-full h-full'>
				<Navigation onClick={handleNavClick} />
				<main className='w-full h-full py-16 overflow-auto'>{children}</main>
			</div>
		</div>
	);
};
export default Layout;
