/** @format */

import Image from 'next/image';

const ImgComp = (data: any) => {
	return (
		<Image
			src={data.data.url || ''}
			alt='sub section img'
			width={data.data.size ?? 500}
			height={500}
			className='max-w-[450px] max-h-[500px] object-contain rounded-[8px] max-[1200px]:max-w-[400px] max-[1100px]:max-w-[350px] max-lg:300px'
		/>
	);
};

export default ImgComp;
