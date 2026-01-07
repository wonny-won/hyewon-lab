/** @format */

import { useParams } from 'next/navigation';

const CompanyProjectDatail = () => {
	const param = useParams();

	return (
		<>
			<div> {param?.id} 프로젝트 디테일이에요</div>
		</>
	);
};

export default CompanyProjectDatail;
