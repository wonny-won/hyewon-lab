/** @format */

export interface ArchiveProjectDetailDataType {
	id: string;
	title?: string;
	detailUrl: string;
	significant?: string[];
	division: string;
	project: string;
	relativeTag?: string[] | null;
	summary: string;
	main: { id: string; title: string; children: any; isImportant: boolean }[];
}
[];

export const archiveProjectDetailData = [
	{
		id: 'honored-trouble-shooting-section',
		title: '모노레포 배포 에러 \n 해결 사례',
		detailUrl: 'https://www.notion.so/Basic-performance-OSInfo-a7c7a9ff1dec46f8ae9fbec96503e017',
		division: 'BugIcon',
		project: '아너드 자체 웹 서비스 구현 프로젝트 및 신한 제휴',
		relativeTag: ['npm', 'mono-repo', 'pnpm', 'package-hoisting'],
		significant: [],
		summary:
			'처음으로 구축한 모노레포를 Vercel로 배포하는 과정에서, 모듈 호이스팅으로 인한 빌드 에러를 해결해 나간 트러블슈팅',
		main: [
			{
				id: 'honored-trouble-shooting-depth-1-1',
				title: '문제',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-1',
						title: 'Vercel 배포 실패 → 빌드 단계에서 모듈을 찾지 못해 에러 발생',
						children: null,
					},
				],
			},
			{
				id: 'honored-trouble-shooting-depth-1-2',
				title: '원인',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-2-1',
						title: 'Vercel은 빌드 타겟 디렉터리 기준으로 의존성 해석',
						isImportant: true,
						children: null,
					},
					{
						id: 'honored-trouble-shooting-depth-2-2-1',
						title: '모노레포 + npm 워크스페이스 환경에서 Vercel 배포시 모듈 호이스팅으로 인한 패키지 경로 인식 실패',
						isImportant: true,
						isOpen: true,
						children: [
							{
								id: 'honored-trouble-shooting-depth-3-2-1',
								title: '모듈 호이스팅으로 node_modules가 상위 루트 경로에서만 생성',
								children: null,
							},
							{
								id: 'honored-trouble-shooting-depth-3-2-2',
								title: '빌드 할 대상은 하위 폴더이기 때문에 루트의 모듈을 읽어올 수 없음',
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'honored-trouble-shooting-depth-1-3',
				title: '해결 과정',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-3',
						title: '가장 확실한 방법인 패키지 매니저를 pnpm으로 변경 후 워크스페이스를 pnpm 으로 변경',
						isImportant: true,
						isOpen: true,
						children: [
							{
								id: 'honored-trouble-shooting-depth-2-3',
								title: 'npm은 호이스팅 제어 설정 복잡도 증가해 직접적으로 제어가 어렵다고 판단',
								children: null,
							},
							{
								id: 'honored-trouble-shooting-depth-2-3',
								title: '반면 pnpm은 패키지 단위로 node_modules를 관리',
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'honored-trouble-shooting-depth-1-4',
				title: '결과',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-4',
						title: '패키지 호이스팅 문제를 제거해 빌드 에러를 근본적으로 해결 후 배포 성공',
						isImportant: true,
						isOpen: true,
						children: [
							{
								id: 'honored-trouble-shooting-depth-2-3',
								title: '패키지 단위로 node_modules가 분리되며 하위 루트에 node_modules를 생성해 빌드에러 해결',
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'honored-trouble-shooting-depth-1-5',
				title: '비고',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-5',
						title: '추후 동일한 이슈 재발 방지 및 사이드 이펙트에 도움이 될 수 있을 것 같아 트러블 슈팅 문서화 완료',
						children: null,
					},
				],
			},
		],
	},
	{
		id: 'teamstone-trouble-shooting-1-section',
		title: '위젯 메모리 누수 \n 개선 사례',
		detailUrl:
			'https://www.notion.so/Basic-performance-OSInfo-a7c7a9ff1dec46f8ae9fbec96503e017?source=copy_link#24ac9d6263d04c4f87233a1e3f7f28c1',
		significant: ['2초 주기 데이터 변경', '2초 주기 화면 리렌더'],
		relativeTag: ['interval', 'clear', 'requestAnimationFrame', 'cpu'],
		division: 'BugIcon',
		project: '온튠 웹 프로젝트 - 모니터 위젯 파트',
		summary:
			'애니메이션 구현 시 setInterval로 인해 발생한 메모리 누수를 requestAnimationFrame으로 해결해 나간 트러블슈팅',
		main: [
			{
				id: 'teamstone-trouble-shooting-1-depth-1-1',
				title: '문제',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-1',
						title: '특정 위젯의 메모리가 해제되지 못하고 지속적으로 증가하는 메모리 누수 상황 발견',
						isOpen: true,
						children: [
							{
								id: 'teamstone-trouble-shooting-1-depth-2-1-3-1',
								title: 'CPU 사용률 10.9~80.4%',
								isImportant: true,
								children: null,
							},
							{
								id: 'teamstone-trouble-shooting-1-depth-2-1-3-2',
								title: '자바스크립트 메모리 지속 증가로 해제 X (50,256K~)',
								isImportant: true,
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-2',
				title: '원인',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-2',
						title: '애니메이션 구현을 위해 사용한 interval이 2초에 한번씩 호출되어 동시에 여러 interval 생성 후 1:1 clear 되지못해 발생한 문제',
						children: null,
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-3',
				title: '해결 과정',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-3',
						title: 'requestAnimationFrame api를 이용한 애니메이션으로 재구현',
						isImportant: true,
						isOpen: true,
						children: [
							{
								id: 'teamstone-trouble-shooting-1-depth-3-3-1',
								title: '메모리 누수 판단 과정',
								isImportant: true,
								children: [
									{
										id: 'teamstone-trouble-shooting-1-depth-3-4-1',
										title: '브라우저 작업 관리자로 자바스크립트 메모리 사이즈 및 CPU 사용률 추적',
										children: null,
									},
									{
										id: 'teamstone-trouble-shooting-1-depth-3-4-2',
										title: '자바스크립트 메모리가 GC 이후에도 안정화 되지 않고 지속적으로 증가 시 메모리 누수 판단',
										children: null,
									},
								],
							},
							{
								id: 'teamstone-trouble-shooting-1-depth-3-3-1',
								title: '누수지점 파악 과정',
								isImportant: true,
								isOpen: true,
								children: [
									{
										id: 'teamstone-trouble-shooting-1-depth-3-4-1',
										title: '브라우저 DevTools → Performance 탭에서 메모리 타임라인 녹화',
										children: [
											{
												id: 'teamstone-trouble-shooting-1-depth-3-4-2',
												title: 'JS 힙 메모리가 증가후 제대로 해제되지 않은 지점 확인',
												children: null,
											},
										],
									},
									{
										id: 'teamstone-trouble-shooting-1-depth-3-4-3',
										title: '브라우저 DevTools → Memory 탭에서 Allocation instrumentation on timeline 실행',
										children: [
											{
												id: 'teamstone-trouble-shooting-1-depth-3-4-3',
												title: '메모리 막대가 해제되지 않은 구간의 타겟 오브젝트 확인',
												children: null,
											},
										],
									},
									{
										id: 'teamstone-trouble-shooting-1-depth-3-4-3',
										title: '브라우저 DevTools → Memory 탭에서 프로그램 시작 초기 힙스냅샷 녹화',
										children: [
											{
												id: 'teamstone-trouble-shooting-1-depth-3-4-3',
												title: '일정 시간 이후 힙스냅샷을 한번 더 녹화 후 두 스냅샷에서 타겟 오브젝트 비교',
												children: null,
											},
											{
												id: 'teamstone-trouble-shooting-1-depth-3-4-3',
												title: 'Retained Size 증가되어 있다면 누수 포인트로 판단',
												children: null,
											},
										],
									},
									{
										id: 'teamstone-1-depth-2-3-4-1',
										title: '[ 📸 메모리 누수 공부 과정 기록 갤러리 ]',
										isImportant: true,
										imgUrl: [
											{
												id: 'memoryleak-record-1',
												url: '/memoryleak-record.webp',
												direction: 'row',
											},
										],
										children: null,
									},
								],
							},
						],
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-4',
				title: '결과',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-1',
						title: '메모리 사용량과 더불어 CPU 사용량도 개선되며 누수가 개선되었고 화면이 많이 부드러워짐',
						isOpen: true,
						isImportant: true,
						children: [
							{
								id: 'teamstone-trouble-shooting-1-depth-2-2',
								title: 'CPU 사용률 10.9~80.4% → 3.9~5.1% 로 감소',
								isImportant: true,
								children: null,
							},
							{
								id: 'teamstone-trouble-shooting-1-depth-2-2',
								title: 'JS 메모리 지속 증가 (50,256K~) → 안정화 후 28,416K로 개선',
								isImportant: true,
								imgUrl: [
									{
										id: 'memoryleak-after-1',
										url: '/memoryleak-after.webp',
										direction: 'row',
									},
								],
								children: null,
							},
						],
					},
					{
						id: 'teamstone-trouble-shooting-1-depth-2-2',
						title: '화면 동작은 많이 개선되었으나 GPU가 다소 많이 사용되는 것 같다는 일부 의견도 있었음',
						children: null,
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-5',
				title: '비고',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-5',
						title: '현재 본인 지식선에선 더이상의 리소스를 줄이는 것과 퍼포먼스 향상은 무리라 판단해 애니메이션 제거를 요청',
						children: null,
					},
				],
			},
		],
	},
	{
		id: 'teamstone-trouble-shooting-2-section',
		title: '불필요한 리렌더 완화로 \n 성능 개선 사례',
		detailUrl:
			'https://www.notion.so/Manage-Server-a42139d1574b4429b9e39b4c979eb360?source=copy_link#660eeee648074d14970f755eb18fa3b2',
		relativeTag: ['reflow', 'repaint', 'css', 're-render'],
		division: 'BugIcon',
		project: '온튠 웹 프로젝트 - 모니터 컨피그 서비스 파트',
		significant: [],
		summary:
			'불필요한 반응성 전파로 인한 광범위한 DOM/컴포넌트 업데이트를 조건부 렌더링과 블록 단위 코드 실행으로 부분 업데이트로 개선해 나간 트러블슈팅',
		main: [
			{
				id: 'teamstone-trouble-shooting-2-depth-1-1',
				title: '문제',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-2-depth-2-1',
						title: '사이드 패널의 active를 수정 시 불필요한 반응성 전파로 광범위한 DOM 업데이트되어 성능 저하 발생',
						children: null,
					},
					{
						id: 'teamstone-trouble-shooting-2-depth-2-1',
						title: '그리드에 데이터가 많아질수록 버벅임과 메모리 사용량이 크게 증가',
						children: null,
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-2-depth-1-2',
				title: '원인',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-2-depth-2-2',
						title: '반응성 부여 시 리렌더를 실행 할 조건을 부여하지 않아 변수 중 하나라도 변경되면 무조건 전체가 업데이트되는 구조',
						children: null,
					},
					{
						id: 'teamstone-trouble-shooting-2-depth-2-2',
						title: '페이지 내부에 필요한 대부분의 변수(상태)가 외부 파일에 하나의 객체로 묶여 있다',
						isOpen: true,
						children: [
							{
								id: 'teamstone-trouble-shooting-2-depth-2-2',
								title: '변수 객체중 하나의 프로퍼티라도 변경되면 해당 객체를 참조하고 있던 모든 컴포넌트에서 반응성이 전파되어 DOM 업데이트',
								children: null,
							},
							{
								id: 'teamstone-trouble-shooting-2-depth-2-2',
								title: 'grid 생성에 필요한 인스턴스 객체도 해당 객체에 포함되어있어 패널 밖 그리드까지 불필요한 DOM 업데이트 발생',
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-3',
				title: '해결 과정',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-3',
						title: '반응성($) 부여 시 필요한 값만 참조 할 수 있도록 조건을 설정해 렌더 시점 분리',
						isImportant: true,
						children: null,
					},
					{
						id: 'teamstone-trouble-shooting-1-depth-2-3',
						title: '하나의 객체로 관리되던 변수(상태) 중 반응성이 필요 없는 값은 컴포넌트 로컬 변수로 이동해 반응성 전파 범위 축소',
						isImportant: true,
						children: null,
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-4',
				title: '결과',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-4',
						title: '대량 데이터 환경에서도 버벅임과 메모리 증가 완화, 변수(상태)의 선언을 컴포넌트 내부로 일부 옮겨 가독성 개선',
						children: null,
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-5',
				title: '비고',
				isImportant: false,
				isOpen: true,
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-5',
						title: '',
						children: null,
					},
				],
			},
		],
	},
];
