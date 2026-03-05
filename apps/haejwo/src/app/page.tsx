/** @format */

import { InputField } from '@hyewon/design-system';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='w-full flex justify-center font-sans dark:bg-black'>
			<InputField iconName='Search' />
		</div>
	);
}
