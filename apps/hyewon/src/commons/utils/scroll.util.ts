/** @format */

import { Dispatch, SetStateAction } from 'react';

export const onClickMoveScroll = (ref, setCurrNavId?: Dispatch<SetStateAction<number>>, currNavId?: number) => {
	ref.current?.scrollIntoView({
		// top: ref.current?.offsetTop,
		behavior: 'smooth',
	});
	if (setCurrNavId && currNavId) setCurrNavId(currNavId);
};
