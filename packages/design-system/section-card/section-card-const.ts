/** @format */

const commonStyle = {
	sectionCardStyle: {
		normal: {
			record: 'w-full flex flex-col gap-1 overflow-hidden transition-[max-height] duration-600 ease-in-out',
			about: 'w-full flex flex-col',
			default: 'w-full bg-core-gray-50 rounded-[20px] flex flex-col',
			troubleshooting:
				'w-full flex flex-col gap-1 overflow-hidden transition-[max-height] duration-600 ease-in-out',
		},
		line: {
			record: 'w-full flex flex-col gap-4 overflow-hidden transition-[max-height] py-10 duration-600 ease-in-out border-t-[1px] border-solid border-core-neutral-700',
			about: 'w-full flex flex-col',
			default: 'w-full bg-core-gray-50 rounded-[20px] flex flex-col',
			troubleshooting:
				'w-full flex flex-col gap-4 overflow-hidden transition-[max-height] py-10 duration-600 ease-in-out border-t-[1px] border-solid border-core-neutral-700',
		},
		liquid: {
			record: 'w-fullhover:cursor-pointer flex flex-col shrink-0 max-lg:px-0 px-10 pt-10 pb-15 overflow-hidden  transition-transform duration-600 ease-in-out pointer-events-auto rounded-[20px] bg-[radial-gradient(1200px_1700px_at_10%_30%,rgba(10,180,255,0.27),transparent_35%),radial-gradient(600px_600px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.48),transparent_1%),linear-gradient(180deg,rgba(255,255,255,0.48),transparent_1%)] [background-position:0%_0%,left,top] [background-size:auto,2px_100%,100%_3px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),inset_0_10px_12px_-10px_rgba(0,0,0,0.95),inset_10px_0_12px_-10px_rgba(0,0,0),0_10px_20px_rgba(0,0,0,0.55),0_-12px_17px_-12px_rgba(255,255,255,0.3),inset_-6px_0_9px_-4px_rgba(10,180,255,0.48)] border-[0.5px] border-[rgba(10,180,255,0.7)] border-t-[1px] border-t-[rgba(10,180,255,0.8)] border-r-[1.5px] border-r-[rgba(10,180,255,0.4)] backdrop-blur-[5px] transform-gpu will-change-transform hover:-translate-y-1 hover:scale-[1.01]',
			about: 'w-full flex flex-col p-5 overflow-hidden transition-[max-height] duration-600 ease-in-out pointer-events-auto rounded-[32px] bg-[radial-gradient(800px_800px_at_25%_30%,rgba(10,180,255,0.27),transparent_35%),radial-gradient(600px_600px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.48),transparent_1%),linear-gradient(180deg,rgba(255,255,255,0.48),transparent_1%)] [background-position:0%_0%,left,top] [background-size:auto,2px_100%,100%_3px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),inset_0_10px_12px_-10px_rgba(0,0,0,0.95),inset_10px_0_12px_-10px_rgba(0,0,0),0_10px_20px_rgba(0,0,0,0.55),0_-12px_17px_-12px_rgba(255,255,255,0.3),inset_-6px_0_9px_-4px_rgba(10,180,255,0.48)] border-[0.5px] border-[rgba(10,180,255,0.7)] border-t-[1px] border-t-[rgba(10,180,255,0.8)] border-r-[1.5px] border-r-[rgba(10,180,255,0.4)] backdrop-blur-[5px]',
			default:
				'w-full flex flex-col p-10 transition-[max-height] duration-600 ease-in-out pointer-events-auto rounded-[32px] bg-[radial-gradient(800px_800px_at_25%_30%,rgba(10,180,255,0.27),transparent_35%),radial-gradient(600px_600px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.48),transparent_1%),linear-gradient(180deg,rgba(255,255,255,0.48),transparent_1%)] [background-position:0%_0%,left,top] [background-size:auto,2px_100%,100%_3px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),inset_0_10px_12px_-10px_rgba(0,0,0,0.95),inset_10px_0_12px_-10px_rgba(0,0,0),0_10px_20px_rgba(0,0,0,0.55),0_-12px_17px_-12px_rgba(255,255,255,0.3),inset_-6px_0_9px_-4px_rgba(10,180,255,0.48)] border-[0.5px] border-[rgba(10,180,255,0.7)] border-t-[1px] border-t-[rgba(10,180,255,0.8)] border-r-[1.5px] border-r-[rgba(10,180,255,0.4)] backdrop-blur-[5px]',
			troubleshooting:
				'flex px-5 pt-8 pb-5 overflow-hidden transition-[max-height] duration-600 ease-in-out pointer-events-auto rounded-[20px] bg-[radial-gradient(2000px_2000px_at_15%_30%,rgba(10,180,255,0.27),transparent_35%),radial-gradient(600px_600px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.48),transparent_1%),linear-gradient(180deg,rgba(255,255,255,0.48),transparent_1%)] [background-position:0%_0%,left,top] [background-size:auto,2px_100%,100%_3px] bg-no-repeat shadow-[inset_0_1px_1px_rgba(255,255,255,0.28),inset_0_10px_12px_-10px_rgba(0,0,0,0.95),inset_10px_0_12px_-10px_rgba(0,0,0),0_10px_20px_rgba(0,0,0,0.55),0_-12px_17px_-12px_rgba(255,255,255,0.3),inset_-6px_0_9px_-4px_rgba(10,180,255,0.48)] border-[0.5px] border-[rgba(10,180,255,0.7)] border-t-[1px] border-t-[rgba(10,180,255,0.8)] border-r-[1.5px] border-r-[rgba(10,180,255,0.4)] backdrop-blur-[5px]',
		},
	},
	contentStyle: {
		normal: {
			record: 'flex gap-15',
			about: '',
			default: '',
			troubleshooting: 'flex gap-15 max-w-[200px]',
		},
		line: {
			record: 'flex gap-15',
			about: '',
			default: '',
			troubleshooting: 'flex gap-15',
		},
		liquid: {
			record: 'w-full flex gap-15 max-sm:px-3 px-5 justify-around',
			about: '',
			default: '',
			troubleshooting: 'flex gap-10 w-full',
		},
	},
	subTitleSideStyle: {
		normal: {
			record: 'w-[25%]',
			about: '',
			default: '',
			troubleshooting: '',
		},
		line: {
			record: 'w-[25%]',
			about: '',
			default: '',
			troubleshooting: 'w-[15%]',
		},
		liquid: {
			record: 'shrink-0 w-fit max-h-[400px]',
			about: '',
			default: '',
			troubleshooting: 'hidden',
		},
	},
};

