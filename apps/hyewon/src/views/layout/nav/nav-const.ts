/** @format */
export const navListType = {
	about: { id: 1, name: '자기소개' },
	record: { id: 2, name: '경험 • 이력 소개' },
	sideProjects: { id: 3, name: '기록의 조각들' },
} as const;

export const navList = [
	{
		id: 'about',
		idx: 1,
		name: '자기소개',
	},
	{
		id: 'record',
		idx: 2,
		name: '경험 • 이력 소개',
	},
	{
		id: 'sideProjects',
		idx: 3,
		name: '기록의 조각',
	},
];
