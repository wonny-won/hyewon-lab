/** @format */
import React, { JSX, ReactNode, useState } from 'react';
import Typography from '../typography/typography';
import Button from '../button/button';
import Image from 'next/image';
import { openClassStyle, notOpenClassStyle } from './section-card-const';
import Icons from '../icon/icons';

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
	as?: keyof JSX.IntrinsicElements;
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
	as: Component = 'section',
}: SectionCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClickOpenCard = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Component
			className={
				isOpen
					? [openClassStyle.sectionCardStyle?.[styleType]?.[type], sectionCardClassName || ''].join(' ')
					: [notOpenClassStyle.sectionCardStyle?.[styleType]?.[type], sectionCardClassName || ''].join(' ')
			}>
			<section className={openClassStyle.contentStyle?.[styleType]?.[type]}>
				<figure className={openClassStyle.subTitleSideStyle?.[styleType]?.[type]}>
					<Typography as={subtitleAs} variants='body-s-strong' className='mb-0.5'>
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
									style={{
										minHeight: '115px',
									}}
								/>
							</div>
						))}
				</figure>
				<div className='w-[full] flex flex-col'>
					{title && (
						<Typography as={titleAs} variants='body-l-strong' color={titleColor} className='pb-2'>
							{title}
						</Typography>
					)}
					{isNeedSummary ? (
						<>
							{summaryChildren}
							{isOpen && <>{children}</>}
						</>
					) : (
						children
					)}
				</div>
			</section>
			{isNeedMoreBtn && (
				<button className='w-full pt-5 flex justify-center hover:cursor-pointer' onClick={onClickOpenCard}>
					<Icons iconName={isOpen ? 'DoubleArrowUpIcon' : 'DoubleArrowDownIcon'} />
				</button>
			)}
		</Component>
	);
};

export default SectionCard;
