/** @format */

export interface TroubleShootingDataType {
	id: string;
	title?: string;
	detailUrl: string;
	significant?: string[];
	company: string;
	project: string;
	relativeTag?: string[] | null;
	summary: string;
	main: { id: string; title: string; children: any }[];
}
[];

export const troubleShootingData = [
	{
		id: 'honored-trouble-shooting',
		title: '모노레포 배포 에러 해결 사례',
		detailUrl: 'https://www.notion.so/Basic-performance-OSInfo-a7c7a9ff1dec46f8ae9fbec96503e017',
		company: 'honored',
		project: '아너드 자체 웹 서비스 구현 프로젝트 및 신한 제휴',
		relativeTag: ['npm', 'mono-repo', 'pnpm', 'package-hoisting'],
		significant: [],
		summary:
			'처음으로 구축한 모노레포를 Vercel로 배포하는 과정에서, 모듈 호이스팅으로 인한 빌드 에러를 해결해 나간 트러블슈팅',
		main: [
			{
				id: 'honored-trouble-shooting-depth-1-1',
				title: '문제',
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
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-2-1',
						title: '모노레포 + npm 워크스페이스 환경에서 모듈 호이스팅으로 인한 패키지 경로 인식 실패',
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
				title: '해결',
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-3',
						title: 'npm은 직접적으로 호이스팅을 제어하기 어렵다. 가장 빠르고 확실한 해결 방법은 패키지 매니저를 pnpm으로 바꾸고, 워크스페이스를 pnpm 으로 바꾸는 것이라 생각했음. 따라서 pnpm으로 패키지 매니저 변경.',
						children: null,
					},
				],
			},
			{
				id: 'honored-trouble-shooting-depth-1-4',
				title: '결과',
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-4',
						title: '패키지 호이스팅을 제거해 모두 설치할 수 있도록 해주고, 빌드 에러를 제거 성공했으며 이후 배포에 성공.',
						children: null,
					},
				],
			},
			{
				id: 'honored-trouble-shooting-depth-1-5',
				title: '비고',
				children: [
					{
						id: 'honored-trouble-shooting-depth-2-5',
						title: '추후 비슷한 트러블 슈팅에 도움이 될 수 있을 것 같아 문서화로 남겨두었다.',
						children: null,
					},
				],
			},
		],
	},
	{
		id: 'teamstone-trouble-shooting-1',
		title: '위젯 메모리 누수 개선 사례',
		detailUrl:
			'https://www.notion.so/Basic-performance-OSInfo-a7c7a9ff1dec46f8ae9fbec96503e017?source=copy_link#24ac9d6263d04c4f87233a1e3f7f28c1',
		significant: ['2초 주기 데이터 변경', '2초 주기 화면 리렌더'],
		relativeTag: ['interval', 'clear', 'requestAnimationFrame', 'cpu'],
		company: 'teamstone',
		project: '온튠 웹 프로젝트 - 모니터 위젯 파트',
		summary:
			'애니메이션 구현 시 setInterval로 인해 발생한 메모리 누수를 requestAnimationFrame으로 해결해 나간 트러블슈팅',
		main: [
			{
				id: 'teamstone-trouble-shooting-1-depth-1-1',
				title: '문제',
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-1',
						title: '특정 위젯의 자바스크립트 메모리가 지속적으로 증가하는 메모리 누수 상황 발견',
						children: null,
					},
				],
				isImportant: true,
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-2',
				title: '원인',
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-2',
						title: '애니메이션 구현을 위해 사용한 interval이 너무 빈번히 호출되며 clear 되지못해 발생한 문제',
						children: null,
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-3',
				title: '해결',
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-3',
						title: 'requestAnimationFrame api를 이용한 애니메이션으로 재구현',
						children: null,
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-4',
				title: '결과',
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-1',
						title: '메모리 사용량과 더불어 CPU 사용량도 개선되며 누수가 개선되었고 화면이 많이 부드러워졌음',
						children: null,
					},
					{
						id: 'teamstone-trouble-shooting-1-depth-2-2',
						title: '화면 동작은 많이 개선되었으나 GPU가 다소 많이 사용되는 것 같다는 일부 의견도 있었음',
						children: null,
					},
				],
				isImportant: true,
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-5',
				title: '비고',
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
		id: 'teamstone-trouble-shooting-2',
		title: '불필요한 리렌더 완화로 성능 개선 사례',
		detailUrl:
			'https://www.notion.so/Manage-Server-a42139d1574b4429b9e39b4c979eb360?source=copy_link#660eeee648074d14970f755eb18fa3b2',
		relativeTag: ['reflow', 'repaint', 'css', 'rerender'],
		company: 'teamstone',
		project: '온튠 웹 프로젝트 - 모니터 컨피그 서비스 파트',
		significant: [],
		summary:
			'불필요한 전체 리렌더링을 조건부 렌더링과 블록 단위 코드 실행으로 부분 리렌더링으로 개선해 나간 트러블슈팅',
		main: [
			{
				id: 'teamstone-trouble-shooting-2-depth-1-1',
				title: '문제',
				children: [
					{
						id: 'teamstone-trouble-shooting-2-depth-2-1',
						title: '패널의 active를 수정 시 불필요한 전체 리렌더로 인한 성능저하 개선 사례',
						children: null,
					},
					{
						id: 'teamstone-trouble-shooting-2-depth-2-1',
						title: '해당 리렌더는 그리드에 데이터가 많아질 경우 버벅임과 메모리 사용량이 크게 증가함',
						children: null,
					},
				],
				isImportant: true,
			},
			{
				id: 'teamstone-trouble-shooting-2-depth-1-2',
				title: '원인',
				children: [
					{
						id: 'teamstone-trouble-shooting-2-depth-2-2',
						title: '반응성 부여 시 리렌더를 실행 할 조건을 부여하지 않아 변수 중 하나라도 변경되면 무조건 전체가 리렌더 된다',
						children: null,
					},
					{
						id: 'teamstone-trouble-shooting-2-depth-2-2',
						title: '페이지 내부에 필요한 대부분의 변수가 외부 파일에 하나의 객체로 묶여 있다',
						children: [
							{
								id: 'teamstone-trouble-shooting-2-depth-2-2',
								title: 'grid의 인스턴트도 분리해 묶어놔서 패널 밖 그리드도 리렌더 발생',
								children: null,
							},
							{
								id: 'teamstone-trouble-shooting-2-depth-2-2',
								title: '해당 객체중 하나의 프로퍼티가 변경되면 객체 관련된건 와르르 리렌더 된다',
								children: null,
							},
						],
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-3',
				title: '해결',
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-3',
						title: '반응성 부여 시 리렌더 실행 조건 부여,리렌더를 쪼개서 실행하도록 렌더 시점 분리',
						children: null,
					},
					{
						id: 'teamstone-trouble-shooting-1-depth-2-3',
						title: '파일 분리가 굳이 필요하지 않은 변수들은 컴포넌트 내부에 선언 → 웬만하면 블록 내부로 선언해 사용후 빠르게 사라지도록 리팩토링',
						children: null,
					},
				],
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-4',
				title: '결과',
				children: [
					{
						id: 'teamstone-trouble-shooting-1-depth-2-4',
						title: '버벅임과 메모리는 확실히 개선되었으며, 변수의 선언을 컴포넌트 내부로 일부 옮겨 리딩이 좀 더 쉬워지는 효과가 있었음',
						children: null,
					},
				],
				isImportant: true,
			},
			{
				id: 'teamstone-trouble-shooting-1-depth-1-5',
				title: '비고',
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
