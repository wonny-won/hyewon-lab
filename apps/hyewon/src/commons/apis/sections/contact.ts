/** @format */

import { onClickCopyClipboard } from '@/commons/utils/copy.clipborad';
import { onClickOpenNewWindow } from '@/commons/utils/link';
import { Icons } from '@hyewon/design-system';

export const contactRoot = [
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
];

export const contactMeComment = {
	main: '연락주세요!',
	sub: '여기까지 읽어주셔서 감사합니다. \n 추가적으로 궁금하신 사항은 연락주시면 최대한 빠르게 연락드리도록 하겠습니다. ',
};
