/** @format */

import { createContext, useContext, useEffect, useState } from 'react';
import { useScrollContext } from '@/commons/context/scroll-context';
import { useRouter } from 'next/router';

/**
 * type
 */
interface ProjectDetailContextType {
	refByHash: any;
	setOpenModalId: React.Dispatch<string | null>;
	onClickHandlePopup: (cardId: string) => void;
	openModalId: string | null;
}
interface ProjectDetailContextTypeProvoderType {
	children: React.ReactNode;
}

/**
 * context
 */
const ProjectDetailContext = createContext<ProjectDetailContextType | null>(null);
export const useProjectDetailContext = () => {
	const context = useContext(ProjectDetailContext);
	if (!context) {
		throw new Error('useProjectDetailContext must be used within ProjectDetailContextProvider');
	}
	return context;
};

/**
 * context provider comp
 * @param children
 * @returns
 * [ 컨텍스트 제공 데이터 ]
 * setOpenModalId
 * onClickHandlePopup
 * refByHash
 * openModalId
 */
const ProjectDetailContextProvider = ({ children }: ProjectDetailContextTypeProvoderType) => {
	const router = useRouter();
	const { teamstoneTroubleShooting1Ref, teamstoneTroubleShooting2Ref } = useScrollContext();
	const [openModalId, setOpenModalId] = useState<string | null>(null);
	const onClickHandlePopup = (cardId: string) => {
		setOpenModalId(openModalId === cardId ? null : cardId);
	};

	const refByHash = {
		'teamstone-trouble-shooting-1-section': teamstoneTroubleShooting1Ref,
		'teamstone-trouble-shooting-2-section': teamstoneTroubleShooting2Ref,
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
		<ProjectDetailContext.Provider value={{ setOpenModalId, onClickHandlePopup, refByHash, openModalId }}>
			{children}
		</ProjectDetailContext.Provider>
	);
};
export default ProjectDetailContextProvider;
