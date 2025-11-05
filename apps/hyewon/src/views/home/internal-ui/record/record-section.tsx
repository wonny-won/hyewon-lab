/** @format */

import ListUI from '@/components/list-ui/list-ui';
import { record } from '@/commons/apis/sections/record';
import { SectionCard, ThinDiver } from '@hyewon/design-system';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import SummaryChildren from './internal-ui/summary-children';

const RecordSection = () => {
	return (
		<>
			{record.map((i, idx) => {
				return (
					<SectionCard
						as='article'
						key={idx}
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
