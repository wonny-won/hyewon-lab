/** @format */
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	RefObject,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';
import { useRouter } from 'next/router';
import { onClickMoveScroll } from '../utils/scroll-util';

interface ScrollContextType {
	aboutSectionRef: RefObject<HTMLElement | null>;
	recordSectionRef: RefObject<HTMLElement | null>;
	projectDetailSectionRef: RefObject<HTMLElement | null>;
	contactRef: RefObject<HTMLElement | null>;
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
	const router = useRouter();
	const [currNavId, setCurrNavId] = useState(1);
	const aboutSectionRef = useRef<HTMLElement | null>(null);
	const recordSectionRef = useRef<HTMLElement | null>(null);
	const projectDetailSectionRef = useRef<HTMLElement | null>(null);
	const contactRef = useRef<HTMLElement | null>(null);
	const intersectionStateRef = useRef<Record<number, { isIntersecting: boolean; ratio: number; top: number }>>({});

	const handleNavClick = (id: number) => {
		const refNumObj = {
			1: 'about',
			2: 'record',
			3: 'projectDetail',
			4: 'contact',
		} as const;

		const refObj = {
			[refNumObj[1]]: aboutSectionRef,
			[refNumObj[2]]: recordSectionRef,
			[refNumObj[3]]: projectDetailSectionRef,
			[refNumObj[4]]: contactRef,
		};

		if (refObj[refNumObj?.[id]]?.current) {
			onClickMoveScroll(refObj?.[refNumObj?.[id]], setCurrNavId, id);
		}
	};

	useEffect(() => {
		const sections = [
			{ id: 1, el: aboutSectionRef.current },
			{ id: 2, el: recordSectionRef.current },
			{ id: 3, el: projectDetailSectionRef.current },
			{ id: 4, el: contactRef.current },
		].filter((s): s is { id: number; el: HTMLElement } => Boolean(s.el));

		if (sections.length === 0) return;

		intersectionStateRef.current = {};

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					const currSection = sections.find((s) => s.el === entry.target);
					if (!currSection) continue;
					intersectionStateRef.current[currSection.id] = {
						isIntersecting: entry.isIntersecting,
						ratio: entry.intersectionRatio ?? 0,
						top: entry.boundingClientRect?.top ?? 0,
					};
				}

				const sectionCandidates = Object.entries(intersectionStateRef.current)
					.map(([id, v]) => ({ id: Number(id), ...v }))
					.filter((v) => v.isIntersecting);

				if (sectionCandidates.length === 0) return;

				sectionCandidates.sort((a, b) => b.ratio - a.ratio || a.top - b.top);
				const nextId = sectionCandidates[0]?.id;
				if (nextId === null) return;

				setCurrNavId((prev) => (prev === nextId ? prev : nextId));
			},
			{
				root: null,
				rootMargin: '-45% 0px -45% 0px',
				threshold: [0, 0.15, 0.3, 0.6],
			}
		);

		for (const s of sections) observer.observe(s.el);

		return () => observer.disconnect();
	}, [router.asPath]);

	return (
		<ScrollContext.Provider
			value={{
				aboutSectionRef,
				recordSectionRef,
				projectDetailSectionRef,
				contactRef,
				currNavId,
				setCurrNavId,
				handleNavClick,
			}}>
			{children}
		</ScrollContext.Provider>
	);
};
