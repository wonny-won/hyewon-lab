/** @format */

import { ProductCard, Typography } from '@hyewon/design-system';

const NearByMeHotErrand = () => {
	return (
		<section className='w-screen py-5 bg-white max-sm:-translate-x-5 -translate-x-25'>
			<div className='px-5'>
				<Typography as='h1' variants='label-l'>
					내 <span className='text-core-blue-400 font-bold'>근처 핫</span> 한 심부름 🔥
				</Typography>
				<ProductCard title='지금 약 사다주실 분' location='행신' locationFar={0.3} updateHour='2시간전' />
			</div>
		</section>
	);
};

export default NearByMeHotErrand;
