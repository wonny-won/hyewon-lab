/** @format */
export interface RecordDataType {
	id: string;
	company: string;
	companyExplain: string;
	period: string;
	position: string;
	mainStack: string[];
	thumbnail?: { size: number; url: string }[] | null;
	summary: { id: string; title: string | null; children: any; isImportant: boolean }[];
}
[];

export const recordData = [
	{
		id: 'honored-section',
		company: '(주) 포페런츠',
		companyExplain: '액티브 시니어를 위한 여행 이커머스 서비스',
		period: '2025.04 ⏤ 2025.09',
		position: '개발팀 | 사원',
		mainStack: ['TypeScript', 'Next.js', 'React-query', 'emotion', 'tailwind'],
		thumbnail: [{ size: 480, url: '/honored.png' }],
		summary: [
			{
				id: 'honored-summary-section',
				title: null,
				isImportant: false,
				children: [
					{
						id: 'honored-summary-section-1',
						title: '아너드 자체 웹 및 신한 제휴 서비스 프론트 파트 E2E 단독 설계 및 개발 / 운영',
						isImportant: false,
						children: null,
					},
					{
						id: 'honored-summary-section-2',
						title: '자체웹 성능 최적화 및 검색엔진 최적화',
						isImportant: false,
						children: null,
					},
					{
						id: 'honored-summary-section-3',
						title: '신규 어드민 런칭 및 구 어드민 유지보수',
						isImportant: false,
						children: null,
					},
					{
						id: 'honored-summary-section-3',
						title: '웹 프론트엔드 파트 리드로 개발 타임라인 관리 및 배포 주기 관리',
						isImportant: false,
						children: null,
					},
					{
						id: 'honored-summary-section-3',
						title: '문서화 도입 및 개발 시스템 구축으로 개발 환경 개선 기여',
						isImportant: false,
						children: null,
					},
				],
			},
		],
	},
	{
		id: 'mayI-section',
		company: '메이아이(mAy-i)',
		companyExplain: '대기업 고객사(LG전자, 현대백화점) 방문객 데이터 분석 서비스',
		period: '2025.02 ⏤ 2025.04',
		position: '개발팀 | 사원',
		mainStack: ['TypeScript', 'React.js', 'React-query', 'styled-component'],
		thumbnail: [{ size: 480, url: '/may-i.png' }],
		summary: [
			{
				id: 'mayI-summary-section',
				title: null,
				isImportant: false,
				children: [
					{
						id: 'mayI-summary-section',
						title: 'Mash 대시보드 신규 기능 및 코호트 분석 페이지 개발 및 핫픽스 배포',
						isImportant: false,
						children: null,
					},
					{
						id: 'mayI-summary-section',
						title: '확장성을 고려한 프로바이더 설계',
						isImportant: false,
						children: null,
					},
					{
						id: 'mayI-summary-section',
						title: '위젯 및 대시보드 성능 최적화',
						isImportant: false,
						children: null,
					},
					{
						id: 'mayI-summary-section',
						title: '스카웃 제의로 이직',
						isImportant: false,
						children: null,
					},
				],
			},
		],
	},
	{
		id: 'teamstone-section',
		company: '(주) 팀스톤',
		companyExplain: '삼성, 메이저 은행권에서 사용하는 시스템 모니터링 서비스',
		period: '2023 ⏤ 2024',
		position: '개발팀 | 주임',
		mainStack: ['TypeScript', 'Sevelt.js', 'websocket', 'tailwind', 'tanstack'],
		thumbnail: [{ id: 'teamstone-img-1', size: 480, url: '/teamstone3.png', alt: '팀스톤 커버' }],
		summary: [
			{
				id: 'teamstone-summary-section',
				title: null,
				isImportant: false,
				children: [
					{
						id: 'teamstone-summary-section',
						title: 'ontune 시스템 모니터링 대시보드 v5 버전 개발 및 런칭',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-summary-section',
						title: '위젯 및 페이지 성능 측정 결과를 토대로 위젯과 주요 페이지의 퍼포먼스를 개선. ',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-summary-section',
						title: '테스트를 기반으로 사용자 친화적인 UI/UX 개선 의견 제시 및 반영',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-summary-section',
						title: '이 성과를 기반으로 사내 최단기 주임 승진',
						isImportant: false,
						children: null,
					},
				],
			},
		],
	},
	{
		id: 'dingco-section',
		company: '(주) 딩코',
		companyExplain: '인프런에도 올라온 온/오프라인 부트캠프',
		period: '2022 ⏤ 2023',
		position: '개발 • 멘토팀 | 사원',
		mainStack: ['TypeScript', 'Next.js', 'Graph-ql', 'emotion', 'recoil'],
		thumbnail: [{ size: 480, url: '/dingco.png' }],
		summary: [
			{
				id: 'dingco-summary-section',
				title: null,
				isImportant: false,
				children: [
					{
						id: 'dingco-summary-section',
						title: '코드캠프 온/오프라인 부트캠프  학습자료 제작  파트 리드 ',
						isImportant: false,
						children: null,
					},
					{
						id: 'dingco-summary-section',
						title: '[ 인프런 X 코드캠프 ]  & 코드캠프 온/오프라인 부트캠프 프론트엔드 멘토',
						isImportant: false,
						children: null,
					},
					{
						id: 'dingco-summary-section',
						title: '회사 홈페이지 랜딩페이지 및 부트캠프 사이트 개발 ',
						isImportant: false,
						children: null,
					},
				],
			},
		],
	},
];
