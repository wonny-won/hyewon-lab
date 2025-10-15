/** @format */
import React from 'react';
import Typography from '../typography/typography';

interface SectionCardProps {
	type: 'record' | 'about' | 'default';
	title: string;
	subtitle?: string;
	children?: any;
}

const SectionCard = ({ type = 'default', title, children, subtitle }: SectionCardProps) => {
	const sectionCardStyle = {
		recored: 'w-[20%]',
		about: '',
		default: '',
	};

	return (
		<section className='w-[85%] h-fit bg-core-gray-50 rounded-[20px] p-10 flex gap-15'>
			<div className={sectionCardStyle[type]}>
				<Typography variants='body-s-strong' color='text-core-green-400'>
					{subtitle}
				</Typography>
			</div>
			<div className='w-[full] flex flex-col gap-1'>
				<Typography variants='body-l-strong'>{title}</Typography>
				{children}
			</div>
		</section>
	);
};

export default SectionCard;
