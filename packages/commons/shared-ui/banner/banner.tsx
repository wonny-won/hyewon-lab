/** @format */
import React from 'react';
import BasicCarousel from '../carousel/carousel';

const Banner = ({ size, src }: { size: 'small' | 'medium' | 'large'; src: string }) => {
	return <BasicCarousel imgUrls={['/banner.png', '/banner.png', '/banner.png']} size={size} />;
};

export default Banner;
