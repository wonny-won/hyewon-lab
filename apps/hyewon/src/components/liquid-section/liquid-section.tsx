/** @format */

import Image from 'next/image';
import { ReactNode } from 'react';
import PrograssUI from './internal-ui/prograss/prograss-ui';

interface LiquidSectionProps {
	children: ReactNode;
	imgSrc?: string;
	imgAlt?: string;
	type?: 'imgCard' | 'txtCard' | 'prograssCard';
	calssName?: string;
}
const LiquidSection = ({ type = 'txtCard', imgSrc, imgAlt, children, calssName }: LiquidSectionProps) => {
	const defaultClass =
		'p-8 text-white rounded-[30px] border border-solid border-white/20 shadow-[0_5px_9px_rgba(0,0,0,0.35),0_-10px_36px_inset_rgba(0,0,0,0.35),0_-1px_5px_2px_inset_rgba(255,255,255,0.24)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[3px] backdrop-brightness-[1.5] backdrop-saturate-110';

	const typeClass = {
		imgCard: 'flex gap-5 items-center',
		txtCard: '',
		prograssCard: 'flex flex-col gap-4',
	};

	const finalClass = [defaultClass, typeClass[type], calssName || ''].join(' ');

	return (
		<div className={finalClass}>
			{(type === 'imgCard' || type === 'prograssCard') && (
				<Image
					src={imgSrc || ''}
					alt={imgAlt || ''}
					width={100}
					height={100}
					style={{ borderRadius: '10px' }}
				/>
			)}
			{children}
			{type === 'prograssCard' && <PrograssUI currNavIdx={1} />}
		</div>
	);
};
export default LiquidSection;
