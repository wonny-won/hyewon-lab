/** @format */
interface NearByMeErrandType {
	id: number;
	title: string;
	location: string;
	locationFar: number;
	updateHour: string;
	price: number;
}

export const nearByMeErrand: NearByMeErrandType[] = [
	{
		id: 1,
		title: '서류 가져다 주실분',
		location: '행신',
		locationFar: 0.1,
		updateHour: '3분전',
		price: 5000,
	},
	{
		id: 2,
		title: '약 사다 주실 분',
		location: '행신',
		locationFar: 0.12,
		updateHour: '2시간전',
		price: 3500,
	},
	{
		id: 3,
		title: '강아지 산책시켜주실 분',
		location: '강매',
		locationFar: 0.4,
		updateHour: '1시간전',
		price: 10000,
	},
	{
		id: 4,
		title: '월, 화 애기 하원 도와주실 분',
		location: '행신',
		locationFar: 0.1,
		updateHour: '2일전',
		price: 20000,
	},
	{
		id: 5,
		title: '장봐주실 분',
		location: '강매',
		locationFar: 0.8,
		updateHour: '30분전',
		price: 8000,
	},
	{
		id: 6,
		title: '열쇠 가져다 주실 분',
		location: '강매',
		locationFar: 0.7,
		updateHour: '1시간전',
		price: 7000,
	},
	{
		id: 7,
		title: '회사로 망치좀 가져다 주세요',
		location: '능곡',
		locationFar: 0.9,
		updateHour: '1시간전',
		price: 1000,
	},
	{
		id: 8,
		title: '애기 등원도우미 구함',
		location: '강매',
		locationFar: 0.7,
		updateHour: '3시간전',
		price: 10000,
	},
	{
		id: 9,
		title: '건물 청소 해주실분',
		location: '행신',
		locationFar: 0.1,
		updateHour: '2시간전',
		price: 18000,
	},
	{
		id: 10,
		title: '알바 대타 구함',
		location: '능곡',
		locationFar: 1,
		updateHour: '어제',
		price: 11000,
	},
];
