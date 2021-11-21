import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	attributify: true,
	darkMode: 'class',
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['node_modules', '.git', '.next'],
	},
	shortcuts: {
		'default-focus': 'focus:(outline-none ring-4 ring-offset-4 ring-blue-500)',
		'default-transition': 'transition ease-in-out duration-300',
	},
	theme: {
		extend: {
			colors: {
				gray: {
					50: '#f9fafb',
					100: '#eaeaeb',
					200: '#cacbcd',
					300: '#a7a9ac',
					400: '#696c71',
					500: '#282d34',
					600: '#24292f',
					700: '#181b20',
					800: '#121518',
					900: '#0c0e10',
				},
			},
		},
	},
});
