/** @format */

import { projectDetailData } from '@/commons/apis/projects-detail/projects.detail';
import { useParams } from 'next/navigation';
import { createContext, useCallback, useContext, useState } from 'react';

/**
 * type
 */
interface SectionInfoType {
	id: string;
	sectionClassName: string;
	divClassName: string;
	typoClassName: string;
	isNeedToolTip: boolean;
	title: string;
	subTtitle: string;
	data: any;
}
interface CompanyProjectDatailContextType {
	clipboardTxt: string;
	prodDetaildata: any;
	loadedImages: Record<string, boolean>;
	handleImageLoad: (id: string) => void;
	sectionInfo: SectionInfoType[];
}
interface CompanyProjectDatailContextProviderType {
	children: React.ReactNode;
}

/**
 * context
 */
const CompanyProjectDatailContext = createContext<CompanyProjectDatailContextType | null>(null);
export const useCompanyProjectDatailContext = () => {
	const context = useContext(CompanyProjectDatailContext);
	if (!context) {
		throw new Error('useCompanyProjectDatailContext must be used within CompanyProjectDatailContextProvider');
	}

	return context;
};

/**
 *
 * @param children
 * @returns
 * [ 컨텍스트 제공 데이터 ]
 * clipboardTxt
 * prodDetaildata
 * loadedImages
 * handleImageLoad
 * sectionInfo
 */
const CompanyProjectDatailContextProvider = ({ children }: CompanyProjectDatailContextProviderType) => {
	const param = useParams();
	const clipboardTxt = '토글을 열고 닫을 수 있습니다';
	const prodDetaildata = projectDetailData.filter((i) => i.id === param?.id)?.[0] || [];
	const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

	const handleImageLoad = useCallback((id: string) => {
		setLoadedImages((prev) => ({ ...prev, [id]: true }));
	}, []);

	const sectionInfo = [
		{
			id: 'role-section',
			sectionClassName: 'w-screen bg-slate-900/35 relative left-1/2 -translate-x-1/2',
			divClassName: 'px-6 lg:px-60 max-sm:px-5 py-25 max-sm:pb-18 max-sm:pt-25',
			typoClassName: 'pb-3',
			isNeedToolTip: true,
			title: '기여 및 역할',
			subTtitle: '01.',
			data: prodDetaildata.contribute,
		},
		{
			id: 'dev-point-section',
			sectionClassName: 'w-screen bg-slate-800/40 relative left-1/2 -translate-x-1/2',
			divClassName: 'px-6 lg:px-60 max-sm:px-5 py-25 max-sm:py-15',
			typoClassName: '',
			isNeedToolTip: false,
			title: 'Develop Point',
			subTtitle: '02.',
			data: prodDetaildata.commonDev,
		},
	];

	return (
		<CompanyProjectDatailContext.Provider
			value={{ clipboardTxt, prodDetaildata, loadedImages, sectionInfo, handleImageLoad }}>
			{children}
		</CompanyProjectDatailContext.Provider>
	);
};

export default CompanyProjectDatailContextProvider;
