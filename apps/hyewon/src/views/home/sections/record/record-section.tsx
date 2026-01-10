/** @format */

import ListUI from '@/components/list-ui/list-ui';
import { recordData } from '@/commons/apis/sections/record';
import { SectionCard, ThinDiver } from '@hyewon/design-system';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import SummaryChildren from './internal-ui/summary-children';
import { useScrollContext } from '@/commons/context/scroll-context';
import { useEffect } from 'react';

const RecordSection = () => {
	const { honoredSectionRef, mayISectionRef, teamstoneSectionRef, dingcoSectionRef } = useScrollContext();
	const ref = {
		honored: honoredSectionRef,
		mayI: mayISectionRef,
		teamstone: teamstoneSectionRef,
		dingco: dingcoSectionRef,
	};

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
		<ul className='w-full pl-1 pt-4 pb-10 flex gap-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
			{recordData.map((i, idx) => {
				return (
					<a key={i.id} href={`/projects/company/${i.id}`}>
						<SectionCard
							as='article'
							blockId={i.blockId}
							key={`${i.id}-${idx}`}
							ref={ref[i.id]}
							type='record'
							styleType='liquid'
							title={i.company}
							isNeedTitleIcon
							titleIconName='ArrowUpRight'
							onClickTitle={() => onClickOpenNewWindow(i.companyUrl)}
							subtitle={i.period}
							subSectionImgSrc={i.siteGif}
							titleColor='text-white'
							isNeedSummary
							summaryChildren={<SummaryChildren data={i} />}
						/>
					</a>
				);
			})}
		</ul>
	);
};
export default RecordSection;
