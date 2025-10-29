/** @format */

import React from 'react';
import GithubIcon from './github';
import PauseIcon from './pause';
import BackIcon from './back';
import NextIcon from './next';
import MailIcon from './mail';
import PhoneIcon from './phone';
import BlogIcon from './blog';

interface IconsProps extends React.HTMLAttributes<HTMLDivElement> {
	iconName: string;
	size?: string;
	color?: string | undefined;
	[key: string]: any;
}

const iconComponents: { [key: string]: React.ComponentType<any> } = {
	GithubIcon,
	PauseIcon,
	BackIcon,
	NextIcon,
	MailIcon,
	PhoneIcon,
	BlogIcon,
};

const Icons = ({ iconName, size = '24px', color, ...props }: IconsProps) => {
	const IconComponent = iconComponents[iconName];

	if (!IconComponent) {
		return null;
	}

	return <IconComponent width={size} height={size} {...props} />;
};

export default Icons;
