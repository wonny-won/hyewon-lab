/** @format */
import React from 'react';

interface SkeletonProps {
	width?: number;
	height?: number;
	className?: string;
}

const SkeletonUI = ({ width, height, className = '' }: SkeletonProps) => {
	return (
		<>
			<style>{`
				@keyframes skeleton-shimmer {
					0% { background-position: -100% 0; }
					100% { background-position: 100% 0; }
				}
			`}</style>
			<div
				className={`rounded-[8px] object-contain min-w-[250px] max-sm:max-w-[280px] max-lg:max-w-[320px] min-[1450px]:max-w-[360px] bg-[linear-gradient(90deg,var(--core-neutral-200,#c4ccce)_0%,var(--core-neutral-100,#dfe6e8)_20%,var(--core-neutral-200,#c4ccce)_40%,var(--core-neutral-200,#c4ccce)_100%)] bg-[length:300%_100%] ${className}`.trim()}
				style={{
					width: `${width}px`,
					height: `${height}px`,
					animation: 'skeleton-shimmer 2s ease-in-out infinite',
				}}
			/>
		</>
	);
};

export default SkeletonUI;
