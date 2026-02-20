/** @format */
import { useScrollContext } from '@/commons/context/scroll-context';
import IntroSection from './sections/intro/intro-section';
import RecordSection from './sections/record/record-section';
import ProjectDetailCardSection from './sections/project-detail-card-section/project-detail-card';
import ContactMe from './sections/contact/contact-me';
import { ReactNode, useContext, createContext } from 'react';

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
	component: ReactNode;
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
		throw new Error('useHomeDataContextProvider must be used within HomeDataContextProvider');
	}
	return context;
};

/**
 * contextProvider comp
 * @param children
 * @returns sectionInfo (컨텍스트 제공 값)
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
			component: <IntroSection />,
		},
		{
			id: 'record',
			sectionClassName: 'w-full py-25 max-sm:pb-15 max-sm:pt-25 flex flex-col gap-5 mx-auto',
			sectionRef: recordSectionRef,
			typoClassName: 'text-core-neutral-100/90',
			title: '쌓아온 경험',
			subTitle: '01.',
			component: <RecordSection />,
		},
		{
			id: 'projectDetail',
			sectionClassName: 'w-full py-25 max-sm:pt-15 max-sm:pb-25 flex flex-col gap-5 mx-auto',
			sectionRef: projectDetailSectionRef,
			typoClassName: 'text-core-neutral-100/90',
			title: '프로젝트 상세',
			subTitle: '02.',
			component: <ProjectDetailCardSection />,
		},
		{
			id: 'contactMe',
			sectionClassName: 'flex flex-col items-center py-30 mb-35',
			sectionRef: contactRef,
			typoClassName: 'text-core-green-300 pb-6',
			title: '03. 함께 다음 단계로 가볼까요?',
			subTitle: null,
			component: <ContactMe />,
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
