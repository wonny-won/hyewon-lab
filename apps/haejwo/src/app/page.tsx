/** @format */

import { Banner } from '@hyewon/commons';
// import HomeMenu from '../features/all-home-menu-section/ui/home-menu';
import NearByMeHotErrand from '../features/nearby-me-hot-errand-section/ui/nearby-me-hot-errand';
import CategoryHeaderSection from '../features/all-home-menu-section/ui/category-header-section';

export default function Home() {
	return (
		<section className='w-full flex flex-col'>
			<Banner src='/banner.png' size='small' />
			<CategoryHeaderSection />
			<NearByMeHotErrand />
		</section>
	);
}
