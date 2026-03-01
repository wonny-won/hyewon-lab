/** @format */

'use client';

import { useEffect, useState } from 'react';

type BIPEvent = Event & {
	prompt: () => Promise<void>;
	userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export default function InstallButton() {
	const [deferred, setDeferred] = useState<BIPEvent | null>(null);

	useEffect(() => {
		const handler = (e: Event) => {
			e.preventDefault(); // ✅ 브라우저 기본 미니바 UI를 막고, 우리가 버튼으로 설치
			setDeferred(e as BIPEvent);
			console.log('[PWA] beforeinstallprompt fired');
		};

		window.addEventListener('beforeinstallprompt', handler);
		return () => window.removeEventListener('beforeinstallprompt', handler);
	}, []);

	if (!deferred) return null;

	return (
		<button
			onClick={async () => {
				await deferred.prompt();
				const choice = await deferred.userChoice;
				console.log('[PWA] userChoice', choice.outcome);
				setDeferred(null);
			}}
			style={{
				position: 'fixed',
				right: 16,
				bottom: 16,
				zIndex: 9999,
				padding: '10px 14px',
				borderRadius: 10,
				border: '1px solid #ddd',
				background: 'white',
			}}>
			Install shak
		</button>
	);
}
