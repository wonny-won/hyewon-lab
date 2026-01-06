/** @format */
import { onClickOpenNewWindow } from '@/commons/utils/link';
import { Icons } from '@hyewon/design-system';
import { onClickCopyClipboard } from '@/commons/utils/copy-clipborad';

export const aboutMyProfile = {
	profile: '/profile.png',
	name: ' 정혜원, ',
	english: 'Jeong Hyewon',
	position: 'Frontend Engineer.',
	summary:
		'구조적 문제를 정리하고 사용자 경험을 개선하며 성능 ・ 유지보수성을 함께 고려해 서비스 품질을 끌어올려온 개발자 입니다.',
	skillTag: [
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'React.js',
		'Next.js',
		'Sevelt.js',
		'apollo-client',
		'axios',
		'websocket',
		'webworker',
		'React-query',
		'Context-api',
		'recoil',
		'zustand',
		'emotion',
		'styled-component',
		'tailwind',
		'figma',
		'git',
	],
	contact: [
		{
			icon: Icons({ iconName: 'GithubIcon', size: '24' }),
			onClick: () => onClickOpenNewWindow('https://github.com/wonny-won'),
		},
		{
			icon: Icons({ iconName: 'MailIcon', size: '24' }),
			onClick: () => onClickCopyClipboard('jaake0704@gmail.com', '이메일 복사 완료', '이메일 복사 실패'),
		},
		{
			icon: Icons({ iconName: 'PhoneIcon', size: '24' }),
			onClick: () => onClickCopyClipboard('010-8954-4608', '전화번호 복사 완료', '전화번호 복사 실패'),
		},
		{
			icon: Icons({ iconName: 'BlogIcon', size: '24' }),
			onClick: () => onClickOpenNewWindow('https://dev-raccoon-man.tistory.com/'),
		},
	],
	export: [
		{
			id: 'resume-file-down',
			icon: Icons({ iconName: 'FileDownIcon', size: '24' }),
			onClick: () => {
				const link = document.createElement('a');
				link.href = '/hyewon-jeong-fe-resume.pdf';
				link.download = '정혜원_프론트엔드_이력서.pdf';
				link.click();
			},
		},
	],
};
