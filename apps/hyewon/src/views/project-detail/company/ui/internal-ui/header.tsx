/** @format */

import { Icons, Tags, Typography } from '@hyewon/design-system';
import Navigation from './nav';

const Header = ({ data, onClickOpenNewWindow }: { data: any; onClickOpenNewWindow: (compayUrl: string) => void }) => {
	return (
		<header>
			<Navigation />
			<div className='px-6 max-sm:px-0'>
				<button className='max-w-fit' onClick={() => onClickOpenNewWindow(data?.companyUrl)}>
					<Typography
						as='h1'
						variants='display-l'
						className='pb-5 flex gap-0.5 hover:text-core-green-300 hover:cursor-pointer group max-sm:text-display-m'>
						{data?.company || '회사명'}
						<p className='pt-1.5 group-hover:pt-1 group-hover:pl-1'>
							<Icons iconName='ArrowUpRight' />
						</p>
					</Typography>
				</button>

				<div className='border-l-[2px] border-core-green-300 pl-4 ml-1'>
					<Typography as='p' variants='label-xl'>
						{data?.period}
						<br />
						<span className='pb-4'>
							{data?.position}
							<br />
							{data?.coreProject || '진행 프로젝트'}
						</span>
					</Typography>
					<ul className='flex gap-2 pt-3'>
						{data?.mainStack?.map((i, idx) => {
							return (
								<li key={i + idx}>
									<Tags size='large' variants='liquidChips' type='normal' tagTxt={i} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
