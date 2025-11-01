/** @format */

export const onClickOpenNewWindow = (url: string) => {
	if (!url) return;
	window.open(url, '_blank', 'noopener,noreferrer');
};
