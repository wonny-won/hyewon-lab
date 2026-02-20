/** @format */
import Image from 'next/image';

const ImgItem = ({ item }) => {
	return (
		<>
			{item?.imgUrl?.length && (
				<div className={`flex ${item?.imgUrl?.[0].direction} overflow-auto`}>
					{!!item?.imgUrl?.length &&
						item?.imgUrl?.map((i) => (
							<figure key={i.id} className='rounded-[8px]'>
								<Image
									alt='설명'
									src={i?.url || ''}
									width={500}
									height={450}
									objectFit='contain'
									className='pl-3.5 pt-2 pb-3.5 max-w-[350px] max-h-[550px] max-lg:max-w-[300px] max-sm:max-w-[280px]'
									style={{ borderRadius: '8px' }}
								/>
							</figure>
						))}
				</div>
			)}
		</>
	);
};

export default ImgItem;
