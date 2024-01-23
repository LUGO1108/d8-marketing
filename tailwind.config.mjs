/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				primarioOswald:['Oswald', 'sans-serif'],
				cecundarioRoboto:['Roboto Mono', 'monospace'],
				LOGO:['Anton', 'sans-serif']
			},
			colors:{
				'azure-radiance': {
					'50': '#edfaff',
					'100': '#d6f3ff',
					'200': '#b5ebff',
					'300': '#83e1ff',
					'400': '#48ceff',
					'500': '#1eb0ff',
					'600': '#0693ff',
					'700': '#007fff',
					'800': '#0861c5',
					'900': '#0d549b',
					'950': '#0e335d',
				},
				'web-orange': {
					'50': '#fffcea',
					'100': '#fff5c5',
					'200': '#ffeb85',
					'300': '#ffda46',
					'400': '#ffc71b',
					'500': '#ffa500',
					'600': '#e27c00',
					'700': '#bb5502',
					'800': '#984208',
					'900': '#7c360b',
					'950': '#481a00',
				},
				'green-menta': {
					'50': '#e7ffe4',
					'100': '#c9ffc4',
					'200': '#98ff90',
					'300': '#56ff50',
					'400': '#00ff00',
					'500': '#00e606',
					'600': '#00b809',
					'700': '#008b07',
					'800': '#076d0d',
					'900': '#0b5c11',
					'950': '#003406',
				},
				
				
				
				
				
			}
		},
	},
	plugins: [require('tailwindcss-animated')],
}
