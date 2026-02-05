/** @format */

import { recordData } from '@/commons/apis/sections/record';
import { SectionCard } from '@hyewon/design-system';
import LeftSectionChildren from './internal-ui/left-section-children';
import { useEffect } from 'react';
import RightSectionChildren from './internal-ui/right-section-children';

const RecordSection = () => {
	useEffect(() => {
		const hash = window.location.hash;
		if (!hash) return;

		const id = hash.slice(1);
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, []);

	return (
		<ul className='pl-1 pt-4 pb-10 flex flex-col gap-10'>
			{recordData.map((i, idx) => {
				return (
					<a key={i.id} href={`/projects/company/${i.id}`}>
						<SectionCard
							as='article'
							key={`${i.id}-${idx}`}
							type='record'
							styleType='liquid'
							title={i.company}
							isNeedTitleIcon
							titleColor='text-white'
							isNeedSummary
							summaryChildren={<RightSectionChildren data={i} />}
							leftChildren={<LeftSectionChildren data={i} />}
						/>
					</a>
				);
			})}
		</ul>
	);
};
export default RecordSection;
