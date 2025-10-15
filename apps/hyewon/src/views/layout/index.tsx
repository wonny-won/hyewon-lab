/** @format */
import React, { ReactNode } from 'react';
import Intro from './intro/intro';
import Navigation from './nav/navigation';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div
			className="h-screen w-full overflow-hidden flex gap-25 bg-[url('/main-bg.png')] bg-cover bg-fixed"
			style={{ backgroundPosition: 'left 80% bottom 50%' }}>
			<Intro />
			<div className='ml-[590px] w-full'>
				<Navigation />
				<main className='w-full h-full py-25 overflow-auto'>{children}</main>
			</div>
		</div>
	);
};
export default Layout;
