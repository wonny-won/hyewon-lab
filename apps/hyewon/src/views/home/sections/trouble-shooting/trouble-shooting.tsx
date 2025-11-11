/** @format */

import { troubleShootingData, TroubleShootingDataType } from '@/commons/apis/sections/trouble-shooting';
import { useScrollContext } from '@/commons/context/scroll-context';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import ListUI from '@/components/list-ui/list-ui';
import { SectionCard, ThinDiver } from '@hyewon/design-system';
import SummaryChildren from './internal-ui/summary-children';

const TroubleShootingSection = () => {
	const {
		honoredTroubleShootingSectionRef,
		teamstoneTroubleShootingOneSectionRef,
		teanstoneTroubleShootingTwoSectionRef,
	} = useScrollContext();

	const ref = {
		'honored-trouble-shooting': honoredTroubleShootingSectionRef,
		'teamstone-trouble-shooting-1': teamstoneTroubleShootingOneSectionRef,
		'teamstone-trouble-shooting-2': teanstoneTroubleShootingTwoSectionRef,
	};

	return (
		<>
			{troubleShootingData.map((i: TroubleShootingDataType) => (
				<SectionCard
					as='article'
					key={i.id}
					ref={ref[i.id]}
					type='record'
					styleType='liquid'
					title={i.title}
					onClickTitle={() => onClickOpenNewWindow(i.detailUrl)}
					isNeedTitleIcon
					titleIconName='ArrowUpRight'
					subtitle={i.significant}
					isNeedMoreBtn
					titleColor='text-white'
					isNeedSummary
					summaryChildren={<SummaryChildren data={i} />}>
					<ThinDiver />
					<ListUI direction='virtical' listMap={i.main} />
				</SectionCard>
			))}
		</>
	);
};

export default TroubleShootingSection;
