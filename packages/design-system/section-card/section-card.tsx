/** @format */
import React, { JSX, useState } from 'react';
import Typography from '../typography/typography';
import Button from '../button/button';
import { openClassStyle, notOpenClassStyle } from './section-card-const';

interface SectionCardProps {
	type: 'record' | 'about' | 'default';
	styleType?: 'line' | 'normal';
	title?: string;
	titleColor?: string;
	titleAs?: keyof JSX.IntrinsicElements;
	subtitle?: string;
	subtitleAs?: keyof JSX.IntrinsicElements;
	children?: any;
	isNeedMoreBtn?: boolean;
}

const SectionCard = ({
	type = 'record',
	styleType = 'normal',
	title,
	titleColor,
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
		<section
			className={
				isOpen
					? openClassStyle.sectionCardStyle?.[styleType]?.[type]
					: notOpenClassStyle.sectionCardStyle?.[styleType]?.[type]
			}>
			<div className={openClassStyle.contentStyle?.[styleType]?.[type]}>
				<div className={openClassStyle.subTitleSideStyle?.[styleType]?.[type]}>
					<Typography as={subtitleAs} variants='body-s-strong'>
						{subtitle}
					</Typography>
				</div>
				<div className='w-[full] flex flex-col'>
					<Typography as={titleAs} variants='body-l-strong' color={titleColor} className='pb-2'>
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
