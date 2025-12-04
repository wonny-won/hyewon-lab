/** @format */
import Head from 'next/head';
import React, { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<title>정혜원 | FE Engineer Portfolio</title>
				<meta name='description' content='프론트엔드 개발자 정혜원의 포트폴리오 사이트입니다.' />
			</Head>
			<div className='w-full overflow-hidden flex flex-col gap-5.5 lg:gap-25'>
				<main className='w-full h-full overflow-hidden max-lg:pt-12 max-[1328px]:pt-12 px-6 lg:px-30'>
					{children}
				</main>
			</div>
		</>
	);
};
export default Layout;
