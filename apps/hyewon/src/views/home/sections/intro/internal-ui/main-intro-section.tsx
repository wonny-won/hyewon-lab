/** @format */

import Image from 'next/image';
import { SectionCard } from '@hyewon/design-system';
import ListUI from '@/components/list-ui/list-ui';
import { aboutMyProfile } from '@/commons/apis/sections/intro';

const MainInroSection = () => {
	const rainbowTxt =
		'bg-gradient-to-r from-yellow-500 via-core-green-300 to-blue-500 bg-clip-text text-transparent font-semibold';
	return (
		<section className='flex flex-col gap-6'>
			<SectionCard type='default' styleType='liquid' sectionCardClassName='p-8 min-w-[500px] max-w-[650px]'>
				<Image
					src={aboutMyProfile.profile}
					alt={'profile img'}
					width={120}
					height={120}
					style={{ borderRadius: '16px' }}
				/>
				<h3 className={`pt-[40px] pb-[16px] text-[18px] font-extrabold ${rainbowTxt}`}>CONTACT ME NOW</h3>
				<ListUI direction='horizontal' listMap={aboutMyProfile.contact} />
			</SectionCard>
		</section>
	);
};
export default MainInroSection;
