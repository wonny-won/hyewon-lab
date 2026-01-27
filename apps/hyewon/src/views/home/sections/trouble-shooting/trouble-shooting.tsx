/** @format */

import { troubleShootingData, TroubleShootingDataType } from '@/commons/apis/sections/trouble-shooting';
import { useScrollContext } from '@/commons/context/scroll-context';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import ListUI from '@/components/list-ui/list-ui';
import { Modal, SectionCard, ThinDiver } from '@hyewon/design-system';
import SummaryChildren from './internal-ui/summary-children';
import { useState } from 'react';

const TroubleShootingSection = () => {
	const [openModalId, setOpenModalId] = useState<string | null>(null);
	const onClickHandlePopup = (cardId: string) => {
		setOpenModalId(openModalId === cardId ? null : cardId);
	};
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
				<>
					<SectionCard
						as='article'
						key={i.id}
						ref={ref[i.id]}
						type='troubleshooting'
						styleType='liquid'
						title={i.title}
						onClickTitle={() => onClickOpenNewWindow(i.detailUrl)}
						isNeedTitleIcon
						titleIconName='ArrowUpRight'
						subtitle={i.significant}
						titleColor='text-white'
						isNeedSummary
						onClick={() => onClickHandlePopup(i.id)}
						summaryChildren={<SummaryChildren data={i} />}
					/>
					{openModalId === i.id && (
						<Modal setIsOpen={() => setOpenModalId(null)}>
							<ListUI direction='virtical' listMap={i.main} />
						</Modal>
					)}
				</>
			))}
		</>
	);
};

export default TroubleShootingSection;
