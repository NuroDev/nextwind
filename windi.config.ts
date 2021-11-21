import colors from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	attributify: true,
	darkMode: 'class',
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['node_modules', '.git', '.next'],
	},
	shortcuts: {
		'default-focus':
			'focus:(outline-none ring-4 ring-offset-4 dark:ring-offset-gray-900 ring-blue-500)',
		'default-transition': 'transition ease-in-out duration-300',
	},
	theme: {
		extend: {
			colors: {
				gray: colors.gray,
			},
		},
	},
});
