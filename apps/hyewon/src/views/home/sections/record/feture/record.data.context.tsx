/** @format */

import { createContext, useContext, useEffect } from 'react';
import { useScrollContext } from '@/commons/context/scroll-context';
import { useRouter } from 'next/router';

/**
 * type
 */
interface Href {
	honored: 'honored-section';
	mayI: 'mayI-section';
	teamstone: 'teamstone-section';
	dingco: 'dingco-section';
}
interface RecordDataContextType {
	href: Href;
	refByHash: any;
}
interface RecordDataContextProvoderType {
	children: React.ReactNode;
}

/**
 * context
 */
const RecordDataContext = createContext<RecordDataContextType | null>(null);
export const useRecordDataContext = () => {
	const context = useContext(RecordDataContext);
	if (!context) {
		throw new Error('useRecordDataContext must be used within RecordDataContextProvider');
	}
	return context;
};

/**
 * context provider comp
 * @param children
 * @returns
 * [ 컨텍스트 제공 데이터 ]
 * href
 * refByHash
 */
const RecordDataContextProvider = ({ children }: RecordDataContextProvoderType) => {
	const router = useRouter();
	const { honoredRef, mayIRef, teamstoneRef, dingcoRef } = useScrollContext();
	const href = {
		honored: 'honored-section',
		mayI: 'mayI-section',
		teamstone: 'teamstone-section',
		dingco: 'dingco-section',
	} as const;

	const refByHash = {
		'honored-section': honoredRef,
		'mayI-section': mayIRef,
		'teamstone-section': teamstoneRef,
		'dingco-section': dingcoRef,
	} as const;

	useEffect(() => {
		const hash = window.location.hash;
		if (!hash) return;

		const id = hash.slice(1);
		const ref = refByHash[id];
		if (ref?.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, [router.asPath]);

	return <RecordDataContext.Provider value={{ href, refByHash }}>{children}</RecordDataContext.Provider>;
};
export default RecordDataContextProvider;
