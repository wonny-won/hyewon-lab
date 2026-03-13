/** @format */
import React from 'react';
import Image from 'next/image';
import Typography from '../typography/typography';

interface ProductCardPropType {
	cardType?: 'horizontal' | 'vertical';
	thumbnail?: string | null;
	title: string;
	price?: number;
	location: string;
	locationFar: number;
	updateHour: string;
}

const ProductCard = ({
	cardType = 'horizontal',
	thumbnail,
	title,
	price = 3000,
	location,
	locationFar,
	updateHour,
}: ProductCardPropType) => {
	const cardTypeClass = {
		horizontal: 'flex gap-4 py-2',
		vertical: 'flex flex-col gap-2',
	};

	return (
		<>
			<section className={cardTypeClass[cardType]}>
				<figure className='relative rounded-[8px]'>
					<Image
						alt='product-card-thumbnail'
						width={cardType === 'horizontal' ? 120 : 200}
						height={cardType === 'horizontal' ? 150 : 200}
						src={thumbnail ?? '/no_thumbnail.png'}
						style={{ borderRadius: '8px', objectFit: 'cover' }}
					/>
					{!thumbnail && (
						<div className='bg-core-gray-300/80 w-full h-full overflow-hidden absolute top-0 rounded-[8px] op' />
					)}
				</figure>
				<div className='flex flex-col gap-1'>
					<Typography as='h1' variants='body-m' color='text-core-gray-700'>
						{title}
					</Typography>
					<Typography as='p' variants='body-xs' color='text-core-gray-500'>
						{locationFar}km • {location} • {updateHour}
					</Typography>
					<Typography as='p' variants='label-l' color='text-core-gray-700'>
						{price}원
					</Typography>
				</div>
			</section>
		</>
	);
};
export default ProductCard;
