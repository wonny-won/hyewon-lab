/** @format */

import type { Metadata } from 'next';
import './globals.css';
import { RegisterSW } from './register-sw';
import InstallButton from './install-btn';
import Layout from '../shared/ui/layout';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ko'>
			<body>
				<RegisterSW />
				<Layout>
					<InstallButton />
					{children}
				</Layout>
			</body>
		</html>
	);
}
