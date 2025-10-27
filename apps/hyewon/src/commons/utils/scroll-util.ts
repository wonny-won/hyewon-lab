/** @format */

export const onClickMoveScroll = (ref) => {
	ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
