import { Footer, Grid } from '~/components';
import { Layout } from '~/layouts';

export default function Home() {
	return (
		<Layout.Basic>
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

				<Grid />
			</main>
			<Footer />
		</Layout.Basic>
	);
}
