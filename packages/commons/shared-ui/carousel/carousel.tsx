/** @format */
'use client';

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';

export default function BasicCarousel({
	imgUrls,
	size = 'medium',
	settingsOpt,
}: {
	imgUrls: string[];
	size?: 'small' | 'medium' | 'large';
	settingsOpt?: {};
}) {
	const defaultSettings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const mergedSettings = { ...defaultSettings, ...settingsOpt };

	const sizeClass = {
		small: 'w-full h-[140px]',
		medium: 'w-full h-[140px]',
		large: 'w-full h-[200px]',
	};

	return (
		<Slider {...mergedSettings}>
			{imgUrls.map((imgUrl) => (
				<div key={imgUrl} className={sizeClass[size]}>
					<Image
						src={imgUrl}
						alt='carousel'
						width={100}
						height={100}
						className='object-cover w-full h-full'
						style={{
							borderRadius: '12px',
						}}
					/>
				</div>
			))}
		</Slider>
	);
}
