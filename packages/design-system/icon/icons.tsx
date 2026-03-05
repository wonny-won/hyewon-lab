/** @format */

import React from 'react';
import GithubIcon from './github';
import PauseIcon from './pause';
import BackIcon from './back';
import NextIcon from './next';
import MailIcon from './mail';
import PhoneIcon from './phone';
import BlogIcon from './blog';
import DoubleArrowDownIcon from './double-arrows-down';
import DoubleArrowUpIcon from './double-arrows-up';
import ArrowUpRight from './arrow-up-right';
import CircleCheckIcons from './circle-check';
import FileDownIcon from './file-down';
import ArrowLeft from './arrow-left';
import ChevoronRight from './chevon-right';
import ChevoronDwon from './chevoron-down';
import Close from './close';
import GitBranchIcon from './git-branch';
import TriangleLeft from './tirangle-left';
import BugIcon from './bug';
import InfoIcon from './info';
import Home from './home';
import Account from './account';
import RectPlus from './rect-plus';
import Chatting from './chatting';
import DownArrowList from './down-arrow-list';
import Bell from './bell';
import Search from './search';
import PinInHouse from './pin-in-house';
import FixLocation from './fix-location';
import FootPrint from './footprint';
import Dog from './dog';
import Baby from './baby';
import Ellipsis from './ellipsis';

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
	DoubleArrowDownIcon,
	DoubleArrowUpIcon,
	ArrowUpRight,
	CircleCheckIcons,
	FileDownIcon,
	ArrowLeft,
	ChevoronRight,
	ChevoronDwon,
	Close,
	GitBranchIcon,
	TriangleLeft,
	BugIcon,
	InfoIcon,
	Home,
	Account,
	RectPlus,
	Chatting,
	DownArrowList,
	Bell,
	Search,
	PinInHouse,
	FixLocation,
	FootPrint,
	Dog,
	Baby,
	Ellipsis,
};

const Icons = ({ iconName, size = '24px', color, ...props }: IconsProps) => {
	const IconComponent = iconComponents[iconName];

	if (!IconComponent) {
		return null;
	}

	return <IconComponent size={size} color={color} {...props} />;
};

export default Icons;
