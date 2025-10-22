/** @format */
import React, { ReactNode } from 'react';
import Intro from './intro/intro';
import Navigation from './nav/navigation';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='h-screen w-full overflow-hidden flex pt-5 py-20'>
			<Intro />
			<div className='w-full h-full px-20 overflow-auto'>
				<Navigation />
				<main className='w-full h-full py-20'>{children}</main>
			</div>
		</div>
	);
};
export default Layout;
