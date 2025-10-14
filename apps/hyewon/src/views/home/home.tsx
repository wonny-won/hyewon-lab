/** @format */
import { Button, Typography, Tags } from '@hyewon/design-system';

const Home = () => {
	return (
		<div>
			<div className='flex flex-col gap-3 my-5'>
				<div className='flex gap-2'>
					<Tags tagTxt='우왕' type='normal' size='default' variants='primary' />
					<Tags tagTxt='우왕' type='normal' size='default' variants='secondary' />
					<Tags tagTxt='우왕' type='normal' size='default' variants='outline' />
					<Tags tagTxt='우왕' type='normal' size='large' variants='primary' />
					<Tags tagTxt='우왕' type='normal' size='large' variants='secondary' />
					<Tags tagTxt='우왕' type='normal' size='large' variants='outline' />
				</div>

				<div className='flex gap-2'>
					<Tags tagTxt='우왕' type='negative' size='default' variants='primary' />
					<Tags tagTxt='우왕' type='negative' size='default' variants='secondary' />
					<Tags tagTxt='우왕' type='negative' size='default' variants='outline' />
					<Tags tagTxt='우왕' type='negative' size='large' variants='primary' />
					<Tags tagTxt='우왕' type='negative' size='large' variants='secondary' />
					<Tags tagTxt='우왕' type='negative' size='large' variants='outline' />
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<div className='flex gap-1'>
					<Button variants='primary' size='large' status='default' />
					<Button variants='primary' size='default' status='active' />
					<Button variants='primary' size='small' status='disabled' />
				</div>

				<div className='flex gap-1'>
					<Button variants='secondary' size='large' status='default' />
					<Button variants='secondary' size='default' status='active' />
					<Button variants='secondary' size='small' status='disabled' />
				</div>

				<div className='flex gap-1'>
					<Button variants='teriary' size='large' status='default' />
					<Button variants='teriary' size='default' status='active' />
					<Button variants='teriary' size='small' status='disabled' />
				</div>

				<div className='flex gap-1'>
					<Button variants='neutral' size='large' status='default' />
					<Button variants='neutral' size='default' status='active' />
					<Button variants='neutral' size='small' status='disabled' />
				</div>

				<div className='flex gap-1'>
					<Button variants='negative' size='large' status='default' />
					<Button variants='negative' size='default' status='active' />
					<Button variants='negative' size='small' status='disabled' />
				</div>

				<div className='flex gap-1'>
					<Button variants='outline' size='large' status='default' />
					<Button variants='outline' size='default' status='active' />
					<Button variants='outline' size='small' status='disabled' />
				</div>

				<div className='flex gap-1'>
					<Button variants='chips' size='large' status='default' />
					<Button variants='chips' size='default' status='active' />
					<Button variants='chips' size='small' status='disabled' />
				</div>
				<div className='flex gap-1'>
					<Button variants='chips' size='large' status='default' />
					<Button variants='chips' size='default' status='active' />
					<Button variants='chips' size='small' status='disabled' />
				</div>
			</div>

			<Typography variants='display-l' color='text-core-typo-primary'>
				타이포 그래피
			</Typography>
			<Typography variants='display-m' color='text-core-typo-second'>
				타이포 그래피
			</Typography>
			<Typography variants='display-s' color='text-core-typo-third'>
				타이포 그래피1
			</Typography>
			<Typography variants='heading-l' color='text-core-typo-error'>
				타이포 그래피
			</Typography>
			<Typography variants='heading-m' color='text-core-typo-brand'>
				타이포 그래피
			</Typography>
			<Typography variants='heading-s' color='text-core-typo-normal'>
				타이포 그래피
			</Typography>
			<Typography variants='body-l-strong'>타이포 그래피</Typography>
			<Typography variants='body-l'>타이포 그래피</Typography>
			<Typography variants='body-m-strong'>타이포 그래피</Typography>
			<Typography variants='body-m'>타이포 그래피</Typography>
			<Typography variants='body-s-strong'>타이포 그래피</Typography>
			<Typography variants='body-s'>타이포 그래피</Typography>
			<Typography variants='body-xs-strong'>타이포 그래피</Typography>
		</div>
	);
};

export default Home;
