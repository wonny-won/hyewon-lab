/** @format */

import { useListItemContext } from '@/components/list-ui/feature/list-item.context';
import { Icons } from '@hyewon/design-system';

const BulletChevoronItem = ({ item, isNeedChevoronBullet, index }) => {
	const { isOpen, setIsOpen } = useListItemContext();

	return (
		<>
			{!!isNeedChevoronBullet && (
				<div
					className={`hover: cursor-pointer flex items-center gap-1 text-label-l font-semibold ${
						!!item.isImportant ? 'text-core-green-300' : 'text-core-neutral-100'
					}`}
					onClick={() => {
						setIsOpen((prev) => prev.map((val, i) => (i === index ? !val : val)));
					}}>
					<span className='pr-0.5'>
						<Icons
							iconName='TriangleLeft'
							size='16px'
							className={`transition-transform duration-200 ${
								Array.isArray(item.children) && !!isOpen[index] ? 'rotate-90' : 'rotate-0'
							}`}
						/>
					</span>

					{item.title}
				</div>
			)}
		</>
	);
};

export default BulletChevoronItem;
