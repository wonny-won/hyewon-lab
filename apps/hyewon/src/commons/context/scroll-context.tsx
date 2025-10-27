/** @format */
import React, { createContext, useContext, useRef, RefObject } from 'react';

interface ScrollContextType {
	aboutSectionRef: RefObject<HTMLDivElement>;
	recordSectionRef: RefObject<HTMLDivElement>;
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
	const aboutSectionRef = useRef<HTMLDivElement>(null);
	const recordSectionRef = useRef<HTMLDivElement>(null);

	return <ScrollContext.Provider value={{ aboutSectionRef, recordSectionRef }}>{children}</ScrollContext.Provider>;
};
