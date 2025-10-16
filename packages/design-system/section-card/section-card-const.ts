/** @format */

const commonStyle = {
	sectionCardStyle: {
		record: 'w-[85%] bg-core-gray-50 rounded-[20px] p-10 flex flex-col gap-5',
		about: 'w-[85%] bg-core-gray-50 rounded-[20px] p-10 flex flex-col',
		default: 'w-[90%] bg-core-gray-50 rounded-[20px] p-10 flex flex-col',
	},
	contentStyle: {
		record: 'flex gap-15',
		about: '',
		default: '',
	},
	subTitleSideStyle: {
		record: 'w-[20%]',
		about: '',
		default: '',
	},
};

export const openClassStyle = {
	sectionCardStyle: {
		record: `${commonStyle.sectionCardStyle.record} h-fit`,
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
		record: `${commonStyle.sectionCardStyle.record} h-[300px]`,
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
