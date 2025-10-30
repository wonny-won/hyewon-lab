/** @format */

const commonStyle = {
	sectionCardStyle: {
		normal: {
			record: 'w-full flex flex-col gap-1 overflow-hidden transition-[max-height] duration-600 ease-in-out',
			about: 'w-full flex flex-col',
			default: 'w-full bg-core-gray-50 rounded-[20px] flex flex-col',
		},
		line: {
			record: 'w-full flex flex-col gap-4 overflow-hidden transition-[max-height] py-10 duration-600 ease-in-out border-t-[1px] border-solid border-core-neutral-700',
			about: 'w-full flex flex-col',
			default: 'w-full bg-core-gray-50 rounded-[20px] flex flex-col',
		},
		liquid: {
			record: 'w-full flex flex-col px-8 pt-5 pb-2 overflow-hidden transition-[max-height] duration-600 ease-in-out pointer-events-auto rounded-[20px] bg-[radial-gradient(800px_800px_at_-5%_-5%,rgba(10,180,255,0.15),transparent_30%),radial-gradient(600px_600px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_1%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_1%)] [background-position:0%_0%,left,top] [background-size:auto,1.5px_100%,100%_3px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_10px_20px_rgba(0,0,0,0.45)] backdrop-blur-[5px] backdrop-brightness-[1.5]',
			about: 'w-full flex flex-col',
			default:
				'w-full flex flex-col p-5 overflow-hidden transition-[max-height] duration-600 ease-in-out pointer-events-auto rounded-[20px] bg-[radial-gradient(800px_800px_at_-5%_-5%,rgba(10,180,255,0.15),transparent_30%),radial-gradient(600px_600px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_1%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_1%)] [background-position:0%_0%,left,top] [background-size:auto,1.5px_100%,100%_3px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_10px_20px_rgba(0,0,0,0.45)] backdrop-blur-[5px] backdrop-brightness-[1.5]',
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
		liquid: {
			record: 'flex gap-6',
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
		liquid: {
			record: 'flex flex-col gap-2 w-[27%] shrink-0',
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
		liquid: {
			record: `${commonStyle.sectionCardStyle.liquid.record} max-h-[2000px] bg-[radial-gradient(1800px_1800px_at_-15%_-15%,rgba(10,180,255,0.15),transparent_30%),radial-gradient(1600px_90000px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_0.8%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_0.3%)] [background-position:0%_0%,left,top] [background-size:auto,1px_100%,100%_1px]`,
			about: `${commonStyle.sectionCardStyle.liquid.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.liquid.default} h-fit`,
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
		liquid: {
			record: `${commonStyle.contentStyle.liquid.record} overflow-hidden`,
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
		liquid: {
			record: `${commonStyle.subTitleSideStyle.liquid.record} overflow-hidden `,
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
		liquid: {
			record: `${commonStyle.sectionCardStyle.liquid.record} max-h-[220px]`,
			about: `${commonStyle.sectionCardStyle.liquid.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.liquid.default} h-fit`,
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
		liquid: {
			record: `${commonStyle.contentStyle.line.record}`,
			about: '',
			default: '',
		},
	},
	subTitleSideStyle: {
		normal: {
			record: `${commonStyle.subTitleSideStyle.liquid.record}`,
			about: '',
			default: '',
		},
		line: {
			record: `${commonStyle.subTitleSideStyle.line.record}`,
			about: '',
			default: '',
		},
		liquid: {
			record: `${commonStyle.subTitleSideStyle.liquid.record}`,
			about: '',
			default: '',
		},
	},
};
