/** @format */

export const recordData = [
	{
		id: 'honored',
		blockId: 'honored-section',
		company: '(주) 포페런츠',
		companyUrl: 'https://honored.shop/shinhan/',
		period: '2025.04 ~ 2025.09',
		position: '개발팀 | 사원',
		coreProject: '아너드 X 신한 걸어요',
		mainStack: ['TypeScript', 'Next.js', 'React-query'],
		siteGif: [{ size: 190, url: '/honored.gif' }],
		summary:
			'아너드 자체 웹 서비스 런칭의 전 과정을 맡아 프론트엔드 E2E 단독 런칭을 수행하며 제품 이해와 기술적 시야를 확장했습니다. 특히 모노레포 구조를 직접 구축해 디자인 시스템의 재사용성을 획기적으로 높였고, 이 과정에서 발생한 다양한 배포 환경·빌드 오류 트러블슈팅을 해결하며 안정적인 배포 파이프라인을 완성했습니다. 또한 개발 프로세스를 리드하며 일정·문서화 체계를 도입해 주도적으로 개발 문화를 정립한 경험이 프로젝트의 중심 성과입니다.',
		main: [
			{
				id: 'honored-1-depth-1-1',
				title: '아너드 자체 웹 서비스 프론트엔드 E2E 단독 개발 및 런칭',
				isImportant: false,
				children: [
					{
						id: 'honored-1-depth-2-1',
						title: '신한 X 아너드 제휴 서비스 프론트엔드 E2E 단독 개발 및  런칭',
						isImportant: true,
						children: [
							{
								id: 'honored-1-depth-3-1',
								title: '모노레포 구축',
								isImportant: true,
								children: [
									{ title: 'Turborepo + pnpm 기반 워크스페이스 설계', children: null },
									{ title: '서비스/공용 모듈을 분리해 구조화', children: null },
								],
							},
							{
								id: 'honored-1-depth-3-2',
								title: '유지보수, 재사용성을 고려한 데이터/UI 컴포넌트 분리',
								isImportant: false,
								children: null,
							},
							{
								id: 'honored-1-depth-3-3',
								title: '확장성을 고려한 컴포넌트 설계',
								isImportant: false,
								children: [
									{
										title: '전체 삭제 데이터 프로바이더 → 다중 프로세스 처리 프로바이더로 확장 ',
										chilren: null,
									},
								],
							},
						],
					},
					{
						id: 'honored-1-depth-2-2',
						title: '서비스 런칭 전 과정(기획, 디자인, 개발)에 참여해 E2E 개발 프로세싱 리딩',
						isImportant: true,
						children: null,
					},
					{
						id: 'honored-1-depth-2-3',
						title: '개발 시스템 및 문서화 도입',
						isImportant: false,
						children: [
							{
								id: 'honored-1-depth-3-1',
								title: '자체 웹 서비스 릴리즈 및 문서화 체계 구축',
								children: null,
							},
							{
								id: 'honored-1-depth-3-2',
								title: '개발팀 주요 관리 문서및 프로세스 도입으로 업무 공유를 원활히 할 수 있도록 기여',
								children: null,
							},
							{
								id: 'honored-1-depth-3-3',
								title: '회의록 / 릴리즈 문서 / 프로젝트 별 진행 상황  / QA 문서 / 온보딩 및 인수인계 문서 등',
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'honored-2-depth-1',
				title: '신규 어드민 서비스 제작',
				children: [
					{
						id: 'honored-2-depth-2-1',
						title: '실무진 니즈를 반영한 핵심 기능 기획 및 구현',
						isImportant: false,
						children: null,
					},
					{
						id: 'honored-2-depth-2-2',
						title: '기존 리소스를 활용한 MVP 성격의 빠른 제작/배포로 업무 효율성 극대화',
						isImportant: false,
						children: null,
					},
					{
						id: 'honored-2-depth-2-3',
						title: '개발 일정 리드 및 협업 조율',
						isImportant: false,
						children: null,
					},
					{
						id: 'honored-2-depth-2-4',
						title: '기존 어드민 유지보수 및 신규 기능 추가',
						isImportant: false,
						children: [
							{
								id: 'honored-2-depth-3-1',
								title: '실무진 니즈를 반영한 신규 기능 기획 및 구현',
								isImportant: false,
								children: null,
							},
							{
								id: 'honored-2-depth-3-2',
								title: '각종 핫픽스 수정',
								isImportant: false,
								children: null,
							},
						],
					},
				],
			},
		],
	},
	{
		id: 'teamstone',
		blockId: 'teamstone-section',
		company: '(주) 팀스톤',
		companyUrl: 'https://ontune.co.kr/',
		period: '2023.08 ~ 2024.08',
		position: '개발팀 | 주임',
		coreProject: 'ontune',
		mainStack: ['TypeScript', 'Sevelt.js', 'websocket'],
		siteGif: [
			{ size: 260, url: '/teamstone.gif' },
			{ size: 260, url: '/teamstone2.gif' },
		],
		summary:
			'해당 프로젝트를 통해 성능 측정을 하는 방법을 익히고, 어떤 지점이 퍼포먼스 저하를 초래하는지 판단할 수 있는 역량을 갖추게 되었습니다. \n 성능 측정 결과를 토대로 위젯과 주요 페이지의 퍼포먼스를 개선했습니다. \n 대표적으로 메모리 누수 제거, 불필요한 전체 리렌더 최소화 등 체감 성능을 높인 개선 사례를 만들었습니다. \n 이 성과를 기반으로 사내 최단기 주임 승진이라는 결과로 이어졌습니다.',
		main: [
			{
				id: 'teamstone-1-depth-1-1',
				title: '시스템 성능 분석 위젯 개발',
				isImportant: false,
				children: [
					{
						id: 'teamstone-1-depth-2-1',
						title: '총 8개의 성능 분석 위젯을 설계 및 개발, 커스텀 레이어 팝업 기능 구현',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-1-depth-2-2',
						title: '워커 스레드를 활용한 데이터 연산을 분리 및 렌더 성능 최적화',
						isImportant: true,
						children: null,
					},
					{
						id: 'teamstone-1-depth-2-3',
						title: '반응형 UI 적용 및 유지보수성 향상을 위한 구조 개선',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-1-depth-2-4',
						title: '테스트를 기반으로 사용자 친화적인 UI/UX 개선 의견 제시 및 반영',
						isImportant: true,
						children: null,
					},
					{
						id: 'teamstone-1-depth-2-5',
						title: '위젯 성능 개선',
						isImportant: true,
						children: [
							{
								id: 'teamstone-1-depth-3-1',
								title: '리플로우 최소화를 통한 렌더 최적화',
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-1-depth-3-2',
								title: 'requestAnimationFrame 적용으로 애니메이션 메모리 누수 해결',
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-1-depth-3-3',
								title: 'CSS 최적화를 통한 CPU 사용량 감소 및 개선',
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-1-depth-3-4',
								title: '워커 스레드를 활용한 렌더 최적화 진행',
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-1-depth-3-5',
								title: '차트 모듈 트리 쉐이킹으로 번들 크기 축소',
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-1-depth-3-6',
								title: '이벤트 디바운싱 적용으로 불필요한 연산 최소화',
								isImportant: false,
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'teamstone-2-depth-1-1',
				title: '시스템 성능 분석 페이지 개발',
				isImportant: false,
				children: [
					{
						id: 'teamstone-2-depth-2-1',
						title: '시스템 성능 분석 관련 총 2개 페이지 신규 개발',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-2-depth-2-2',
						title: '위젯 데이터 지표 선택을 위한 커스텀 레이어 팝업 기능 설계 및 개발',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-2-depth-2-3',
						title: '사용자 편의성을 고려한 인터랙션 설계',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-2-depth-2-4',
						title: '메트릭 데이터 스케일 처리 공통 유틸 함수 개발로 코드 일관성 확보',
						isImportant: false,
						children: null,
					},
				],
			},
			{
				id: 'teamstone-3-depth-1-1',
				title: 'Host 및 제품 튜닝 페이지 개발',
				children: [
					{
						id: 'teamstone-3-depth-2-1',
						title: 'Host 및 제품 튜닝 관련 총 6개 페이지 개발 및 기본 데이터 세팅 구현',
						isImportant: false,
						children: null,
					},
					{
						id: 'teamstone-3-depth-2-2',
						title: '불필요한 전체 리렌더 제거 및 컴포넌트 단위 렌더링으로 성능 개선에 기여',
						isImportant: true,
						children: null,
					},
				],
			},
			{
				id: 'teamstone-4-depth-1-1',
				title: '공통 컴포넌트 및 글로벌 함수 개발',
				isImportant: false,
				children: [
					{
						id: 'teamstone-4-depth-2-1',
						title: 'ReportBaseChart',
						children: [
							{
								id: 'teamstone-4-depth-3-1',
								title: '트리쉐이킹을 위해 기존 BaseChart를 활용해 개발',
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-4-depth-3-2',
								title: 'default상태를 지정해 데이터와 차트타입만 넘겨줘도 그려지도록 개발',
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-4-depth-3-3',
								title: '높은 자유도를 보장해 다양한 커스텀이 가능하도록 개발',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'teamstone-4-depth-2-2',
						title: 'WidgetMideaQuery \n 윈도우 미디어 쿼리를 이용 할 수 없는 상황에서 반응형 UI를 위해 제작하게 된 공통 컴포넌트.',
						isImportant: false,
						children: [
							{
								id: 'teamstone-4-depth-3-2',
								title: 'ResizeObserver api 이용',
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-4-depth-3-3',
								title: '스타일 자유도를 높여 언제든 모드 추가가 가능하도록 개발',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'teamstone-4-depth-2-3',
						title: ' BarChart / BarChartTooltip \n Common Grid 내부에서 사용되는 BarChart 및 BarChartTooltip.',
						isImportant: false,
						children: [
							{
								id: 'teamstone-4-depth-3-4',
								title: '라이브러리 없이 직접 구현',
								isImportant: false,
								children: null,
							},
						],
					},
				],
			},
		],
	},
	{
		id: 'dingco',
		blockId: 'dingco-section',
		company: '(주) 딩코',
		companyUrl: 'https://codebootcamp.co.kr/',
		period: '2022.01 ~ 2023.04',
		position: '개발 • 멘토팀 | 사원',
		coreProject: ' 인프런 X 코드캠프 온/오프라인 부트캠프',
		mainStack: ['TypeScript', 'Next.js', 'Graph-ql'],
		siteGif: [{ size: 260, url: '/dingco.gif' }],
		summary:
			'인프런과 협력한 부트캠프에서 멘토로 활동하며 수강생에게 [노션 장인] 이라는 영광의 타이틀을 받은 개발자 첫 커리어입니다. \n 커리큘럼 개편 회의에 참여해 직접 의견을 내고 개발동향을 추적하며 개발자로서 많은 성장을 일궈낸 핵심 경험이었습니다.',
		main: [
			{
				id: 'dingco-1-depth-1-1',
				title: '코드캠프 온/오프라인 부트캠프  학습자료 제작',
				isImportant: true,
				children: [
					{
						id: 'dingco-1-depth-2-1',
						title: '제작해온 학습자료',
						isImportant: false,
						children: [
							{
								id: 'dingco-1-depth-3-1',
								title: '각 주제별 핵심 내용이 꼼꼼히 정리 되어있는 학습자료',
								isImportant: false,
								children: null,
							},
							{
								id: 'dingco-1-depth-3-2',
								title: '수강생에게 노션 장인의 자료로 평가받은 학습자료 ',
								isImportant: true,
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'dingco-1-depth-1-2',
				title: '[ 인프런 X 코드캠프 ]  & 코드캠프 온/오프라인 부트캠프 프론트엔드 멘토',
				isImportant: true,
				children: [
					{
						id: 'dingco-1-depth-2-1',
						title: '프론트엔드 수강생 일정 관리',
						isImportant: false,
						children: null,
					},
					{
						id: 'dingco-1-depth-2-2',
						title: '멘티 과제 확인 후 로직 피드백 및 질의 응답',
						isImportant: true,
						children: [
							{
								id: 'dingco-1-depth-3-1',
								title: '과제 피드백 및 질의 응답은 게더와 구글 클래스룸에서 이루어지며,로직 피드백은 성능상이나 유지보수상 조금 더 나은 방향으로 제시',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'dingco-1-depth-2-3',
						title: '최종 포트폴리오 피드백',
						isImportant: false,
						children: null,
					},
				],
			},
			{
				id: 'dingco-1-depth-1-3',
				title: '코드캠프 광고 페이지 개발',
				isImportant: false,
				children: [
					{
						id: 'dingco-1-depth-2-1',
						title: 'SEO를 위한 시멘틱 태그 적용',
						children: null,
					},
					{
						id: 'dingco-1-depth-2-2',
						title: '반응형 웹 제작',
						children: null,
					},
				],
			},
			{
				id: 'dingco-1-depth-1-4',
				title: '코드캠프 상담신청 페이지 개발',
				isImportant: false,
				children: [
					{
						id: 'dingco-1-depth-2-1',
						title: '유지보수성을 고려한 개발',
						children: null,
					},
				],
			},
			{
				id: 'dingco-1-depth-1-5',
				title: '딩코 사이트 어드민 & 유저 백업 개발',
				isImportant: false,
				children: [
					{
						id: 'dingco-1-depth-2-1',
						title: '유저 로그인 로그 데이터 개발',
						children: null,
					},
				],
			},
		],
	},
];
