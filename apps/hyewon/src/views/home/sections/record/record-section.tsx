/** @format */

import ListUI from '@/components/list-ui/list-ui';
import { recordData } from '@/commons/apis/sections/record';
import { SectionCard, ThinDiver } from '@hyewon/design-system';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import SummaryChildren from './internal-ui/summary-children';
import { useScrollContext } from '@/commons/context/scroll-context';
import { useEffect } from 'react';

const RecordSection = () => {
	const { honoredSectionRef, teamstoneSectionRef, dingcoSectionRef } = useScrollContext();
	const ref = {
		honored: honoredSectionRef,
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
		<>
			{recordData.map((i, idx) => {
				return (
					<SectionCard
						as='article'
						blockId={i.blockId}
						key={idx}
						ref={ref[i.id]}
						type='record'
						styleType='liquid'
						title={i.company}
						isNeedTitleIcon
						titleIconName='ArrowUpRight'
						onClickTitle={() => onClickOpenNewWindow(i.companyUrl)}
						subtitle={i.period}
						subSectionImgSrc={i.siteGif}
						isNeedMoreBtn
						titleColor='text-white'
						isNeedSummary
						summaryChildren={<SummaryChildren data={i} />}>
						<ThinDiver />
						<ListUI direction='virtical' listMap={i.main} />
					</SectionCard>
				);
			})}
		</>
	);
};
export default RecordSection;
