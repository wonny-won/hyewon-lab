/** @format */

import { archiveProjectDetailData, ArchiveProjectDetailDataType } from '@/commons/apis/sections/archive.project.detail';
import ListUI from '@/components/list-ui/list-ui';
import { Modal, SectionCard } from '@hyewon/design-system';
import SummaryChildren from './internal-ui/summary-children';
import { useState } from 'react';

const ProjectDetailCardSection = () => {
	const [openModalId, setOpenModalId] = useState<string | null>(null);
	const onClickHandlePopup = (cardId: string) => {
		setOpenModalId(openModalId === cardId ? null : cardId);
	};

	return (
		<ul className='flex flex-row flex-wrap gap-3 justify-center items-stretch'>
			{archiveProjectDetailData.map((i: ArchiveProjectDetailDataType) => (
				<li key={i.id} className='hover:cursor-pointer flex-1 min-w-[260px] max-w-[500px] flex'>
					<SectionCard
						as='article'
						type='troubleshooting'
						styleType='liquid'
						title={i.title}
						titleColor='text-white'
						isNeedTitleIcon
						titleIconName={i.division}
						isNeedSummary
						onClick={() => onClickHandlePopup(i.id)}
						leftChildren={<SummaryChildren data={i} />}
					/>
					{openModalId === i.id && (
						<Modal
							title={i.title}
							iconName={i.division}
							iconColor='#5eead4'
							setIsOpen={() => setOpenModalId(null)}>
							<ListUI isNeedtitleIdx={true} direction='virtical' listMap={i.main} />
						</Modal>
					)}
				</li>
			))}
		</ul>
	);
};

export default ProjectDetailCardSection;
