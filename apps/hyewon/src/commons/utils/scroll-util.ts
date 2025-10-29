/** @format */

import { Dispatch, SetStateAction } from 'react';

export const onClickMoveScroll = (ref, setCurrNavId?: Dispatch<SetStateAction<string>>, currNavId?: string) => {
	ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	if (setCurrNavId && currNavId) setCurrNavId(currNavId);
};
