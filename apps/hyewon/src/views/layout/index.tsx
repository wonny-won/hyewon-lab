/** @format */
import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from './footer/footer';
import Navigation from './nav/navigation';
import { useRouter } from 'next/router';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const excludesNavigationPage = ['/projects/company'];
	const route = useRouter();

	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<title>정혜원 | FE Engineer Portfolio</title>
				<meta name='description' content='프론트엔드 개발자 정혜원의 포트폴리오 사이트입니다.' />
			</Head>
			<div className='w-full overflow-hidden flex flex-col'>
				{!excludesNavigationPage.some((i) => route.asPath.includes(i)) && <Navigation />}
				<main className='w-full h-full overflow-hidden px-50 max-[1100px]:px-20 max-[1200px]:px-25'>
					{children}
				</main>
				<Footer />
			</div>
		</>
	);
};
export default Layout;
