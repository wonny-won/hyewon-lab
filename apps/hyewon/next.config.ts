/** @format */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	transpilePackages: ['@hyewon/design-system', 'apps/hyewon-portfolio'],
};

export default nextConfig;