export const openClassStyle = {
	sectionCardStyle: {
		normal: {
			record: `${commonStyle.sectionCardStyle.line.record} max-h-[2000px]`,
			about: `${commonStyle.sectionCardStyle.line.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.line.default} h-fit`,
			troubleshooting: `${commonStyle.sectionCardStyle.line.troubleshooting} max-h-[2000px]`,
		},
		line: {
			record: `${commonStyle.sectionCardStyle.line.record} max-h-[2000px]`,
			about: `${commonStyle.sectionCardStyle.line.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.line.default} h-fit`,
			troubleshooting: `${commonStyle.sectionCardStyle.line.troubleshooting} max-h-[2000px]`,
		},
		liquid: {
			record: `${commonStyle.sectionCardStyle.liquid.record} max-h-[2000px] bg-[radial-gradient(1800px_1800px_at_-15%_-15%,rgba(10,180,255,0.15),transparent_30%),radial-gradient(1600px_90000px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_0.8%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_0.3%)] [background-position:0%_0%,left,top] [background-size:auto,1px_100%,100%_1px]`,
			about: `${commonStyle.sectionCardStyle.liquid.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.liquid.default} h-fit`,
			troubleshooting: `${commonStyle.sectionCardStyle.liquid.troubleshooting} max-h-[2000px] bg-[radial-gradient(1800px_1800px_at_-15%_-15%,rgba(10,180,255,0.15),transparent_30%),radial-gradient(1600px_90000px_at_0%_100%,rgba(120,180,255,0.48),rgba(120,180,255,0)_60%),linear-gradient(90deg,rgba(10,180,255,0.48),transparent_0.8%),linear-gradient(180deg,rgba(10,180,255,0.48),transparent_0.3%)] [background-position:0%_0%,left,top] [background-size:auto,1px_100%,100%_1px]`,
		},
	},
	contentStyle: {
		line: {
			record: `${commonStyle.contentStyle.line.record} overflow-hidden`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.contentStyle.line.troubleshooting} overflow-hidden`,
		},
		normal: {
			record: `${commonStyle.contentStyle.line.record} overflow-hidden`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.contentStyle.line.troubleshooting} overflow-hidden`,
		},
		liquid: {
			record: `${commonStyle.contentStyle.liquid.record} overflow-hidden`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.contentStyle.liquid.troubleshooting} overflow-hidden`,
		},
	},
	subTitleSideStyle: {
		line: {
			record: `${commonStyle.subTitleSideStyle.line.record} overflow-hidden`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.subTitleSideStyle.line.troubleshooting} overflow-hidden`,
		},
		normal: {
			record: `${commonStyle.subTitleSideStyle.line.record} overflow-hidden`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.subTitleSideStyle.line.troubleshooting} overflow-hidden`,
		},
		liquid: {
			record: `${commonStyle.subTitleSideStyle.liquid.record} `,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.subTitleSideStyle.liquid.troubleshooting} overflow-hidden`,
		},
	},
};

