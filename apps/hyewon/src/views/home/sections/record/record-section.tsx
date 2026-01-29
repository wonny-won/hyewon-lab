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

	const onClickHandleLink = (blockId) => {
		const url = `${window.location.origin}${window.location.pathname}#${blockId}`;
		navigator.clipboard.writeText(url);
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
		<ul className='pl-1 pt-4 pb-10 flex flex-col gap-10'>
			{recordData.map((i, idx) => {
				return (
					<a key={i.id} href={`/projects/company/${i.id}`}>
						<SectionCard
							as='article'
							key={`${i.id}-${idx}`}
							ref={ref[i.id]}
							type='record'
							styleType='liquid'
							title={i.company}
							isNeedTitleIcon
							// titleIconName='ArrowUpRight'
							// onClickTitle={() => onClickOpenNewWindow(i.companyUrl)}
							subtitle={i.period}
							subSectionImgSrc={i.thumbnail}
							titleColor='text-white'
							isNeedSummary
							onClick={() => onClickHandleLink(i.blockId)}
							summaryChildren={<SummaryChildren data={i} />}
						/>
					</a>
				);
			})}
		</ul>
	);
};
export default RecordSection;
