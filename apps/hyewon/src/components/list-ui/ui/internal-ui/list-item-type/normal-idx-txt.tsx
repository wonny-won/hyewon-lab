/** @format */

const NormalIdxTxtItem = ({ finalListClassName, isNeedtitleIdx, titleIdx, onClick, listItem }) => {
	return (
		<div
			className={`${finalListClassName} flex-row items-center ${
				isNeedtitleIdx ? 'mt-7' : typeof titleIdx === 'number' && titleIdx === 0 ? '' : 'mt-10'
			}`}
			onClick={onClick}>
			{isNeedtitleIdx && typeof titleIdx === 'number' && (
				<span className='text-label-s text-core-green-300 mr-2 font-extrabold'>{++titleIdx}. </span>
			)}
			{listItem}
		</div>
	);
};

export default NormalIdxTxtItem;
