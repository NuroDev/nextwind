import type { AppProps } from 'next/app';

import 'windi.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="antialiased m-0 p-0">
			<Component {...pageProps} />
		</div>
	);
}
