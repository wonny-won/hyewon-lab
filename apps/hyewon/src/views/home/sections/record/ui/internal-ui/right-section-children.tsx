/** @format */

import ListUI from '@/components/list-ui/ui/list-ui';

const RightSectionChildren = (data: any) => {
	return <ListUI direction='virtical' listMap={data.data.summary} />;
};

export default RightSectionChildren;
