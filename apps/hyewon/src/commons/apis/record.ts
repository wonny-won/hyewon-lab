/** @format */

export const record = [
	{
		id: 'honored-1',
		company: '(주) 포페런츠',
		period: '2025.04 ~ 2025.09',
		siteGif: ['/honored.gif'],
		summary:
			'아너드 자체 웹 서비스 런칭 전 과정(기획, 디자인, 개발)에 참여해 다양한 방면으로 시야를 넓혔습니다.\n 또한 개발 프로세싱 리드하며 일정 및 문서화를 도입해 주도적인 개발 체계를 구축을 경험했습니다. \n 본 프로젝트에서의 가장 큰 강점은 E2E 단독 런칭으로 자체웹 프론트 파트는 혼자 온전히 런칭했습니다.',
		main: [
			{
				title: '아너드 자체 웹 서비스 프론트엔드 E2E 단독 개발 및 런칭',
				subtitle: [
					{
						txt: '신한 X 아너드 제휴 서비스 프론트엔드 E2E 단독 개발 및  런칭',
						children: [
							{
								childTxt: '모노레포 구축',
								desc: ['Turborepo + pnpm 기반 워크스페이스 설계', '서비스/공용 모듈을 분리해 구조화'],
							},
							{
								childTxt: '유지보수, 재사용성을 고려한 데이터/UI 컴포넌트 분리',
								desc: null,
							},
							{
								childTxt: '확장성을 고려한 컴포넌트 설계',
								desc: ['전체 삭제 데이터 프로바이더 → 다중 프로세스 처리 프로바이더로 확장 '],
							},
						],
					},
					{
						txt: '서비스 런칭 전 과정(기획, 디자인, 개발)에 참여해 E2E 개발 프로세싱 리딩',
					},
					{
						txt: '개발 시스템 및 문서화 도입',
						children: [
							{
								childTxt: '자체 웹 서비스 릴리즈 및 문서화 체계 구축',
								desc: null,
							},
							{
								childTxt:
									'개발팀 주요 관리 문서및 프로세스 도입으로 업무 공유를 원활히 할 수 있도록 기여',
								desc: null,
							},
							{
								childTxt:
									'회의록 / 릴리즈 문서 / 프로젝트 별 진행 상황  / QA 문서 / 온보딩 및 인수인계 문서 등',
								desc: null,
							},
						],
					},
				],
			},
			{
				title: '신규 어드민 서비스 제작',
				subtitle: [
					{
						txt: '실무진 니즈를 반영한 핵심 기능 기획 및 구현',
					},
					{
						txt: '기존 리소스를 활용한 MVP 성격의 빠른 제작/배포로 업무 효율성 극대화',
					},
					{
						txt: '개발 일정 리드 및 협업 조율',
					},
					{
						txt: '기존 어드민 유지보수 및 신규 기능 추가',
						children: [
							{
								childTxt: '실무진 니즈를 반영한 신규 기능 기획 및 구현',
								desc: null,
							},
							{
								childTxt: '각종 핫픽스 수정',
								desc: null,
							},
						],
					},
				],
			},
		],
	},
	{
		id: 'teamstone-1',
		company: '(주) 팀스톤',
		period: '2023.08 ~ 2024.08',
		siteGif: ['/teamstone.gif', '/teamstone2.gif'],
		summary:
			'아너드 자체 웹 서비스 런칭 전 과정(기획, 디자인, 개발)에 참여해 다양한 방면으로 시야를 넓혔습니다.\n 또한 개발 프로세싱 리드하며 일정 및 문서화를 도입해 주도적인 개발 체계를 구축을 경험했습니다. \n 본 프로젝트에서의 가장 큰 강점은 E2E 단독 런칭으로 자체웹 프론트 파트는 혼자 온전히 런칭했습니다.',
		main: [
			{
				title: '시스템 성능 분석 위젯 개발',
				subtitle: [
					{
						txt: '총 8개의 성능 분석 위젯을 설계 및 개발, 커스텀 레이어 팝업 기능 구현',
					},
					{
						txt: '워커 스레드를 활용한 데이터 연산을 분리 및 렌더 성능 최적화',
					},
					{
						txt: '반응형 UI 적용 및 유지보수성 향상을 위한 구조 개선',
					},
					{
						txt: '테스트를 기반으로 사용자 친화적인 UI/UX 개선 의견 제시 및 반영',
					},
					{
						txt: '위젯 성능 개선',
						children: [
							{
								childTxt: '리플로우 최소화를 통한 렌더 최적화',
								desc: null,
							},
							{
								childTxt: 'requestAnimationFrame 적용으로 애니메이션 메모리 누수 해결',
								desc: null,
							},
							{
								childTxt: 'CSS 최적화를 통한 CPU 사용량 감소 및 개선',
								desc: null,
							},
							{
								childTxt: '워커 스레드를 활용한 렌더 최적화 진행',
								desc: null,
							},
							{
								childTxt: '차트 모듈 트리 쉐이킹으로 번들 크기 축소',
								desc: null,
							},
							{
								childTxt: '이벤트 디바운싱 적용으로 불필요한 연산 최소화',
								desc: null,
							},
						],
					},
				],
			},
			{
				title: '시스템 성능 분석 페이지 개발',
				subtitle: [
					{
						txt: '시스템 성능 분석 관련 총 2개 페이지 신규 개발',
					},
					{
						txt: '위젯 데이터 지표 선택을 위한 커스텀 레이어 팝업 기능 설계 및 개발',
					},
					{
						txt: '사용자 편의성을 고려한 인터랙션 설계',
					},
					{
						txt: '메트릭 데이터 스케일 처리 공통 유틸 함수 개발로 코드 일관성 확보',
					},
				],
			},
			{
				title: 'Host 및 제품 튜닝 페이지 개발',
				subtitle: [
					{
						txt: 'Host 및 제품 튜닝 관련 총 6개 페이지 개발 및 기본 데이터 세팅 구현',
					},
					{
						txt: '불필요한 전체 리렌더링을 제거하고 컴포넌트 단위 렌더링으로 성능 개선',
					},
				],
			},
			{
				title: '공통 컴포넌트 및 글로벌 함수 개발',
				subtitle: [
					{
						txt: 'ReportBaseChart',
						children: [
							{
								childTxt: '트리쉐이킹을 위해 기존 BaseChart를 활용해 개발',
								desc: null,
							},
							{
								childTxt: 'default상태를 지정해 데이터와 차트타입만 넘겨줘도 그려지도록 개발',
								desc: null,
							},
							{
								childTxt: '높은 자유도를 보장해 다양한 커스텀이 가능하도록 개발',
								desc: null,
							},
						],
					},
					{
						txt: 'WidgetMideaQuery \n 윈도우 미디어 쿼리를 이용 할 수 없는 상황에서 반응형 UI를 위해 제작하게 된 공통 컴포넌트.',
						children: [
							{
								childTxt: 'ResizeObserver api 이용',
								desc: null,
							},
							{
								childTxt: '스타일 자유도를 높여 언제든 모드 추가가 가능하도록 개발',
								desc: null,
							},
						],
					},
					{
						txt: ' BarChart / BarChartTooltip \n Common Grid 내부에서 사용되는 BarChart 및 BarChartTooltip.',
						children: [
							{
								childTxt: '라이브러리 없이 직접 구현',
								desc: null,
							},
						],
					},
				],
			},
		],
	},
];
