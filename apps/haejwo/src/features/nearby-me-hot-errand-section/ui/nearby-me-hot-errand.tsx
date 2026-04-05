/** @format */

import { nearByMeErrand } from '@/src/entities/nearby-me-errand/data-prototype';
import { ProductCard, Typography } from '@hyewon/design-system';

const NearByMeHotErrand = () => {
	return (
		<section className='w-screen py-5 bg-white max-sm:-translate-x-5 -translate-x-25'>
			<div className='px-5'>
				<Typography as='h1' variants='label-l'>
					내 <span className='text-core-blue-400 font-bold'>근처 핫</span> 한 심부름 🔥
				</Typography>
				<ul className='pb-8'>
					{nearByMeErrand.map((i) => (
						<li key={i.id} className='list-none'>
							<ProductCard
								title={i.title}
								location={i.location}
								locationFar={i.locationFar}
								updateHour={i.updateHour}
								price={i.price}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default NearByMeHotErrand;
