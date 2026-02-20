/** @format */

import { recordData, RecordDataType } from '@/commons/apis/sections/record';
import { SectionCard } from '@hyewon/design-system';
import LeftSectionChildren from './internal-ui/left-section-children';
import RightSectionChildren from './internal-ui/right-section-children';
import RecordDataContextProvider, { useRecordDataContext } from './record.data.context';

const RecordSectionContent = () => {
	const { refByHash, href } = useRecordDataContext();

	return (
		<ul className='pl-1 pt-4 pb-10 flex flex-col gap-10'>
			{recordData.map((i: RecordDataType, idx: number) => {
				return (
					<a key={i.id} href={`/projects/company/${i.id}`}>
						<SectionCard
							as='article'
							ref={refByHash[href[i.id]]}
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

const RecordSection = () => {
	return (
		<RecordDataContextProvider>
			<RecordSectionContent />
		</RecordDataContextProvider>
	);
};
export default RecordSection;
