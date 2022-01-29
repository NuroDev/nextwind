import Head from 'next/head';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

import { ThemeType } from '~/types';

export default function Home() {
	const { theme, setTheme } = useTheme();

	const isDark = useMemo(() => {
		if (theme === ThemeType.SYSTEM) {
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		return theme === ThemeType.DARK;
	}, [theme]);

	const ITEMS = [
		{
			title: (
				<div className="flex items-center justify-start space-x-2">
					<Icon icon={isDark ? 'feather:sun' : 'feather:moon'} />
					<span>{isDark ? 'Light' : 'Dark'} Theme</span>
				</div>
			),
			description: (
				<>
					Quickly toggle between light & dark mode using{' '}
					<code className="px-2 py-1 bg-gray-100 text-gray-900 dark:(bg-gray-800 text-white) rounded-lg font-bold text-lg">
						next-themes
					</code>
				</>
			),
			onClick: () => setTheme(isDark ? 'light' : 'dark'),
			label: 'Toggle Theme',
		},
		{
			title: (
				<div className="flex items-center justify-start space-x-2">
					<Icon icon="feather:github" />
					<span>GitHub</span>
				</div>
			),
			description: 'Learn more about the project template on GitHub',
			href: 'https://nextjs.org/learn',
		},
		{
			title: (
				<div className="flex items-center justify-start space-x-2">
					{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
					<svg
						width="1155"
						height="1000"
						viewBox="0 0 1155 1000"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6"
					>
						<path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="currentColor" />
					</svg>
					<span>Deploy</span>
				</div>
			),
			description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
			href: 'https://vercel.com/new?utm_source=nuro&utm_medium=nextwind-template&utm_campaign=nextwind',
		},
	];

	return (
		<>
			<Head>
				<title>Nextwind</title>
				<meta name="description" content="Bootstrap Next.js with WindiCSS & more" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen flex flex-1 flex-col items-center justify-center py-16">
				<h1 className="m-0 leading-5 text-3xl sm:text-5xl lg:text-7xl font-bold text-center">
					Welcome to{' '}
					<a
						className="text-primary-500 no-underline rounded-lg default-transition default-focus"
						href="https://nextjs.org"
					>
						Next.js!
					</a>
				</h1>

				<p className="my-8 leading-5 text-2xl text-center text-gray-500">
					Get started by editing{' '}
					<code className="px-2 py-2 bg-gray-200 text-gray-800 dark:(bg-gray-800 text-white) rounded-lg font-bold text-lg">
						pages/index.tsx
					</code>
				</p>

				<div className="flex flex-wrap items-center justify-center max-w-sm md:max-w-4xl md:w-full">
					{ITEMS.map(({ title, description, href, onClick, label }, i) => (
						<a
							aria-label={label}
							className="max-w-sm space-y-2 m-4 p-6 text-left no-underline border-2 border-gray-200 dark:border-gray-800 hover:(text-primary-500 !border-primary-500) rounded-lg cursor-pointer default-transition default-focus"
							href={href ?? '#'}
							key={i}
							onClick={onClick}
						>
							<h2 className="flex justify-between text-2xl font-bold">
								<span>{title}</span>
								{href && <span>&rarr;</span>}
							</h2>
							<p className="text-gray-400 text-xl leading-6">{description}</p>
						</a>
					))}
				</div>
			</main>

			<footer className="flex items-center justify-center py-8 border-t-2 border-gray-200 dark:border-gray-800">
				<a
					className="flex items-center justify-center rounded-lg default-transition default-focus"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					rel="noopener noreferrer"
					target="_blank"
				>
					Powered by{' '}
					<span className="h-4 ml-0.5">
						<svg
							className="w-auto h-4"
							fill="none"
							height="1000"
							viewBox="0 0 4438 1000"
							width="4438"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z"
								fill="currentColor"
							/>
						</svg>

						{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
					</span>
				</a>
			</footer>
		</>
	);
}
