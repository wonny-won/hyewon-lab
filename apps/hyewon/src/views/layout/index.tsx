/** @format */
import React, { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='w-full overflow-hidden flex flex-col gap-25'>
			<main className='w-full h-full overflow-auto px-30 '>{children}</main>
		</div>
	);
};
export default Layout;
