/** @format */

import { Dispatch, SetStateAction } from 'react';

export const onClickMoveScroll = (ref, setCurrNavId?: Dispatch<SetStateAction<string>>, currNavId?: string) => {
	ref.current?.scrollIntoView({
		top: ref.current?.offsetTop,
		behavior: 'smooth',
	});
	console.log(ref.current);
	if (setCurrNavId && currNavId) setCurrNavId(currNavId);
};
