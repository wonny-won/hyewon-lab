/** @format */
import React, { ReactNode } from 'react';
import Intro from './intro/intro';
import Navigation from './nav/navigation';
import { onClickMoveScroll } from '@/commons/utils/scroll-util';
import { useScrollContext } from '@/commons/context/scroll-context';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const { aboutSectionRef, recordSectionRef } = useScrollContext();

	const handleNavClick = (id: string) => {
		if (id === 'about' && aboutSectionRef.current) {
			onClickMoveScroll(aboutSectionRef);
		} else if (id === 'record' && recordSectionRef.current) {
			onClickMoveScroll(recordSectionRef);
		}
	};

	return (
		<div className='h-screen w-full overflow-hidden flex pt-5 py-20'>
			<Intro />
			<div className='w-full h-full px-20 overflow-auto'>
				<Navigation onClick={handleNavClick} />
				<main className='w-full h-full py-20'>{children}</main>
			</div>
		</div>
	);
};
export default Layout;
