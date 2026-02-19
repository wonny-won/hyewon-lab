/** @format */
import React from 'react';

interface SkeletonProps {
	width?: number;
	height?: number;
	className?: string;
}

const SkeletonUI = ({ width = 450, height = 450, className = '' }: SkeletonProps) => {
	return (
		<>
			<style>{`
				@keyframes skeleton-shimmer {
					0% { background-position: 100% 0; }
					100% { background-position: -100% 0; }
				}
			`}</style>
			<div
				className={`rounded-[8px] overflow-hidden ${className}`.trim()}
				style={{
					width,
					height,
					background:
						'linear-gradient(90deg, var(--core-neutral-400, #8e9799) 0%, var(--core-neutral-400, #8e9799) 40%, var(--core-neutral-300, #a9b1b3) 50%, var(--core-neutral-400, #8e9799) 60%, var(--core-neutral-400, #8e9799) 100%)',
					backgroundSize: '200% 100%',
					animation: 'skeleton-shimmer 1.5s ease-in-out infinite',
				}}
			/>
		</>
	);
};

export default SkeletonUI;
