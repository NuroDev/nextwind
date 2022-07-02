import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { useTheme } from 'next-themes';

import { ThemeType } from '~/types';

interface Item {
	description: string | JSX.Element;
	href?: string;
	label?: string;
	onClick?: () => void;
	title: JSX.Element;
}

const STATIC_ITEMS: Array<Item> = [
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

export function Grid() {
	const isSystemDarkScheme = useMedia('(prefers-color-scheme: dark)');
	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState(false);

	useEffect(
		() => setIsDark(theme === ThemeType.SYSTEM ? isSystemDarkScheme : theme === ThemeType.DARK),
		[isSystemDarkScheme, theme],
	);

	const items: Array<Item> = [
		...STATIC_ITEMS,
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
	];

	return (
		<div className="flex flex-wrap items-center justify-center max-w-sm md:max-w-4xl md:w-full">
			{items.map(({ title, description, href, onClick, label }, i) => (
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
	);
}
