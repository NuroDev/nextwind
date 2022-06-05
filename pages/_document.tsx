import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<body className="antialiased m-0 p-0 bg-gray-50 dark:bg-gray-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