export const notOpenClassStyle = {
	sectionCardStyle: {
		normaml: {
			record: `${commonStyle.sectionCardStyle.line.record} max-h-[300px] max-[1180px]:max-h-[350px] max-[440px]:max-h-[420px] max-[400px]:max-h-[450px]`,
			about: `${commonStyle.sectionCardStyle.line.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.line.default} h-fit`,
			troubleshooting: `${commonStyle.sectionCardStyle.line.troubleshooting} max-h-[300px] max-[1180px]:max-h-[350px] max-[440px]:max-h-[450px]`,
		},
		line: {
			record: `${commonStyle.sectionCardStyle.line.record} max-h-[300px] max-[1180px]:max-h-[350px] max-[440px]:max-h-[420px] max-[400px]:max-h-[450px]`,
			about: `${commonStyle.sectionCardStyle.line.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.line.default} h-fit`,
			troubleshooting: `${commonStyle.sectionCardStyle.line.troubleshooting} max-h-[300px] max-[1180px]:max-h-[350px] max-[440px]:max-h-[450px]`,
		},
		liquid: {
			record: `${commonStyle.sectionCardStyle.liquid.record} h-fit`,
			about: `${commonStyle.sectionCardStyle.liquid.about} h-fit`,
			default: `${commonStyle.sectionCardStyle.liquid.default} h-fit`,
			troubleshooting: `${commonStyle.sectionCardStyle.liquid.troubleshooting} `,
		},
	},
	contentStyle: {
		normal: {
			record: `${commonStyle.contentStyle.line.record}`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.contentStyle.line.troubleshooting}`,
		},
		line: {
			record: `${commonStyle.contentStyle.line.record}`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.contentStyle.line.troubleshooting}`,
		},
		liquid: {
			record: `${commonStyle.contentStyle.liquid.record}`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.contentStyle.liquid.troubleshooting}`,
		},
	},
	subTitleSideStyle: {
		normal: {
			record: `${commonStyle.subTitleSideStyle.liquid.record}`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.subTitleSideStyle.liquid.troubleshooting}`,
		},
		line: {
			record: `${commonStyle.subTitleSideStyle.line.record}`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.subTitleSideStyle.line.troubleshooting}`,
		},
		liquid: {
			record: `${commonStyle.subTitleSideStyle.liquid.record}`,
			about: '',
			default: '',
			troubleshooting: `${commonStyle.subTitleSideStyle.liquid.troubleshooting}`,
		},
	},
};
