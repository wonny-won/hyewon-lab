/** @format */

import { recordData, RecordDataType } from '@/commons/apis/sections/record';
import { SectionCard } from '@hyewon/design-system';
import LeftSectionChildren from './internal-ui/left-section-children';
import { useEffect } from 'react';
import RightSectionChildren from './internal-ui/right-section-children';
import { useScrollContext } from '@/commons/context/scroll-context';
import { useRouter } from 'next/router';

const RecordSection = () => {
	const router = useRouter();
	const { honoredRef, mayIRef, teamstoneRef, dingcoRef } = useScrollContext();

	const refByHash = {
		'honored-section': honoredRef,
		'mayI-section': mayIRef,
		'teamstone-section': teamstoneRef,
		'dingco-section': dingcoRef,
	} as const;

	useEffect(() => {
		const hash = window.location.hash;
		if (!hash) return;

		const id = hash.slice(1) as keyof typeof refByHash;
		const ref = refByHash[id];
		if (ref?.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, [router.asPath]);

	return (
		<ul className='pl-1 pt-4 pb-10 flex flex-col gap-10'>
			{recordData.map((i: RecordDataType, idx: number) => {
				return (
					<a key={i.id} href={`/projects/company/${i.id}`}>
						<SectionCard
							as='article'
							ref={refByHash[i.id]}
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
export default RecordSection;
