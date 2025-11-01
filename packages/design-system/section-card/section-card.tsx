/** @format */
import React, { JSX, ReactNode, useState } from 'react';
import Typography from '../typography/typography';
import Image from 'next/image';
import { openClassStyle, notOpenClassStyle } from './section-card-const';
import Icons from '../icon/icons';

interface SectionCardProps {
	type: 'record' | 'about' | 'default';
	styleType?: 'line' | 'normal' | 'liquid';
	title?: string;
	isNeedTitleIcon?: boolean;
	titleIconName?: string;
	titleColor?: string;
	titleAs?: keyof JSX.IntrinsicElements;
	onClickTitle?: () => void;
	subtitle?: string;
	subtitleAs?: keyof JSX.IntrinsicElements;
	isNeedSummary?: boolean;
	summaryChildren?: ReactNode;
	children?: ReactNode;
	isNeedMoreBtn?: boolean;
	subSectionImgSrc?: { size: null | number; url: string }[];
	sectionCardClassName?: string;
	as?: keyof JSX.IntrinsicElements;
}

const SectionCard = ({
	type = 'record',
	styleType = 'normal',
	title,
	titleColor,
	isNeedTitleIcon = false,
	titleIconName,
	titleAs = 'h1',
	onClickTitle,
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
	const [isButtonHover, setIsBttonHover] = useState(false);
	const onMouseOverHandler = () => {
		setIsBttonHover(!isButtonHover);
	};
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
									src={i?.url || ''}
									alt='sub section img'
									width={i.size ?? 200}
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
						<button onClick={onClickTitle}>
							<Typography
								as={titleAs}
								variants='body-l-strong'
								color={titleColor}
								className='pb-2 flex gap-0.5 hover:text-core-green-300 hover:cursor-pointer group'>
								{title}
								{isNeedTitleIcon && titleIconName && (
									<p className='pt-1.5 group-hover:pt-1 group-hover:pl-1'>
										<Icons iconName={titleIconName} />
									</p>
								)}
							</Typography>
						</button>
					)}
					{isNeedSummary ? (
						<>
							{summaryChildren}
							<div className={isOpen ? 'visible' : 'invisible'}>{children}</div>
						</>
					) : (
						children
					)}
				</div>
			</section>
			{isNeedMoreBtn && (
				<button
					className='w-full h-[32px] flex justify-center hover:cursor-pointer group'
					onMouseEnter={onMouseOverHandler}
					onMouseLeave={onMouseOverHandler}
					onClick={onClickOpenCard}>
					<p className='mt-2 group-hover:pb-1 will-change-transform group-hover:animate-[pop_500ms_ease-out_infinite] motion-reduce:animate-none'>
						<Icons
							iconName={isOpen ? 'DoubleArrowUpIcon' : 'DoubleArrowDownIcon'}
							color={isButtonHover ? '#5eead466' : '#8e97995d'}
						/>
					</p>
				</button>
			)}
		</Component>
	);
};

export default SectionCard;
