/** @format */

import Image from 'next/image';

const ImgComp = (data: any) => {
	return (
		<figure className='block w-full max-w-[500px] m-0 overflow-hidden rounded-[8px]'>
			<Image
				src={data.data.url || ''}
				alt='sub section img'
				width={data.data.size ?? 500}
				height={350}
				sizes='(max-width: 500px) 100vw, 500px'
				className='max-w-full max-h-[350px] w-auto h-auto rounded-[8px]'
			/>
		</figure>
	);
};

export default ImgComp;
