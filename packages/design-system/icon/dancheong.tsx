/**
 * @format
 * @jsxImportSource react
 */

import * as React from 'react';

const DancheongFlowerIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 128 128'
		width={props.width || 24}
		height={props.height || 24}
		role='img'
		aria-label='단청 문양 꽃 아이콘'
		{...props}>
		<title>단청 문양 꽃 아이콘</title>
		<style>
			{`:root{
        --dan-red: #C0392B;
        --dan-green: #2E8B57;
        --dan-gold: #D4AF37;
        --dan-white: #FFFFFF;
        --dan-dark: #2B2B2B;
      }`}
		</style>

		<g transform='translate(0,0)'>
			<defs>
				<path id='petal' d='M64 16 C78 16 96 34 64 64 C32 34 50 16 64 16 Z' />
				<path id='petal-small' d='M64 28 C74 28 88 42 64 64 C40 42 54 28 64 28 Z' />
			</defs>

			<g fill='var(--dan-red)'>
				{[...Array(8)].map((_, i) => (
					<use key={i} href='#petal' transform={`rotate(${i * 45} 64 64)`} />
				))}
			</g>

			<g fill='var(--dan-green)' opacity='0.95'>
				{[...Array(8)].map((_, i) => (
					<use key={i} href='#petal-small' transform={`rotate(${22.5 + i * 45} 64 64)`} />
				))}
			</g>

			<g>
				<circle cx='64' cy='64' r='18' fill='var(--dan-gold)' />
				<circle cx='64' cy='64' r='12' fill='var(--dan-dark)' />
				<circle cx='64' cy='64' r='7' fill='var(--dan-gold)' />
			</g>

			<g fill='var(--dan-white)' opacity='0.9'>
				<path d='M64 48 a4 4 0 1 0 0.001 0z' />
				<path d='M64 80 a4 4 0 1 0 0.001 0z' />
			</g>
		</g>
	</svg>
);

export default DancheongFlowerIcon;
