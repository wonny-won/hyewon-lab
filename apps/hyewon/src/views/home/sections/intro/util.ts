/** @format */

export const onClickDownloadResume = () => {
	const link = document.createElement('a');
	link.href = '/hyewon-jeong-fe-resume.pdf';
	link.download = '정혜원_프론트엔드_이력서.pdf';
	link.click();
};
