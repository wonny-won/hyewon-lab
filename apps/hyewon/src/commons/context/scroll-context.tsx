/** @format */
import React, { createContext, useContext, useRef, RefObject, useState, Dispatch, SetStateAction } from 'react';
import { onClickMoveScroll } from '../utils/scroll-util';

interface ScrollContextType {
	aboutSectionRef: RefObject<HTMLDivElement | null>;
	recordSectionRef: RefObject<HTMLDivElement | null>;
	sideProjectSectionRef: RefObject<HTMLDivElement | null>;
	currNavId: number;
	setCurrNavId: Dispatch<SetStateAction<number>>;
	handleNavClick: (id: number) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScrollContext = () => {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error('useScrollContext must be used within ScrollProvider');
	}
	return context;
};

interface ScrollProviderProps {
	children: React.ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
	const [currNavId, setCurrNavId] = useState(1);
	const aboutSectionRef = useRef<HTMLDivElement>(null);
	const recordSectionRef = useRef<HTMLDivElement>(null);
	const sideProjectSectionRef = useRef<HTMLDivElement>(null);

	const handleNavClick = (id: number) => {
		const refNumObj = {
			1: 'about',
			2: 'record',
			3: 'sideProjects',
		} as const;

		const refObj = {
			[refNumObj[1]]: aboutSectionRef,
			[refNumObj[2]]: recordSectionRef,
			[refNumObj[3]]: sideProjectSectionRef,
		};

		if (refObj[refNumObj?.[id]]?.current) {
			onClickMoveScroll(refObj?.[refNumObj?.[id]], setCurrNavId, id);
		}
	};

	return (
		<ScrollContext.Provider
			value={{
				aboutSectionRef,
				recordSectionRef,
				sideProjectSectionRef,
				currNavId,
				setCurrNavId,
				handleNavClick,
			}}>
			{children}
		</ScrollContext.Provider>
	);
};
