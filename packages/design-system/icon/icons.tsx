/** @format */

import React from 'react';
import DancheongFlower from './dancheong';

interface IconsProps extends React.HTMLAttributes<HTMLDivElement> {
	iconName: string;
	size?: string;
	color?: string | undefined;
	[key: string]: any;
}

const iconComponents: { [key: string]: React.ComponentType<any> } = { DancheongFlower };

const Icons = ({ iconName, size = '24px', color, ...props }: IconsProps) => {
	const IconComponent = iconComponents[iconName];

	if (!IconComponent) {
		return null;
	}

	return (
		<div className={`w-[${size}] h-[${size}]`}>
			<IconComponent width={size} height={size} {...props} />
		</div>
	);
};

export default Icons;
