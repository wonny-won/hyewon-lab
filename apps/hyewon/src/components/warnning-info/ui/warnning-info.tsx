/** @format */

import { Icons, Typography } from '@hyewon/design-system';

const WarnningInfo = ({ infoTxt }: { infoTxt: { main: string; sub: string | null } }) => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-fit p-30 gap-4'>
			<Icons iconName='InfoIcon' strokeWidth='1.2' size='35' color='#8e9799' />
			<div className='flex flex-col gap-1 items-center'>
				<Typography variants='label-l' color='text-neutral-400'>
					{infoTxt.main}
				</Typography>
				<Typography variants='body-s' color='text-neutral-400'>
					{infoTxt.sub}
				</Typography>
			</div>
		</div>
	);
};
export default WarnningInfo;
