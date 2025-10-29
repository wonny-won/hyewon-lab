/** @format */
import React, { createContext, useContext, useRef, RefObject, useState, Dispatch, SetStateAction } from 'react';
import { onClickMoveScroll } from '../utils/scroll-util';

interface ScrollContextType {
	aboutSectionRef: RefObject<HTMLDivElement | null>;
	recordSectionRef: RefObject<HTMLDivElement | null>;
	sideProjectSectionRef: RefObject<HTMLDivElement | null>;
	currNavId: string;
	setCurrNavId: Dispatch<SetStateAction<string>>;
	handleNavClick: (id: string) => void;
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
	const [currNavId, setCurrNavId] = useState('about');
	const aboutSectionRef = useRef<HTMLDivElement>(null);
	const recordSectionRef = useRef<HTMLDivElement>(null);
	const sideProjectSectionRef = useRef<HTMLDivElement>(null);

	const handleNavClick = (id: string) => {
		console.log(id);
		const refObj = {
			about: aboutSectionRef,
			record: recordSectionRef,
			sideProjects: sideProjectSectionRef,
		};
		if (refObj[id]?.current) {
			onClickMoveScroll(refObj[id], setCurrNavId, id);
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
