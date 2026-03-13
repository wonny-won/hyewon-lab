/** @format */

import HomeMenu from '../features/all-home-menu-section/ui/home-menu';
import NearByMeHotErrand from '../features/nearby-me-hot-errand-section/ui/nearby-me-hot-errand';

export default function Home() {
	return (
		<section className='w-full flex flex-col'>
			<HomeMenu />
			<NearByMeHotErrand />
		</section>
	);
}
