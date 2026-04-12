/** @format */
'use client';
import Image from 'next/image';

const ErrandDetail = () => {
	return (
		<article>
			<figure>
				<Image
					src='/dd'
					alt='디테일 이미지'
					width={150}
					height={150}
					className='w-full h-[300px] object-contain'
				/>
			</figure>
			<section>user section</section>
			<section>errand detail article section</section>
		</article>
	);
};

export default ErrandDetail;
