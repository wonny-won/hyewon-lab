/** @format */
import React, { ReactNode } from 'react';
import Intro from './intro/intro';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='w-full overflow-hidden flex flex-col gap-25 py-5 px-12'>
			<Intro />
			<main className='w-full h-full py-16 overflow-auto'>{children}</main>
		</div>
	);
};
export default Layout;
