/** @format */
import { useScrollContext } from '@/commons/context/scroll.context';
import { useContext, createContext } from 'react';

/**
 * type
 */
interface SectionInfoType {
	id: string;
	sectionClassName: string;
	sectionRef: any;
	typoClassName: string;
	title: string;
	subTitle: string | null;
}
interface HomeDataContextType {
	sectionInfo: SectionInfoType[];
}
interface HomeDataContextProviderProps {
	children: React.ReactNode;
}

/**
 * context
 */
const HomeDataContext = createContext<HomeDataContextType | null>(null);
export const useHomeDataContext = () => {
	const context = useContext(HomeDataContext);
	if (!context) {
		throw new Error('useHomeDataContext must be used within HomeDataContextProvider');
	}
	return context;
};

/**
 * contextProvider comp
 * @param children
 * @returns
 * [컨텍스트 제공값]
 * sectionInfo
 */
export const HomeDataContextProvider = ({ children }: HomeDataContextProviderProps) => {
	const { aboutSectionRef, recordSectionRef, projectDetailSectionRef, contactRef } = useScrollContext();
	const sectionInfo = [
		{
			id: 'intro',
			sectionClassName: 'h-screen',
			sectionRef: aboutSectionRef,
			typoClassName: 'hidden',
			title: '자기 소개',
			subTitle: null,
		},
		{
			id: 'record',
			sectionClassName: 'w-full py-25 max-sm:pb-15 max-sm:pt-25 flex flex-col gap-5 mx-auto',
			sectionRef: recordSectionRef,
			typoClassName: 'text-core-neutral-100/90',
			title: '쌓아온 경험',
			subTitle: '01.',
		},
		{
			id: 'projectDetail',
			sectionClassName: 'w-full py-25 max-sm:pt-15 max-sm:pb-25 flex flex-col gap-5 mx-auto',
			sectionRef: projectDetailSectionRef,
			typoClassName: 'text-core-neutral-100/90',
			title: '프로젝트 상세',
			subTitle: '02.',
		},
		{
			id: 'contactMe',
			sectionClassName: 'flex flex-col items-center py-30 mb-35',
			sectionRef: contactRef,
			typoClassName: 'text-core-green-300 pb-6',
			title: '03. 함께 다음 단계로 가볼까요?',
			subTitle: null,
		},
	];

	return (
		<HomeDataContext.Provider
			value={{
				sectionInfo,
			}}>
			{children}
		</HomeDataContext.Provider>
	);
};

export default HomeDataContextProvider;
