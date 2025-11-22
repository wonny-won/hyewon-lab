/** @format */
import { onClickOpenNewWindow } from '@/commons/utils/link';
import { Icons } from '@hyewon/design-system';
import { onClickCopyClipboard } from '@/commons/utils/copy-clipborad';

export const aboutMyProfile = {
	profile: '/profile.jpeg',
	name: ' 정혜원, ',
	english: 'Jeong Hyewon',
	position: 'Frontend Engineer.',
	summary: '작은곳에서 시작되는 성능 최적화, 디자인 디테일, E2E 런칭 경험을 함께 공유합니다.',
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
			onClick: () => onClickCopyClipboard('wonny-won@gmail.com', '이메일 복사 완료', '이메일 복사 실패'),
		},
		{
			icon: Icons({ iconName: 'PhoneIcon', size: '24' }),
			onClick: () => onClickCopyClipboard('010-1234-5678', '전화번호 복사 완료', '전화번호 복사 실패'),
		},
		{
			icon: Icons({ iconName: 'BlogIcon', size: '24' }),
			onClick: () => onClickOpenNewWindow('https://dev-raccoon-man.tistory.com/'),
		},
	],
};
