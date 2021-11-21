import { ThemeProvider } from 'next-themes';

import 'windi.css';

import { ThemeType } from '~/types';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme={ThemeType.SYSTEM}
			themes={Object.values(ThemeType)}
		>
			<div className="antialiased m-0 p-0 bg-gray-50 dark:bg-gray-900">
				<Component {...pageProps} />
			</div>
		</ThemeProvider>
	);
}
