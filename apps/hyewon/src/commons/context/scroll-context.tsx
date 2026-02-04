/** @format */
import React, { createContext, useContext, useRef, RefObject, useState, Dispatch, SetStateAction } from 'react';
import { onClickMoveScroll } from '../utils/scroll-util';

interface ScrollContextType {
	aboutSectionRef: RefObject<HTMLDivElement | null>;
	recordSectionRef: RefObject<HTMLDivElement | null>;
	troubleshootingSectionRef: RefObject<HTMLDivElement | null>;
	contactRef: RefObject<HTMLDivElement | null>;
	honoredSectionRef: RefObject<HTMLDivElement | null>;
	mayISectionRef: RefObject<HTMLDivElement | null>;
	teamstoneSectionRef: RefObject<HTMLDivElement | null>;
	dingcoSectionRef: RefObject<HTMLDivElement | null>;
	honoredTroubleShootingSectionRef: RefObject<HTMLDivElement | null>;
	teamstoneTroubleShootingOneSectionRef: RefObject<HTMLDivElement | null>;
	teanstoneTroubleShootingTwoSectionRef: RefObject<HTMLDivElement | null>;
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
	const troubleshootingSectionRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const honoredSectionRef = useRef<HTMLDivElement>(null);
	const mayISectionRef = useRef<HTMLDivElement>(null);
	const teamstoneSectionRef = useRef<HTMLDivElement>(null);
	const dingcoSectionRef = useRef<HTMLDivElement>(null);
	const honoredTroubleShootingSectionRef = useRef<HTMLDivElement>(null);
	const teamstoneTroubleShootingOneSectionRef = useRef<HTMLDivElement>(null);
	const teanstoneTroubleShootingTwoSectionRef = useRef<HTMLDivElement>(null);

	const handleNavClick = (id: number) => {
		const refNumObj = {
			1: 'about',
			2: 'record',
			3: 'troubleshooting',
			4: 'contact',
			5: 'honored',
			6: 'teamston',
			7: 'dingco',
			8: 'honored-trouble-shooting',
			9: 'teamstone-trouble-shooting-1',
			10: 'teamstone-trouble-shooting-2',
			11: 'mayI',
		} as const;

		const refObj = {
			[refNumObj[1]]: aboutSectionRef,
			[refNumObj[2]]: recordSectionRef,
			[refNumObj[3]]: troubleshootingSectionRef,
			[refNumObj[4]]: contactRef,
			[refNumObj[5]]: honoredSectionRef,
			[refNumObj[6]]: teamstoneSectionRef,
			[refNumObj[7]]: dingcoSectionRef,
			[refNumObj[8]]: honoredTroubleShootingSectionRef,
			[refNumObj[9]]: teamstoneTroubleShootingOneSectionRef,
			[refNumObj[10]]: teanstoneTroubleShootingTwoSectionRef,
			[refNumObj[11]]: mayISectionRef,
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
				troubleshootingSectionRef,
				contactRef,
				honoredSectionRef,
				mayISectionRef,
				teamstoneSectionRef,
				dingcoSectionRef,
				honoredTroubleShootingSectionRef,
				teamstoneTroubleShootingOneSectionRef,
				teanstoneTroubleShootingTwoSectionRef,
				currNavId,
				setCurrNavId,
				handleNavClick,
			}}>
			{children}
		</ScrollContext.Provider>
	);
};
