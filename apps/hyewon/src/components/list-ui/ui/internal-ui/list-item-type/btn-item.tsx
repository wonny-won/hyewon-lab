/** @format */

import { useListUIContext } from '@/components/list-ui/feature/list-ui.context';
import { Icons, Tooltip } from '@hyewon/design-system';

const BtnListItem = ({ item, idx }) => {
	const { activeTooltipId, clipboardTxt, handleIconClick, getIdentifier } = useListUIContext();

	return (
		<li
			onClickCapture={!!item.id ? item.onClick : () => handleIconClick(item, getIdentifier(item, idx))}
			className='flex items-center justify-center w-[45px] h-[45px] rounded-[25px] bg-core-neutral-50/20 hover:cursor-pointer hover:bg-core-green-300/30'>
			{activeTooltipId === getIdentifier(item, idx) && !item.id ? (
				<>
					<Tooltip content={clipboardTxt} position='top' bgColor='bg-core-green-300'>
						<Icons iconName='CircleCheckIcons' size='14' color='green' />
					</Tooltip>
					<button className='hover:cursor-pointer'>{item?.icon}</button>
				</>
			) : (
				<a>{item?.icon}</a>
			)}
		</li>
	);
};

export default BtnListItem;
