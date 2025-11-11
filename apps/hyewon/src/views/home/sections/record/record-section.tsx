/** @format */

import ListUI from '@/components/list-ui/list-ui';
import { recordData } from '@/commons/apis/sections/record';
import { SectionCard, ThinDiver } from '@hyewon/design-system';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import SummaryChildren from './internal-ui/summary-children';
import { useScrollContext } from '@/commons/context/scroll-context';

const RecordSection = () => {
	const { honoredSectionRef, teamstoneSectionRef, dingcoSectionRef } = useScrollContext();
	const ref = {
		honored: honoredSectionRef,
		teamstone: teamstoneSectionRef,
		dingco: dingcoSectionRef,
	};
	return (
		<>
			{recordData.map((i, idx) => {
				return (
					<SectionCard
						as='article'
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
