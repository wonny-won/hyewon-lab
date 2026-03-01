/** @format */

'use client';

import { useEffect } from 'react';

export function RegisterSW() {
	useEffect(() => {
		navigator.serviceWorker.register('/sw.js');
	}, []);

	return null;
}
