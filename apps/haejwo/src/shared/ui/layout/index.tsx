/** @format */

import { ReactNode } from 'react';
import Navigation from './internal-ui/navigation/ui/navigation';
import Header from './internal-ui/header/ui/header';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main className='max-sm:px-5 max-sm:mt-[70px] px-25 mt-[70px]'>{children}</main>
			<Navigation />
		</>
	);
};
export default Layout;
