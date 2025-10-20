/** @format */

const commonStyle = {
	sectionCardStyle: {
		record: 'w-full bg-core-gray-50 rounded-[20px] p-10 flex flex-col gap-5 overflow-hidden transition-[max-height] duration-600 ease-in-out',
		about: 'w-full bg-core-gray-50 rounded-[20px] p-10 flex flex-col',
		default: 'w-full bg-core-gray-50 rounded-[20px] p-10 flex flex-col',
	},
	contentStyle: {
		record: 'flex gap-15',
		about: '',
		default: '',
	},
	subTitleSideStyle: {
		record: 'w-[25%]',
		about: '',
		default: '',
	},
};

export const openClassStyle = {
	sectionCardStyle: {
		record: `${commonStyle.sectionCardStyle.record} max-h-[2000px]`,
		about: `${commonStyle.sectionCardStyle.about} h-fit`,
		default: `${commonStyle.sectionCardStyle.default} h-fit`,
	},
	contentStyle: {
		record: `${commonStyle.contentStyle.record} overflow-hidden`,
		about: '',
		default: '',
	},
	subTitleSideStyle: {
		record: `${commonStyle.subTitleSideStyle.record} overflow-hidden`,
		about: '',
		default: '',
	},
};

export const notOpenClassStyle = {
	sectionCardStyle: {
		record: `${commonStyle.sectionCardStyle.record} max-h-[300px]`,
		about: `${commonStyle.sectionCardStyle.about} h-fit`,
		default: `${commonStyle.sectionCardStyle.default} h-fit`,
	},
	contentStyle: {
		record: `${commonStyle.contentStyle.record}`,
		about: '',
		default: '',
	},
	subTitleSideStyle: {
		record: `${commonStyle.subTitleSideStyle.record}`,
		about: '',
		default: '',
	},
};
