/** @format */

import React from 'react';
import DancheongFlowerIcon from './dancheong';
import GithubIcon from './github';

interface IconsProps extends React.HTMLAttributes<HTMLDivElement> {
	iconName: string;
	size?: string;
	color?: string | undefined;
	[key: string]: any;
}

const iconComponents: { [key: string]: React.ComponentType<any> } = { DancheongFlowerIcon, GithubIcon };

const Icons = ({ iconName, size = '24px', color, ...props }: IconsProps) => {
	const IconComponent = iconComponents[iconName];

	if (!IconComponent) {
		return null;
	}

	return <IconComponent width={size} height={size} {...props} />;
};

export default Icons;
