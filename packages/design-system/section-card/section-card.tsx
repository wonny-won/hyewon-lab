/** @format */
import React, { JSX, ReactNode, RefObject, useState } from 'react';
import Typography from '../typography/typography';
import { openClassStyle, notOpenClassStyle } from './section-card-const';
import Icons from '../icon/icons';

interface SectionCardProps {
	type: 'record' | 'about' | 'default' | 'troubleshooting';
	styleType?: 'line' | 'normal' | 'liquid';
	title?: string;
	isNeedTitleIcon?: boolean;
	titleIconName?: string;
	titleColor?: string;
	titleAs?: keyof JSX.IntrinsicElements;
	onClickTitle?: () => void;
	isNeedSummary?: boolean;
	summaryChildren?: ReactNode;
	leftChildren?: ReactNode;
	children?: ReactNode;
	isNeedMoreBtn?: boolean;
	sectionCardClassName?: string;
	as?: keyof JSX.IntrinsicElements;
	ref?: RefObject<HTMLDivElement | null>;
	onClick?: () => void;
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
	leftChildren,
	isNeedMoreBtn = false,
	isNeedSummary = false,
	summaryChildren,
	onClick,
	sectionCardClassName,
	as: Component = 'section',
	ref,
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
		<div role='link' onClick={onClick} ref={ref}>
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
					<div className='w-[full] flex flex-col pt-3'>
						{isNeedTitleIcon && titleIconName && (
							<span className='pb-4'>
								<Icons iconName={titleIconName} size='30' color='#5eead4' />
							</span>
						)}

						{title && (
							<Typography
								as={titleAs}
								variants='heading-s'
								color={titleColor}
								className='max-h-[100px] text-start max-w-[300px] pb-5 flex gap-0.5 hover:cursor-pointer group-hover:text-core-green-300 whitespace-pre-line'>
								{title}
							</Typography>
						)}
						{isNeedSummary ? (
							<div className='flex justify-around max-lg:flex-col'>
								<div>{leftChildren}</div>
								<div className='pl-5 max-lg:pl-0'>{summaryChildren}</div>
								<div className={isOpen ? 'visible pl-5 max-lg:pl-0' : 'invisible'}>{children}</div>
							</div>
						) : (
							<div className='flex justify-around max-lg:flex-col'>
								<div>{leftChildren}</div>
								<div className='pl-5 max-lg:pl-0'>{children}</div>
							</div>
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
