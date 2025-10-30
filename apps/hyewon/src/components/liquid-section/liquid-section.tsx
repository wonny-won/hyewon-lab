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
	currNavIdx?: string;
}
const LiquidSection = ({
	type = 'txtCard',
	imgSrc,
	imgAlt,
	children,
	calssName,
	currNavIdx = '',
}: LiquidSectionProps) => {
	const defaultClass =
		'w-full overflow-hidden pointer-events-auto p-4 rounded-[30px] bg-[radial-gradient(400px_700px_at_-10%_-5%,rgba(10,180,255,0.25),transparent_40%),radial-gradient(600px_600px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_1%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_1%)] [background-position:0%_0%,left,top] [background-size:auto,1.5px_100%,100%_3px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_10px_20px_rgba(0,0,0,0.45)] backdrop-blur-[5px] backdrop-brightness-[1.1]';

	const typeClass = {
		imgCard: 'flex gap-5 items-center',
		txtCard: 'flex items-center',
		prograssCard: 'flex flex-col gap-4',
	};

	const finalClass = [defaultClass, typeClass[type], calssName || ''].join(' ');

	return (
		<div className={finalClass}>
			<div className='rounded-[30px]'>
				<div className='rounded-[30px] flex gap-5 items-center'>
					{(type === 'imgCard' || type === 'prograssCard') && (
						<Image
							src={imgSrc || ''}
							alt={imgAlt || ''}
							width={70}
							height={70}
							style={{ borderRadius: '10px' }}
						/>
					)}
					{children}
				</div>
				{type === 'prograssCard' && <PrograssUI currNavIdx={currNavIdx} />}
			</div>
		</div>
	);
};
export default LiquidSection;
