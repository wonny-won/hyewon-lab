/** @format */

import { contactRoot, contactMeComment } from '@/commons/apis/sections/contact';
import ListUI from '@/components/list-ui/list-ui';
import { Typography } from '@hyewon/design-system';

const ContactMe = () => {
	return (
		<>
			<Typography as='h2' variants='display-l'>
				{contactMeComment.main}
			</Typography>
			<Typography
				as='p'
				variants='body-l-strong'
				className='text-center whitespace-pre-line text-core-neutral-300/80 py-3'>
				{contactMeComment.sub}
			</Typography>
			<div className='pt-8'>
				<ListUI direction='horizontal' listMap={contactRoot} />
			</div>
		</>
	);
};

export default ContactMe;
