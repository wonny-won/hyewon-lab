/** @format */
import React, { JSX, useState } from 'react';
import Typography from '../typography/typography';
import Button from '../button/button';
import { openClassStyle, notOpenClassStyle } from './section-card-const';

interface SectionCardProps {
	type: 'record' | 'about' | 'default';
	title?: string;
	titleAs?: keyof JSX.IntrinsicElements;
	subtitle?: string;
	subtitleAs?: keyof JSX.IntrinsicElements;
	children?: any;
	isNeedMoreBtn?: boolean;
}

const SectionCard = ({
	type = 'record',
	title,
	titleAs = 'h1',
	children,
	subtitle,
	subtitleAs = 'h2',
	isNeedMoreBtn = false,
}: SectionCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClickOpenCard = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section className={isOpen ? openClassStyle.sectionCardStyle[type] : notOpenClassStyle.sectionCardStyle[type]}>
			<div className={openClassStyle.contentStyle[type]}>
				<div className={openClassStyle.subTitleSideStyle[type]}>
					<Typography as={subtitleAs} variants='body-s-strong' color='text-core-green-400'>
						{subtitle}
					</Typography>
				</div>
				<div className='w-[full] flex flex-col gap-1'>
					<Typography as={titleAs} variants='body-l-strong'>
						{title}
					</Typography>
					{children}
				</div>
			</div>
			{isNeedMoreBtn && (
				<Button
					variants='chipsOutline'
					status='default'
					size='xsmall'
					className='w-fit m-auto align-middle py-1 h-8'
					onClick={onClickOpenCard}>
					{isOpen ? '간략히 보기' : '자세히 보기'}
				</Button>
			)}
		</section>
	);
};

export default SectionCard;
