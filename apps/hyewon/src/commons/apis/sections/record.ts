/** @format */

import { troubleShootingData } from './trouble-shooting';

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
		siteGif: [{ size: 280, url: '/honored.gif' }],
		summary:
			'아너드 자체 웹 서비스 런칭의 전 과정을 맡아 프론트엔드 E2E 단독 런칭을 수행하며 제품 이해와 기술적 시야를 확장했습니다. 특히 모노레포 구조를 직접 구축해 디자인 시스템의 재사용성을 획기적으로 높였고, 이 과정에서 발생한 다양한 배포 환경·빌드 오류 트러블슈팅을 해결하며 안정적인 배포 파이프라인을 완성했습니다. 또한 개발 프로세스를 리드하며 일정·문서화 체계를 도입해 주도적으로 개발 문화를 정립한 경험이 프로젝트의 중심 성과입니다.',
		contribute: [
			{
				id: 'honored-contribute-section',
				title: '아너드 자체 웹 서비스 프론트엔드 E2E 단독 개발 및 런칭',
				isImportant: false,
				imgUrl: null,
				children: [
					{
						id: 'honored-1-depth-2-1',
						title: '서비스 런칭 전 과정(기획·디자인·개발) 참여 및 E2E 개발 프로세스 리딩',
						imgUrl: null,
						isImportant: true,
						children: null,
					},
					{
						id: 'honored-1-depth-2-1',
						title: '신한 X 아너드 제휴 서비스 및 자체 웹 프론트엔드 E2E 단독 개발 및  런칭',
						imgUrl: null,
						isImportant: true,
						children: null,
					},
					{
						id: 'honored-1-depth-2-2',
						title: 'Turborepo + pnpm 기반 모노레포 구축',
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'honored-1-depth-3-1',
								title: 'design system과 공용 모듈 프로젝트와 서비스 프로젝트 분리로 재사용성을 향상',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
						],
					},
					{
						id: 'honored-1-depth-2-2',
						title: '단일 책임 원칙 적용',
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'honored-1-depth-3-1',
								title: '데이터 처리 로직과 UI 컴포넌트 분리 설계로 유지보수, 재사용성, 변경 범위 최소화',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
						],
					},
					{
						id: 'honored-1-depth-2-3',
						title: '개발·릴리즈·운영 문서화 체계 구축',
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'honored-1-depth-3-1',
								title: '회의록, 릴리즈 노트, QA, 온보딩·인수인계 문서 도입으로 협업 효율 개선',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'honored-1-depth-2-4',
						title: '웹 프론트엔드 파트 개발 일정 리드 및 협업 조율',
						isImportant: false,
						imgUrl: null,
						children: null,
					},
				],
			},
		],
		troubleshooting: [
			{
				id: 'honored-trouble-shooting-section',
				title: '자체 서비스 및 어드민 프론트엔드 E2E 단독 개발 및 런칭',
				imgUrl: null,
				isImportantm: false,
				children: [
					{
						id: 'honored-2-depth-2-2',
						title: '자체 웹 서비스 및 제휴 서비스 런칭을 위한 모노레포 기반 프론트엔드 아키텍처 구축',
						isImportant: false,
						imgUrl: null,
						children: null,
					},
					{
						id: 'honored-2-depth-2-4',
						title: '기존 어드민 유지보수 및 신규 기능 추가',
						isImportant: false,
						imgUrl: null,
						children: null,
					},
					{
						id: 'honored-2-depth-2-3',
						title: '기획–디자인–개발 전 과정을 아우르는 E2E 개발 프로세스 리딩',
						isImportant: false,
						imgUrl: null,
						children: null,
					},
				],
			},
		],
	},
	{
		id: 'may-i',
		blockId: 'mayI-section',
		company: '메이아이(mAy-i)',
		companyUrl: 'https://may-i.io',
		period: '2025.02 ~ 2025.04',
		position: '개발팀 | 사원',
		coreProject: 'mAsh',
		mainStack: ['TypeScript', 'React.js', 'React-query'],
		siteGif: [{ size: 280, url: '/may-i.png' }],
		summary:
			'짧은 기간이었지만 신규 기능 런칭을 중심으로 프론트엔드 설계와 성능 최적화를 경험하며 빠르게 성장했습니다. 단일책임 원칙 적용, 렌더 성능 개선, 네트워크 요청 최적화 등을 통해 서비스 안정성과 확장성을 함께 고려한 개발을 수행했습니다. 빠른 성장을 바탕으로 외부 스카웃 제안을 받아 커리어를 확장했습니다.',
		contribute: [
			{
				id: 'MayI-contribute-section',
				title: '대시보드 신규 기능 런칭을 위한 프론트엔드 설계 및 성능 최적화',
				isImportant: false,
				imgUrl: null,
				children: [
					{
						id: 'MayI-1-depth-2-1',
						title: '단일 책임 원칙 적용으로 유지보수성 향상',
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'MayI-1-depth-3-1',
								title: '데이터 처리 로직과 UI 레이어를 분리하여 유지보수성과 재사용성 향상',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
						],
					},
					{
						id: 'MayI-1-depth-2-2',
						title: '세마포어 기반 제어와 네트워크 요청 흐름 최적화로 중복·불필요 요청 최소화',
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'honored-1-depth-3-3-1',
								title: '세마포어 기반으로 동시 요청 수 5개 제한으로 API 서버 과부하 방지',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'honored-1-depth-3-3-1',
								title: '요청 조건 제어를 통해 불필요한 네트워크 요청을 제거하고, 네트워크 요청 비용을 절감',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'MayI-1-depth-2-3',
						title: '확장성을 고려한 컴포넌트 구조 설계',
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'honored-1-depth-3-3-1',
								title: '전체 데이터 삭제 프로세스 프로바이더 → 다중 삭제 프로세스로 역할 확장',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'MayI-1-depth-2-4',
						title: '렌더 성능최적화',
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'honored-1-depth-4-3-1',
								title: '렌더 조건과 visibility를 이용한 reflow / repaint 제거',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
				],
			},
		],
		troubleshooting: [
			{
				id: 'MayI-trouble-shooting-section',
				title: '대시보드 신규 기능 런칭 및 유지보수',
				isImportant: false,
				imgUrl: null,

				children: [
					{
						id: 'MayI-1-depth-2-1',
						title: '고객사 커스텀 신규 기능 런칭',
						isImportant: false,
						imgUrl: null,

						children: null,
					},
					{
						id: 'MayI-1-depth-2-2',
						title: '코호트 분석 신규 페이지 제작',
						isImportant: false,
						imgUrl: null,

						children: null,
					},
					{
						id: 'MayI-1-depth-2-3',
						title: '각종 신기능 릴리즈 및 핫픽스 배포',
						isImportant: false,
						imgUrl: null,

						children: null,
					},
				],
			},
		],
	},
	{
		id: 'teamstone',
		blockId: 'teamstone-section',
		company: '(주)팀스톤',
		companyUrl: 'https://ontune.co.kr/',
		period: '2023.08 ~ 2024.08',
		position: '개발팀 | 주임',
		coreProject: 'ontune',
		mainStack: ['TypeScript', 'Sevelt.js', 'websocket'],
		siteGif: [
			{ id: 'teamstone-img-1', size: 380, url: '/teamstone.gif', alt: '사용자 경험과 성능을 개선한 차트' },
			{ id: 'teamstone-img-2', size: 380, url: '/teamstone2.gif', alt: '프레임워크 없이 SVG로 만든 차트' },
		],
		summary:
			'해당 프로젝트를 통해 성능 측정을 하는 방법을 익히고, 어떤 지점이 퍼포먼스 저하를 초래하는지 판단할 수 있는 역량을 갖추게 되었습니다. \n 성능 측정 결과를 토대로 위젯과 주요 페이지의 퍼포먼스를 개선했습니다. \n 대표적으로 메모리 누수 제거, 불필요한 전체 리렌더 최소화 등 체감 성능을 높인 개선 사례를 만들었습니다. \n 이 성과를 기반으로 사내 최단기 주임 승진이라는 결과로 이어졌습니다.',
		contribute: [
			{
				id: 'teamstone-contribute-section',
				title: '시스템 성능 관제 솔루션 대시보드 웹버전 개발 및 런칭',
				isImportant: false,
				imgUrl: null,
				children: [
					{
						id: 'teamstone-contribute-1',
						title: 'webworker를 이용한 대시보드 위젯 데이터 연산 처리 및 메인 스레드 분리',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'teamstone-contribute-1-desc-1',
								title: '메인스레드 분리를 통해 대규모 데이터 연산 처리 환경에서 렌더 블로킹 최소화',
								imgUrl: '/webworker.webp',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'teamstone-contribute-2',
						title: 'echart와 SVG를 활용한 총 8개 차트 & 위젯 구현',
						isImportant: false,
						imgUrl: null,
						isOpen: false,
						children: [
							{
								id: 'teamstone-contribute-2-desc-1',
								title: 'echart 구현시 트리쉐이킹을 통해 번들 크기를 최소화',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'teamstone-contribute-3',
						title: '각종 글로벌 컴포넌트 및 글로벌 utils 개발',
						isImportant: false,
						imgUrl: null,
						isOpen: false,
						children: [
							{
								id: 'teamstone-contribute-3-desc-1',
								title: 'resizeObserver를 이용한 커스텀 mediaquery - widgeMediaQuery 컴포넌트',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-contribute-3-desc-2',
								title: '자유도는 높이고 데이터와 차트타입만으로도 차트가 그려지는 baseChart - ReportBaseChart 컴포넌트',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-contribute-3-desc-3',
								title: '라이브러리를 이용하지 않고 직접 구현한 바차트와 툴팁 - BarChart / BarCharatToolTip',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-contribute-3-desc-4',
								title: '차트 매트릭 데이터 일괄 스케일 처리 글로벌 함수 - chartDataScaleFunc',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'teamstone-contribute-4',
						title: '사용자 경험을 고려한 UI 의견 제시 및 반영',
						isImportant: true,
						imgUrl: null,
						isOpen: false,
						children: [
							{
								id: 'teamstone-contribute-4-desc-1',
								title: '위젯 크기가 일정 크기보다 작아질 경우 차트가 과도히 작아지는 것을 방지하기 위해 top5 정보 노출 X',
								// imgUrl: '/user-exprience.png',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'teamstone-2-depth-2-3',
						title: '6개의 설정(Config)페이지 개발, 공통 설정 UI 컴포넌트화',
						isImportant: false,
						isOpen: false,
						children: null,
					},
					// {
					// 	id: 'teamstone-2-depth-2-4',
					// 	title: '2페이지의 시스템 분석(Analysis) 페이지 개발',
					// 	isImportant: true,
					// 	children: null,
					// },
					// {
					// 	id: 'teamstone-2-depth-2-3',
					// 	title: '6개의 설정(Config)페이지 개발, 공통 설정 UI 컴포넌트화',
					// 	isImportant: true,
					// 	children: null,
					// },
					// {
					// 	id: 'teamstone-2-depth-2-4',
					// 	title: '2페이지의 시스템 분석(Analysis) 페이지 개발',
					// 	isImportant: true,
					// 	children: null,
					// },
				],
			},
		],
		troubleshooting: [
			{
				id: 'teamstone-troubleshooting-section',
				title: '퍼포먼스 최적화 및 대시보드 안정화',
				isImportant: false,
				imgUrl: null,

				children: [
					{
						id: 'teamstone-1-depth-2-1',
						title: '메모리 누수 및 CPU 사용량 개선',
						isImportant: true,
						imgUrl: null,

						children: [
							{
								id: 'teamstone-1-depth-2-1-1',
								title: 'CPU 사용률 10.9~80.4% → 3.9~5.1% 로 감소',
								isImportant: false,
								imgUrl: null,

								children: null,
							},
							{
								id: 'teamstone-1-depth-2-1-2',
								title: '메모리 누수 구간 제거 ',
								isImportant: false,
								imgUrl: null,

								children: [
									{
										id: 'teamstone-1-depth-2-1-2-1',
										title: '지속 증가(50,256K) → 안정화 후 28,416K로 개선',
										isImportant: false,
										imgUrl: null,

										children: null,
									},
								],
							},
							{
								id: 'teamstone-1-depth-2-1-3',
								title: '렌더 시 급격히 증가하던 메모리 사용량을 일정 범위 내로 고정',
								isImportant: false,
								imgUrl: null,

								children: null,
							},
						],
					},
					{
						id: 'teamstone-1-depth-2-2',
						title: 'visibility 조절로 렌더 범위 최적화',
						isImportant: false,
						imgUrl: null,

						children: [
							{
								id: 'teamstone-1-depth-2-3-1',
								title: '기존 전체 리렌더 구조 → 변경된 데이터만 다시 렌더링하도록 리렌더 범위 최소화',
								isImportant: false,
								imgUrl: null,

								children: [
									{
										id: 'teamstone-1-depth-2-3-4-1',
										title: '전체 리렌더에서 특정 컴포넌트 단위 렌더로 변경해 렌더 비용 감소',
										isImportant: false,
										imgUrl: null,

										children: null,
									},
								],
							},
							{
								id: 'teamstone-1-depth-2-3-2',
								title: '부분 리렌더로 차트 UI 깜빡임 제거',
								isImportant: false,
								imgUrl: null,

								children: null,
							},
						],
					},
					{
						id: 'teamstone-1-depth-2-3',
						title: '워커 스레드 분리로 메인 스레드 안정화 및 렌더 개선',
						isImportant: true,
						imgUrl: null,

						children: [
							{
								id: 'teamstone-1-depth-3-3-1',
								title: '데이터 가공 로직을 워커 스레드로 이전하여 메인 스레드 부하 감소',
								isImportant: false,
								imgUrl: null,

								children: null,
							},
							{
								id: 'teamstone-1-depth-3-3-2',
								title: '메인 스레드 블로킹 시간 약 30~50% 감소 추정',
								isImportant: false,
								imgUrl: null,

								children: null,
							},
							{
								id: 'teamstone-1-depth-3-3-3',
								title: '차트가 그려지지 않는 텀 및 프레임 드랍 현상 최소화',
								isImportant: false,
								imgUrl: null,

								children: null,
							},
						],
					},
					// {
					// 	id: 'teamstone-1-depth-2-4',
					// 	title: '공통 컴포넌트 및 유틸 설계',
					// 	isImportant: true,
					// 	imgUrl: null,

					// 	children: [
					// 		{
					// 			id: 'teamstone-1-depth-4-3-1',
					// 			title: '4개의 공통 차트 컴포넌트 개발',
					// 			isImportant: false,
					// 			imgUrl: null,

					// 			children: [
					// 				{
					// 					id: 'teamstone-1-depth-2-4-1',
					// 					title: 'ReportBaseChart, BarChart, BarChartTooltip, WidgetMideaQuery',
					// 					isImportant: false,
					// 					imgUrl: null,

					// 					children: null,
					// 				},
					// 				{
					// 					id: 'teamstone-1-depth-2-4-1',
					// 					title: '분석 페이지 및 대시보드 위젯에서 광범위 재사용',
					// 					isImportant: false,
					// 					imgUrl: null,

					// 					children: null,
					// 				},
					// 			],
					// 		},
					// 		{
					// 			id: 'teamstone-1-depth-4-3-2',
					// 			title: '데이터 스케일 처리 공통 유틸 함수 개발',
					// 			isImportant: false,
					// 			imgUrl: null,

					// 			children: [
					// 				{
					// 					id: 'teamstone-1-depth-2-4-1',
					// 					title: '모든 차트에서 공통 사용',
					// 					isImportant: false,
					// 					imgUrl: null,

					// 					children: null,
					// 				},
					// 				{
					// 					id: 'teamstone-1-depth-2-4-1',
					// 					title: '데이터 안정성 강화 및 수정 범위 최소화',
					// 					isImportant: false,
					// 					imgUrl: null,

					// 					children: null,
					// 				},
					// 			],
					// 		},
					// 		{
					// 			id: 'teamstone-1-depth-4-3-3',
					// 			title: '구조 통합으로 차트 신규 개발·유지보수 속도 개선',
					// 			isImportant: false,
					// 			imgUrl: null,

					// 			children: null,
					// 		},
					// 	],
					// },
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
		siteGif: [{ size: 280, url: '/dingco.gif' }],
		summary:
			'인프런과 협력한 부트캠프에서 멘토로 활동하며 수강생에게 [노션 장인] 이라는 영광의 타이틀을 받은 개발자 첫 커리어입니다. \n 커리큘럼 개편 회의에 참여해 직접 의견을 내고 개발동향을 추적하며 개발자로서 많은 성장을 일궈낸 핵심 경험이었습니다.',
		contribute: [
			{
				id: 'dingco-contribute-section',
				title: '프론트엔드 멘토 & 콘텐츠 제작',
				isImportant: true,
				children: [
					{
						id: 'dingco-1-depth-2-1',
						title: '온·오프라인 부트캠프 프론트엔드 학습자료 제작',
						isImportant: true,
						children: [
							{
								id: 'dingco-1-depth-1-3-1',
								title: '각 주제별 핵심 내용이 꼼꼼히 정리 되어있는 학습자료 제작',
								isImportant: false,
								children: null,
							},
							{
								id: 'dingco-1-depth-1-3-2',
								title: '수강생에게 노션 장인의 자료로 평가받은 학습자료 제공',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'dingco-1-depth-2-2',
						title: '프론트엔드 멘토로 수강생 학습 전 과정 지원',
						isImportant: true,
						children: [
							{
								id: 'dingco-1-depth-2-3-1',
								title: '일정 관리, 과제 및 포트폴리오 로직 리뷰, 질의응답을 통해 학습 완주율 및 이해도 향상에 기여',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'dingco-1-depth-2-3',
						title: '코드캠프 광고 및 상담 신청 페이지 프론트엔드 개발',
						isImportant: true,
						children: [
							{
								id: 'dingco-1-depth-3-3-1',
								title: 'SEO를 고려한 시멘틱 마크업 적용',
								isImportant: false,
								children: null,
							},
							{
								id: 'dingco-1-depth-3-3-2',
								title: '유지보수성을 고려한 페이지 구조 설계',
								isImportant: false,
								children: null,
							},
							{
								id: 'dingco-1-depth-3-3-3',
								title: '반응형 웹 구현',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'dingco-1-depth-2-4',
						title: '딩코 사이트 어드민 및 유저 백업 기능 개발',
						isImportant: true,
						children: [
							{
								id: 'dingco-1-depth-3-3-1',
								title: '자체 온라인 부트캠프 사이트 유저 로그인 로그 데이터 수집 기능 구현',
								isImportant: false,
								children: null,
							},
						],
					},
				],
			},
		],
	},
];
