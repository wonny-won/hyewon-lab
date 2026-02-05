/** @format */

import { troubleShootingData, TroubleShootingDataType } from '@/commons/apis/sections/trouble-shooting';
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
			{troubleShootingData.map((i: TroubleShootingDataType) => (
				<li key={i.id} className='hover:cursor-pointer flex-1 min-w-[260px] max-w-[500px] flex'>
					<SectionCard
						as='article'
						type='troubleshooting'
						styleType='liquid'
						title={i.title}
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
				</li>
			))}
		</ul>
	);
};

export default ProjectDetailCardSection;
