/** @format */

const BulletPointItem = ({ item, isNeedBulletPoint }) => {
	return (
		<>
			{!!isNeedBulletPoint && (
				<p
					className={`text-body-s py-0.5 whitespace-pre-line ${
						!!item.isImportant ? 'text-white/95' : 'text-core-neutral-200/90'
					}`}>
					• {item.title}
				</p>
			)}
		</>
	);
};

export default BulletPointItem;
