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
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
