/** @format */

import '@/styles/globals.css';
import Layout from '@/views/layout';
import type { AppProps } from 'next/app';
import { ScrollProvider } from '@/commons/context/scroll.context';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ScrollProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ScrollProvider>
	);
}
