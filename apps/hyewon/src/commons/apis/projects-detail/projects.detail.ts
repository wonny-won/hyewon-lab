/** @format */

export const projectDetailData = [
	{
		id: 'honored',
		company: '(주) 포페런츠',
		companyUrl: 'https://honored.shop/shinhan/',
		period: '2025.04 - 2025.09',
		position: '개발팀 | 사원',
		coreProject: '아너드 X 신한 걸어요 자체 웹 런칭 및 운영',
		mainStack: ['TypeScript', 'Next.js', 'React-query'],
		siteGif: [{ size: 420, url: '/honored.gif' }],
		contribute: [
			{
				id: 'honored-contribute-section',
				title: null,
				isImportant: false,
				imgUrl: null,
				children: [
					{
						id: 'honored-1-depth-2-1',
						title: '아너드 자체 웹 서비스 프론트 파트 E2E 단독 설계 및 개발 / 운영',
						imgUrl: null,
						isImportant: true,
						isOpen: false,
						children: [
							{
								id: '0',
								title: 'monorepo + pnpm 기반 워크스페이스 설계 및 구축',
								imgUrl: null,
								isImportant: true,
								children: [
									{
										id: '1',
										title: '서비스 확장을 고려한 아키텍처 설계',
										imgUrl: null,
										isImportant: false,
										children: [
											{
												id: '2',
												title: 'application + package(designsystem + common)',
												imgUrl: null,
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
						id: 'honored-1-depth-2-1',
						title: '아너드 X 신한 걸어요 제휴 페이지 기획 및 런칭 / 운영',
						imgUrl: null,
						isImportant: true,
						isOpen: false,
						children: [
							{
								id: '2',
								title: '자체 웹에서 유입 경로 데이터를 이용해 일반 웹과는 완벽히 분리된 상품 운영이 가능하도록 데이터 아키텍쳐 설계',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'honored-1-depth-2-2',
						title: '자체웹 성능 최적화 및 검색엔진 최적화',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'honored-1-depth-3-1',
								title: '단일 책임 원리 적용으로 데이터/UI 컴포넌트 분리',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
							{
								id: 'honored-1-depth-3-1',
								title: 'lazyloading을 이용한 네트워크, 렌더 최적화',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
							{
								id: 'honored-1-depth-3-1',
								title: 'SEO를 위한 시멘틱 HTML 구조 설계 및 meta / OG 태그 적용',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
							{
								id: 'honored-1-depth-3-1',
								title: 'memoization hooks를 이용한 렌더 최적화',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
						],
					},
					{
						id: 'honored-1-depth-2-2',
						title: '신규 어드민 런칭 및 구 어드민 유지보수',
						isImportant: true,
						imgUrl: null,
						isOpen: false,
						children: [
							{
								id: 'honored-1-depth-3-1',
								title: 'monorepo의 디자인 시스템 재이용',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
						],
					},
					{
						id: 'honored-1-depth-2-3',
						title: '배포 주기 & 릴리즈 문서 & 태스크 티켓등 개발 시스템 및 개발 환경 개선',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'honored-1-depth-3-1',
								title: '서비스 품질 관리를 위한 배포주기 관리',
								imgUrl: null,
								isImportant: false,
								children: [
									{
										id: 'honored-1-depth-3-1',
										title: '릴리즈 문서를 통한 배포 내용 관리',
										imgUrl: null,
										isImportant: false,
										children: null,
									},
									{
										id: 'honored-1-depth-3-1',
										title: '대규모 업데이트 날은 QA문서 함께 관리',
										imgUrl: null,
										isImportant: false,
										children: null,
									},
								],
							},
							{
								id: 'honored-1-depth-3-1',
								title: '추후 신규 입사자를 위한 인수인계 문서, 코드 베이스 가이드 문서 제작',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'honored-1-depth-3-1',
								title: '팀간의 업무추적을 위한 태스크 티켓 운영',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'honored-1-depth-3-1',
								title: '타팀과의 업무 공유, 지난 회의 복기를 위한 회의록 운영',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'honored-1-depth-2-4',
						title: '웹 프론트엔드 파트 리드로 개발 타임라인 관리',
						isImportant: true,
						imgUrl: null,
						children: null,
					},
				],
			},
		],
		commonDev: [
			{
				id: 'honored-common-dev-section',
				title: '서비스 품질 향상 및 안정화 주도',
				imgUrl: null,
				isImportantm: true,
				children: [
					{
						id: 'honored-2-depth-2-2',
						title: '정기 스터디를 통한 품질 향상 기여',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'honored-1-depth-2-4',
								title: '제품에 필요한 지식을 중심으로 정기 스터디를 구성하고 주도했으며, 학습 내용을 정리한 문서를 제작해 팀 내에 공유했습니다. \n\u00A0\u00A0 또한, 스터디 결과를 실제 업무에 적용해 제품 품질과 팀의 기술 역량 성장을 함께 이루었습니다',
								isImportant: true,
								imgUrl: null,
								isOpen: true,
								children: [
									{
										id: 'honored-1-depth-2-4',
										title: '실제 업무에 적용한 스터디 결과들',
										isImportant: true,
										imgUrl: null,
										children: [
											{
												id: 'honored-1-depth-2-4',
												title: '검색엔진 최적화 (SEO)',
												isImportant: true,
												imgUrl: null,
												children: null,
											},
											{
												id: 'honored-1-depth-2-4',
												title: '모노레포와 모노레포 아키텍쳐 설계',
												isImportant: true,
												imgUrl: null,
												children: [
													{
														id: 'honored-1-depth-2-4',
														title: ' [ ⚠️ 참고 ] 해당 스터디는 혼자 공부해 발표하는 형식으로 진행했습니다.',
														isImportant: false,
														imgUrl: null,
														children: null,
													},
												],
											},
											{
												id: 'honored-1-depth-2-4',
												title: '브랜치 전략',
												isImportant: false,
												imgUrl: null,
												children: null,
											},
										],
									},
								],
							},
							{
								id: 'honored-1-depth-2-4',
								title: '[ 📸 정기 스터디 갤러리 ]',
								isImportant: true,
								imgUrl: [
									{ id: 'seo-doc-1', url: '/seo-doc.png', direction: 'row' },
									{ id: 'mono-repo-1', url: '/mono-repo.png', direction: 'row' },
									{ id: 'brnach-1', url: '/branch.png', direction: 'row' },
								],
								children: null,
							},
						],
					},
					{
						id: 'honored-2-depth-2-2',
						title: '버그 히스토리 추적과 배포 관리 문서화를 통한 품질 관리',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'honored-1-depth-2-4',
								title: '반복적으로 발생하는 버그의 원인과 히스토리를 체계적으로 문서화해 재발을 방지하고, 제품의 품질과 기능 안정성을 강화했습니다.',
								isImportant: true,
								imgUrl: null,
								children: [
									{
										id: 'honored-1-depth-2-4',
										title: '[ ⚠️ 참고 ] 2번이상 반복 될 경우 발생 빈도가 높다고 판단했습니다.',
										isImportant: false,
										imgUrl: null,
										children: null,
									},
								],
							},
							{
								id: 'honored-1-depth-2-4',
								title: '배포 주기와 업데이트 내용을 함께 관리해 정기적인 변경 사항 공유가 가능하도록 했습니다.',
								isImportant: true,
								imgUrl: null,
								children: [
									{
										id: 'honored-1-depth-2-4',
										title: '향후 배포 일정과 업데이트 내용을 사전에 안내해 미리 예측할 수 있도록 했습니다.',
										isImportant: false,
										imgUrl: null,
										children: null,
									},
								],
							},
							{
								id: 'honored-1-depth-2-4',
								title: '[ 📸 품질 향상 및 안정화를 위한 문서 갤러리 ]',
								isImportant: true,
								imgUrl: [
									{ id: 'bug-doc-1', url: '/bug-doc.png', direction: 'row' },
									{ id: 'deploy-doc-1', url: '/deploy-doc.png', direction: 'row' },
									{ id: 'release-doc-1', url: '/release-doc.png', direction: 'row' },
								],
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'honored-common-dev-section',
				title: '업무 효율성 100% 극대화',
				imgUrl: null,
				isImportantm: false,
				children: [
					{
						id: 'honored-2-depth-2-2',
						title: '업무 병목을 제거한 개발 시스템 구축과 문서화',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'honored-1-depth-2-4',
								title: '팀 문서 관리용 노션을 직접 구축하고, 내부에서 공유되는 주요 문서들을 다수 제작·관리했습니다.',
								isImportant: true,
								imgUrl: null,
								children: [
									{
										id: 'honored-1-depth-2-4',
										title: '문서 구조를 가독성 있게 정리해 팀원들이 필요한 정보를 빠르게 파악할 수 있도록 했습니다.',
										isImportant: false,
										imgUrl: null,
										children: null,
									},
								],
							},
							{
								id: 'honored-1-depth-2-4',
								title: '태스크 티켓 운영을 통해 프로젝트 및 개인별 업무 타임라인을 체계적으로 관리하고, 팀원 간 협업과 커뮤니케이션 효율을 향상시켰습니다.',
								isImportant: true,
								imgUrl: null,
								children: null,
							},
							{
								id: 'honored-1-depth-2-4',
								title: '[ 📸 업무 효율을 높인 문서 갤러리 ]',
								isImportant: true,
								imgUrl: [
									{ id: 'team-notion-1', url: '/team-notion.png', direction: 'row' },
									{ id: 'time-line-1', url: '/time-line.png', direction: 'row' },
								],
								children: null,
							},
						],
					},
				],
			},
		],
		troubleshooting: [],
	},
	{
		id: 'may-i',
		company: '메이아이(mAy-i)',
		companyUrl: 'https://may-i.io',
		period: '2025.02 - 2025.04',
		position: '개발팀 | 사원',
		coreProject: 'mAsh 대시보드 개발',
		mainStack: ['TypeScript', 'React.js', 'React-query'],
		siteGif: [{ size: 420, url: '/may-i.png' }],
		contribute: [
			{
				id: 'MayI-contribute-section',
				title: null,
				isImportant: false,
				imgUrl: null,
				isOpen: true,
				children: [
					{
						id: 'MayI-1-depth-2-1',
						title: 'Mash 대시보드 신규 기능 및 코호트 분석 페이지 개발 및 핫픽스 배포',
						isImportant: false,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'MayI-1-depth-3-1',
								title: '기능 관련 데이터 프로토타입 설계 및 페이지 개발',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
							{
								id: 'MayI-1-depth-3-1',
								title: '대기업고객사 커스텀 기능 개발 및 핫픽스 배포',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
							{
								id: 'MayI-1-depth-3-1',
								title: '위젯, 페이지 핫픽스 및 개선 요청 티켓 처리',
								isImportant: false,
								imgUrl: null,
								children: null,
							},
						],
					},
					{
						id: 'MayI-1-depth-2-2',
						title: '확장성을 고려한 프로바이더 설계',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'honored-1-depth-3-3-1',
								title: '단일 삭제 API를 Promise.all을 활용해 다중 삭제 처리로 보완',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'MayI-1-depth-2-3',
						title: '위젯 및 대시보드 성능 최적화',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'honored-1-depth-3-3-1',
								title: '세마포어 기반으로 동시 요청 수 5개 제한',
								imgUrl: null,
								isImportant: true,
								children: null,
							},
							{
								id: 'honored-1-depth-3-3-1',
								title: '요청 조건 제어를 통한 불필요한 요청 제거',
								imgUrl: null,
								isImportant: true,
								children: null,
							},
							{
								id: 'honored-1-depth-3-3-1',
								title: '단일 책임 원리 적용으로 데이터/UI 컴포넌트 분리',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'honored-1-depth-3-3-1',
								title: 'lazyloading을 이용한 네트워크, 렌더 최적화',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'honored-1-depth-3-3-1',
								title: 'visibility 활용으로 reflow/repaint 제거',
								imgUrl: null,
								isImportant: true,
								children: null,
							},
							{
								id: 'honored-1-depth-3-3-1',
								title: 'memoization hooks를 이용한 렌더 최적화',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'MayI-1-depth-2-4',
						title: '스카웃 제의로 이직 ',
						isImportant: true,
						imgUrl: null,
						children: null,
					},
				],
			},
		],
		commonDev: [],
		troubleshooting: [],
	},
	{
		id: 'teamstone',
		company: '(주) 팀스톤',
		companyUrl: 'https://ontune.co.kr/',
		period: '2023 - 2024',
		position: '개발팀 | 주임',
		coreProject: 'ontune 시스템 모니터링 대시보드 런칭',
		mainStack: ['TypeScript', 'Sevelt.js', 'websocket'],
		siteGif: [
			{ id: 'teamstone-img-1', size: 420, url: '/teamstone3.png', alt: '팀스톤 커버' },
			{ id: 'teamstone-img-2', size: 420, url: '/teamstone2.gif', alt: '프레임워크 없이 SVG로 만든 차트' },
			{ id: 'teamstone-img-2', size: 420, url: '/teamstone.gif', alt: '프레임워크 없이 SVG로 만든 차트' },
		],
		contribute: [
			{
				id: 'teamstone-contribute-section',
				title: null,
				isImportant: false,
				imgUrl: null,
				children: [
					{
						id: 'teamstone-contribute-1',
						title: 'ontune 시스템 모니터링 대시보드 v5 버전 개발 및 런칭',
						isImportant: true,
						imgUrl: null,
						isOpen: false,
						children: [
							{
								id: 'teamstone-contribute-1-desc-1',
								title: '시스템 성능 분석 위젯 및 위젯 설정 팝업 8종 설계 및 개발',
								isImportant: true,
								children: [
									{
										id: 'teamstone-contribute-1-desc-1',
										title: 'Web Worker 와 Echart를 이용해 대규모 변동 데이터 위젯 차트 개발',
										isImportant: false,
										children: null,
									},
								],
							},
							{
								id: 'teamstone-contribute-1-desc-1',
								title: 'Host 및 위젯 데이터 튜닝 관련 총 6개 페이지 개발',
								isImportant: true,
								children: [
									{
										id: 'teamstone-contribute-1-desc-1',
										title: '반응성 전파 범위를 제어해 퍼포먼스를 최적화하며 데이터 안정성을 고려해 개발 ',
										isImportant: false,
										children: null,
									},
								],
							},
							{
								id: 'teamstone-contribute-1-desc-1',
								title: '시스템 성능 분석 관련 총 2개 페이지 개발',
								isImportant: true,
								children: [
									{
										id: 'teamstone-contribute-1-desc-1',
										title: '위젯 데이터 지표 선택을 위한 커스텀 레이어 팝업 기능 설계 및 개발',
										isImportant: false,
										children: null,
									},
								],
							},
							{
								id: 'teamstone-contribute-1-desc-1',
								title: '공통 컴포넌트 및 글로벌 함수 개발 ',
								isImportant: true,
								children: [
									{
										id: 'teamstone-contribute-1-desc-1',
										title: 'ReportBaseChart / WidgetMideaQuery / BarChart / BarChartTooltip',
										isImportant: false,
										children: null,
									},
									{
										id: 'teamstone-contribute-1-desc-1',
										title: '공통 컴포넌트는 모두 자유도를 높여 개발',
										isImportant: false,
										children: null,
									},
								],
							},
						],
					},
					{
						id: 'teamstone-contribute-4',
						title: '대시보드 성능 개선 ',
						isImportant: true,
						imgUrl: null,
						isOpen: true,
						children: [
							{
								id: 'teamstone-contribute-4-desc-1',
								title: 'Web Worker 기반 연산/렌더 분리로 메인 스레드 부하 개선 ',
								imgUrl: null,
								isImportant: true,
								children: null,
							},
							{
								id: 'teamstone-contribute-4-desc-1',
								title: '메모리 누수 개선',
								imgUrl: null,
								isImportant: true,
								children: [
									{
										id: 'teamstone-contribute-4-desc-1',
										title: 'JS 메모리: 50,256K(지속증가) → 28,416K 안정화',
										imgUrl: null,
										isImportant: true,
										children: null,
									},
									{
										id: 'teamstone-contribute-4-desc-1',
										title: 'CPU 사용률: 10.9~80.4% → 3.9~5.1%',
										imgUrl: null,
										isImportant: true,
										children: null,
									},
								],
							},
							{
								id: 'teamstone-contribute-4-desc-1',
								title: '대규모 데이터 환경에서의 렌더 성능 개선',
								imgUrl: null,
								isImportant: true,
								children: [
									{
										id: 'teamstone-contribute-4-desc-1',
										title: '반응성 전파 제어를 통한 렌더범위 국소화',
										imgUrl: null,
										isImportant: true,
										children: null,
									},
									{
										id: 'teamstone-contribute-4-desc-1',
										title: '렌더 조건 제어 및 visibility 활용으로 reflow/repaint 제거',
										imgUrl: null,
										isImportant: false,
										children: null,
									},
									{
										id: 'teamstone-contribute-4-desc-1',
										title: '차트 데이터 구조 변경을 이용한 렌더 성능 개선',
										imgUrl: null,
										isImportant: false,
										children: null,
									},
								],
							},
							{
								id: 'teamstone-contribute-4-desc-1',
								title: '차트 트리쉐이킹을 이용한 번들 사이즈 개선',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
							{
								id: 'teamstone-contribute-4-desc-1',
								title: '이벤트 디바운싱 적용으로 불필요한 연산 최소화',
								imgUrl: null,
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'teamstone-contribute-2',
						title: '테스트를 기반으로 사용자 친화적인 UI/UX 개선 의견 제시 및 반영',
						isImportant: true,
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
						id: 'teamstone-2-depth-2-3',
						title: '24년 하반기 최단기  주임 승진',
						isImportant: true,
						isOpen: false,
						children: null,
					},
				],
			},
		],
		commonDev: [
			{
				id: 'teamstone-common-dev-section',
				title: '워커 스레드 100% 활용',
				imgUrl: null,
				isImportantm: false,
				children: [
					{
						id: 'honored-2-depth-2-2',
						title: '메인 / 워커 스레드 역할 분리로 렌더 최적화',
						isOpen: true,
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'honored-2-depth-2-2',
								title: '메인 스레드: UI 처리 및 워커에서 받아온 값 처리',
								isImportant: true,
								imgUrl: null,
								children: null,
							},
							{
								id: 'honored-2-depth-2-2',
								title: '워커 스레드: 위젯에서 데이터를 바로 사용할 수 있도록 연산 및 가공',
								isImportant: true,
								imgUrl: [{ id: 'webworker-1', url: '/webworker.webp', direction: 'row' }],
								children: [
									{
										id: 'honored-2-depth-2-2',
										title: '위젯 데이터는 무슨 연산을 하는가?',
										isImportant: true,
										imgUrl: null,
										children: [
											{
												id: 'honored-2-depth-2-2',
												title: '데이터 단위 스케일 처리',
												isImportant: false,
												imgUrl: null,
												children: null,
											},
											{
												id: 'honored-2-depth-2-2',
												title: '위젯에 필요한 데이터만 뽑아 넘길 수 있도록 정제',
												isImportant: false,
												imgUrl: null,
												children: null,
											},
											{
												id: 'honored-2-depth-2-2',
												title: '위 과정을 2~10초 단위로 반복',
												isImportant: false,
												imgUrl: null,
												children: null,
											},
										],
									},
								],
							},
						],
					},
					{
						id: 'honored-2-depth-2-2',
						title: '렌더 블로킹 완화를 위해 차트 시리즈 및 옵션 워커 내부에서 제작',
						isOpen: true,
						isImportant: true,
						imgUrl: null,
						children: [
							{
								id: 'honored-2-depth-2-2',
								title: '시리즈와 옵션엔 차트를 그리기 위한 특성과 데이터를 포함합니다. \n\u00A0\u00A0 2~10초 주기로 재연산이 필요한 데이터 특성에 따라 렌더 블로킹 완화를 위해 메인 스레드 연산을 워커 스레드 연산으로 변경했습니다.',
								isImportant: true,
								imgUrl: null,
								children: null,
							},
							{
								id: 'honored-2-depth-2-2',
								title: '[ ⚠️ 참고 ] 위젯 데이터와 차트 데이터는 다릅니다. \n\u00A0\u00A0 위젯 데이터는 처음부터 워커에서 가공해왔으나 차트 데이터는 렌더 블로킹 현상을 겪고 팀장님과 내부회의를 거치며 제가 직접 개선한 결과 입니다.',
								isImportant: false,
								imgUrl: [
									{
										id: 'teamstone-chart-worker-1',
										url: '/teamstone-chart-worker.png',
										direction: 'row',
									},
								],
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'teamstone-common-dev-section',
				title: 'reflow / repaint 를 최소화한 렌더 최적화',
				imgUrl: null,
				isImportantm: false,
				children: [
					{
						id: 'teamstone-common-dev-section',
						title: '변경 범위를 세분화하여 필요한 부분만 리렌더링되도록 해 렌더 최적화',
						imgUrl: null,
						isImportant: true,
						isOpen: true,
						children: [
							{
								id: 'teamstone-common-dev-section',
								title: '[ 📌 예시 ] 1번 크기 및 위치 고정, 2,3,4번만 리렌더',
								imgUrl: [
									{ id: 'reflow-repaint-1', url: '/reflow-repaint-1.webp', direction: 'row' },
									{ id: 'reflow-repaint-2', url: '/reflow-repaint-2.webp', direction: 'row' },
								],
								isOpen: true,
								isImportantm: false,
								children: null,
							},
						],
					},
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
						isImportant: false,
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
						isImportant: false,
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
		company: '(주) 딩코',
		companyUrl: 'https://codebootcamp.co.kr/',
		period: '2022 - 2023',
		position: '개발 • 멘토팀 | 사원',
		coreProject: ' 인프런 X 코드캠프 온/오프라인 부트캠프',
		mainStack: ['TypeScript', 'Next.js', 'Graph-ql'],
		siteGif: [
			{ size: 420, url: '/dingco.png' },
			{ size: 420, url: '/dingco.gif' },
		],
		contribute: [
			{
				id: 'dingco-contribute-section',
				title: null,
				isImportant: true,
				children: [
					{
						id: 'dingco-1-depth-2-1',
						title: '코드캠프 온/오프라인 부트캠프  학습자료 제작  파트 리드',
						isImportant: false,
						isOpen: true,
						children: [
							{
								id: 'dingco-1-depth-1-3-1',
								title: '프론트엔드 전과정 학습자료 검토 및 제작',
								isImportant: false,
								children: null,
							},
							{
								id: 'dingco-1-depth-1-3-2',
								title: '‘노션 장인의 자료’라 평가 받은 학습자료',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'dingco-1-depth-2-2',
						title: '[ 인프런 X 코드캠프 ]  & 코드캠프 온/오프라인 부트캠프 프론트엔드 멘토',
						isImportant: false,
						isOpen: true,
						children: [
							{
								id: 'dingco-1-depth-2-3-1',
								title: '수강생 과제 및 포트폴리오 성능·유지보수 관점 코드 피드백',
								isImportant: false,
								children: null,
							},
							{
								id: 'dingco-1-depth-2-3-1',
								title: '필요시 JS 특강 진행 (수업에 필요한 JS 강의)',
								isImportant: false,
								children: null,
							},
						],
					},
					{
						id: 'dingco-1-depth-2-3',
						title: '회사 홈페이지 및 부트캠프 사이트 개발 ',
						isImportant: false,
						isOpen: true,
						children: [
							{
								id: 'dingco-1-depth-3-3-1',
								title: 'SEO를 고려한 광고(랜딩) 페이지 개발',
								isImportant: false,
								children: [
									{
										id: 'dingco-1-depth-3-3-2',
										title: '시멘틱 HTML 구조 설계 및 meta / OG 태그 적용',
										isImportant: false,
										children: null,
									},
								],
							},
							{
								id: 'dingco-1-depth-3-3-2',
								title: '반응형 웹 적용',
								isImportant: false,
								children: null,
							},
							{
								id: 'dingco-1-depth-3-3-3',
								title: '유저 로그인 로그 데이터 개발',
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
