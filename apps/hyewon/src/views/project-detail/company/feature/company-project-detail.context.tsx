/** @format */

import { projectDetailData } from '@/commons/apis/projects-detail/projects.detail';
import { useParams } from 'next/navigation';
import { createContext, useCallback, useContext, useState } from 'react';

/**
 * type
 */
interface CompanyProjectDatailContextType {
	clipboardTxt: string;
	prodDetaildata: any;
	loadedImages: Record<string, boolean>;
	handleImageLoad: (id: string) => void;
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
 */
const CompanyProjectDatailContextProvider = ({ children }: CompanyProjectDatailContextProviderType) => {
	const param = useParams();
	const clipboardTxt = '클릭시 상세설명 토글이 열립니다.';
	const prodDetaildata = projectDetailData.filter((i) => i.id === param?.id)?.[0] || [];
	const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

	const handleImageLoad = useCallback((id: string) => {
		setLoadedImages((prev) => ({ ...prev, [id]: true }));
	}, []);

	return (
		<CompanyProjectDatailContext.Provider value={{ clipboardTxt, prodDetaildata, loadedImages, handleImageLoad }}>
			{children}
		</CompanyProjectDatailContext.Provider>
	);
};

export default CompanyProjectDatailContextProvider;
