/** @format */

const commonStyle = {
	sectionCardStyle: {
		normal: {
			record: 'w-full flex flex-col gap-1 overflow-hidden transition-[max-height] duration-600 ease-in-out',
			about: 'w-full flex flex-col',
			default: 'w-full bg-core-gray-50 rounded-[20px] flex flex-col',
		},
		line: {
			record: 'w-full flex flex-col gap-4 overflow-hidden transition-[max-height] py-10 duration-600 ease-in-out border-y-[1px] border-solid border-core-neutral-700',
			about: 'w-full flex flex-col',
			default: 'w-full bg-core-gray-50 rounded-[20px] flex flex-col',
		},
	},
	contentStyle: {
		normal: {
			record: 'flex gap-15',
			about: '',
			default: '',
		},
		line: {
			record: 'flex gap-15',
			about: '',
			default: '',
		},
	},
	subTitleSideStyle: {
		normal: {
			record: 'w-[25%]',
			about: '',
			default: '',
		},
		line: {
			record: 'w-[25%]',
			about: '',
			default: '',
		},
	},
};

export const openClassStyle = {
	sectionCardStyle: {
		normal: {
			record: `${commonStyle.sectionCardStyle.line.record} max-h-[2000px]`,
			about: `${commonStyle.sectionCardStyle.line.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.line.default} h-fit`,
		},
		line: {
			record: `${commonStyle.sectionCardStyle.line.record} max-h-[2000px]`,
			about: `${commonStyle.sectionCardStyle.line.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.line.default} h-fit`,
		},
	},
	contentStyle: {
		line: {
			record: `${commonStyle.contentStyle.line.record} overflow-hidden`,
			about: '',
			default: '',
		},
		normal: {
			record: `${commonStyle.contentStyle.line.record} overflow-hidden`,
			about: '',
			default: '',
		},
	},
	subTitleSideStyle: {
		line: {
			record: `${commonStyle.subTitleSideStyle.line.record} overflow-hidden`,
			about: '',
			default: '',
		},
		normal: {
			record: `${commonStyle.subTitleSideStyle.line.record} overflow-hidden`,
			about: '',
			default: '',
		},
	},
};

export const notOpenClassStyle = {
	sectionCardStyle: {
		normaml: {
			record: `${commonStyle.sectionCardStyle.line.record} max-h-[300px]`,
			about: `${commonStyle.sectionCardStyle.line.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.line.default} h-fit`,
		},
		line: {
			record: `${commonStyle.sectionCardStyle.line.record} max-h-[300px]`,
			about: `${commonStyle.sectionCardStyle.line.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.line.default} h-fit`,
		},
	},
	contentStyle: {
		normal: {
			record: `${commonStyle.contentStyle.line.record}`,
			about: '',
			default: '',
		},
		line: {
			record: `${commonStyle.contentStyle.line.record}`,
			about: '',
			default: '',
		},
	},
	subTitleSideStyle: {
		normal: {
			record: `${commonStyle.subTitleSideStyle.line.record}`,
			about: '',
			default: '',
		},
		line: {
			record: `${commonStyle.subTitleSideStyle.line.record}`,
			about: '',
			default: '',
		},
	},
};
