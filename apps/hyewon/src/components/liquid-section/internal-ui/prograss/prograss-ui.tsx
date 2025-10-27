/** @format */

interface PrograssUIProps {
	currNavIdx: number;
}

const PrograssUI = ({ currNavIdx }: PrograssUIProps) => {
	return (
		<div className='mt-2'>
			<div className='w-full h-[5px] rounded-[20px] bg-white/80' />
		</div>
	);
};
export default PrograssUI;
