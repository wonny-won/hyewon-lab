/** @format */
import React, { JSX, ReactNode, useState } from 'react';
import Typography from '../typography/typography';
import Button from '../button/button';
import Image from 'next/image';
import { openClassStyle, notOpenClassStyle } from './section-card-const';

interface SectionCardProps {
	type: 'record' | 'about' | 'default';
	styleType?: 'line' | 'normal' | 'liquid';
	title?: string;
	titleColor?: string;
	titleAs?: keyof JSX.IntrinsicElements;
	subtitle?: string;
	subtitleAs?: keyof JSX.IntrinsicElements;
	isNeedSummary?: boolean;
	summaryChildren?: ReactNode;
	children?: ReactNode;
	isNeedMoreBtn?: boolean;
	subSectionImgSrc?: string[];
	sectionCardClassName?: string;
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
	isNeedSummary = false,
	summaryChildren,
	subSectionImgSrc,
	sectionCardClassName,
}: SectionCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClickOpenCard = () => {
		setIsOpen(!isOpen);
	};

	return (
		<article
			className={
				isOpen
					? [openClassStyle.sectionCardStyle?.[styleType]?.[type], sectionCardClassName || ''].join(' ')
					: [notOpenClassStyle.sectionCardStyle?.[styleType]?.[type], sectionCardClassName || ''].join(' ')
			}>
			<div className={openClassStyle.contentStyle?.[styleType]?.[type]}>
				<div className={openClassStyle.subTitleSideStyle?.[styleType]?.[type]}>
					<Typography as={subtitleAs} variants='body-s-strong'>
						{subtitle}
					</Typography>
					{type === 'record' &&
						subSectionImgSrc?.map((i, idx) => (
							<div
								key={'sub section img' + idx}
								className={`${!idx || !!isOpen ? 'visible' : 'invisible'}`}>
								<Image
									src={i || ''}
									alt='sub section img'
									width={200}
									height={300}
									style={{ minHeight: '115px' }}
								/>
							</div>
						))}
				</div>
				<div className='w-[full] flex flex-col'>
					{title && (
						<Typography as={titleAs} variants='body-l-strong' color={titleColor} className='pb-2'>
							{title}
						</Typography>
					)}
					{isNeedSummary ? (
						<>
							{summaryChildren}
							{children}
						</>
					) : (
						children
					)}
				</div>
			</div>
			{isNeedMoreBtn && (
				<Button
					variants='chipsOutline'
					status='active'
					size='xsmall'
					className='w-fit m-auto py-1 h-8'
					onClick={onClickOpenCard}>
					{isOpen ? '간략히 보기' : '자세히 보기'}
				</Button>
			)}
		</article>
	);
};

export default SectionCard;
