/** @format */
import React, { Fragment, useEffect, useRef, useState } from 'react';
import ListItem from './list-item';
import { ListNode } from './list-type';
import { Icons, Tooltip } from '@hyewon/design-system';
import { CopyClipboardResult } from '@/commons/utils/copy-clipborad';

interface LstProps {
	direction?: 'horizontal' | 'virtical';
	isNeedtitleIdx?: boolean;
	listMap: any;
}

const ListUI = ({ direction = 'virtical', listMap, isNeedtitleIdx }: LstProps) => {
	const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
	const [clipboardTxt, setClipboardTxt] = useState<string | null>(null);
	const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (tooltipTimerRef.current) {
				clearTimeout(tooltipTimerRef.current);
			}
		};
	}, []);

	const resolveTooltipContent = (result: unknown): string | null => {
		if (React.isValidElement(result)) {
			const content = (result.props as { content?: string })?.content;
			return typeof content === 'string' ? content : null;
		}

		if (result && typeof result === 'object' && 'successMessage' in result) {
			return (result as CopyClipboardResult & { successMessage: string }).successMessage;
		}

		if (typeof result === 'string') {
			return result;
		}

		return null;
	};

	const handleIconClick = async (node: ListNode, identifier: string) => {
		const handler = node?.onClick;
		if (!handler) return;

		try {
			const result = await handler();

			if (result) {
				setActiveTooltipId(identifier);
				setClipboardTxt(resolveTooltipContent(result) ?? 'nothing-to-clipboard');
				if (tooltipTimerRef.current) {
					clearTimeout(tooltipTimerRef.current);
				}
				tooltipTimerRef.current = setTimeout(() => {
					setActiveTooltipId(null);
					tooltipTimerRef.current = null;
				}, 1500);
			} else {
				setActiveTooltipId(null);
			}
		} catch {
			setActiveTooltipId(null);
		}
	};

	const getIdentifier = (node: ListNode, idx: number) => node?.id ?? node?.title ?? `list-item-${idx}`;

	const classStyle = {
		horizontal: 'flex gap-5 flex-wrap items-center',
		virtical: '',
	};

	return (
		<ul className={classStyle[direction]}>
			{listMap?.map((i: ListNode, idx) => {
				console.log(idx);
				return (
					<Fragment key={`${i.id}-${i.title}-${idx}`}>
						{direction === 'virtical' ? (
							<li className='flex flex-col gap-2'>
								{i?.title && (
									<ListItem
										isNeedtitleIdx={isNeedtitleIdx}
										titleIdx={!!isNeedtitleIdx && idx}
										listItem={i?.title}
										listClassName='pl-2 text-[18px] pt-5 pb-2 font-bold text-white/90 underline decoration-core-green-300/20 decoration-4'
									/>
								)}
								{Array.isArray(i.children) && (
									<Fragment key={i.id + 'child'}>
										<ListItem
											listItem={i.children}
											isNeedChevoronBullet={!!i.children}
											listClassName='pl-2 '
										/>
									</Fragment>
								)}
							</li>
						) : (
							<li
								onClickCapture={!!i.id ? i.onClick : () => handleIconClick(i, getIdentifier(i, idx))}
								className='flex items-center justify-center w-[45px] h-[45px] rounded-[25px] bg-core-neutral-50/20 hover:cursor-pointer hover:bg-core-green-300/30'>
								{activeTooltipId === getIdentifier(i, idx) && !i.id ? (
									<>
										<Tooltip content={clipboardTxt} position='top' bgColor='bg-core-green-300'>
											<Icons iconName='CircleCheckIcons' size='14' color='green' />
										</Tooltip>
										<button className='hover:cursor-pointer'>{i?.icon}</button>
									</>
								) : (
									<a>{i?.icon}</a>
								)}
							</li>
						)}
					</Fragment>
				);
			})}
		</ul>
	);
};

export default ListUI;
