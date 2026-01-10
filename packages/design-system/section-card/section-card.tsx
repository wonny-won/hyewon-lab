/** @format */
import React, { Fragment, JSX, ReactNode, RefObject, useEffect, useState } from 'react';
import Typography from '../typography/typography';
import Image from 'next/image';
import { openClassStyle, notOpenClassStyle } from './section-card-const';
import Icons from '../icon/icons';

interface SectionCardProps {
	blockId?: string;
	type: 'record' | 'about' | 'default' | 'troubleshooting';
	styleType?: 'line' | 'normal' | 'liquid';
	title?: string;
	isNeedTitleIcon?: boolean;
	titleIconName?: string;
	titleColor?: string;
	titleAs?: keyof JSX.IntrinsicElements;
	onClickTitle?: () => void;
	subtitle?: string | string[];
	subtitleAs?: keyof JSX.IntrinsicElements;
	isNeedSummary?: boolean;
	summaryChildren?: ReactNode;
	children?: ReactNode;
	isNeedMoreBtn?: boolean;
	subSectionImgSrc?: { size: null | number; url: string }[];
	sectionCardClassName?: string;
	subSectionChildren?: JSX.IntrinsicElements;
	as?: keyof JSX.IntrinsicElements;
	ref?: RefObject<HTMLDivElement | null>;
}

const SectionCard = ({
	blockId,
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
	subSectionChildren,
	subSectionImgSrc,
	sectionCardClassName,
	as: Component = 'section',
	ref,
}: SectionCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isButtonHover, setIsBttonHover] = useState(false);
	const [subImg, setSubImg] = useState<any>(subSectionImgSrc?.[0]);
	const [subImgcurrIdx, setSubImgCurrIdx] = useState(0);
	const onMouseOverHandler = () => {
		setIsBttonHover(!isButtonHover);
	};
	const onClickOpenCard = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (!subSectionImgSrc || !subSectionImgSrc.length) return;
		setSubImg(subSectionImgSrc[subImgcurrIdx]);
	}, [subImgcurrIdx, subSectionImgSrc]);
	useEffect(() => {
		if (!subSectionImgSrc || !subSectionImgSrc.length) return;

		const id = setInterval(() => {
			setSubImgCurrIdx((prev) => (prev + 1) % subSectionImgSrc.length);
		}, 5000);

		//interval 무한 실행방지 (30분 후 자동 중지)
		setTimeout(() => {
			clearInterval(id);
		}, 1800000);

		return () => clearInterval(id);
	}, [subSectionImgSrc]);

	return (
		<div
			role='link'
			id={blockId}
			className='max-lg:w-full max-lg:flex max-lg:justify-center max-lg:min-w-[250px] max-lg:max-w-[500px]'
			onClick={
				!!blockId
					? () => {
							const url = `${window.location.origin}${window.location.pathname}#${blockId}`;
							navigator.clipboard.writeText(url);
					  }
					: undefined
			}
			ref={ref}>
			<Component
				className={
					isOpen
						? [openClassStyle.sectionCardStyle?.[styleType]?.[type], sectionCardClassName || ''].join(' ')
						: [notOpenClassStyle.sectionCardStyle?.[styleType]?.[type], sectionCardClassName || ''].join(
								' '
						  )
				}>
				<span
					className='pointer-events-none absolute -inset-[2px] rounded-[34px]
              bg-[rgba(0,0,10,0.25)]
              blur-[24px] opacity-80'
				/>

				<section className={openClassStyle.contentStyle?.[styleType]?.[type]}>
					{
						<figure className={openClassStyle.subTitleSideStyle?.[styleType]?.[type]}>
							{Array.isArray(subtitle) ? (
								<figcaption className='lg:block hidden '>
									<Typography as={subtitleAs} variants='body-s-strong' className='mb-1.5'>
										✓ 특이사항
									</Typography>

									{subtitle.map((item, idx) => (
										<Fragment key={idx}>
											<Typography as={subtitleAs} variants='body-s' className='mb-0.5'>
												{idx + 1}. {item}
											</Typography>
										</Fragment>
									))}
								</figcaption>
							) : (
								<figcaption>
									<Typography as={subtitleAs} variants='body-s-strong' className='mb-0.5'>
										{subtitle}
									</Typography>
								</figcaption>
							)}

							{type === 'record' && (
								<Image
									src={subImg.url || ''}
									alt='sub section img'
									width={subImg.size ?? 300}
									height={200}
									style={{ minHeight: '180px', objectFit: 'contain' }}
								/>
							)}
						</figure>
					}
					<div className='w-[full] flex flex-col pt-3'>
						{title && (
							<button className='max-w-fit' onClick={onClickTitle}>
								<Typography
									as={titleAs}
									variants='body-l-strong'
									color={titleColor}
									className='pb-3 flex gap-0.5 hover:text-core-green-300 hover:cursor-pointer group'>
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
		</div>
	);
};

export default SectionCard;
