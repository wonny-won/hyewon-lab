/** @format */
import { onClickOpenNewWindow } from '@/commons/utils/link';
import { Icons } from '@hyewon/design-system';
import { onClickCopyClipboard } from '@/commons/utils/copy-clipborad';

export const aboutMyProfile = {
	profile: '/profile.png',
	name: ' 정혜원',
	english: 'Jeong Hyewon',
	position: 'Frontend Engineer',
	summary:
		'제품의 품질을 함께 고민하고, 과정속에서 발생하는 문제를 책임감 있게 해결하며 \n 동료와 함께 성장할 수 있는 팀과 회사를 찾고 있습니다.',
	summaryList: [
		{
			prefix: '구조적 문제를 정리하고 사용자 경험을 개선하며 \n 성능 ・ 유지보수성을 함께 고려해 ',
			highlight: '제품의 품질을 향상시킵니다.',
		},

		{
			prefix: '제품의 품질을 함께 고민하고, 과정속에서 발생하는 문제를 책임감 있게 해결하며 \n 동료와 함께 성장할 수 있는 팀과 회사를 찾고 있습니다.',
			highlight: null,
		},
	],
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
