module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.vue',
		'./src/**/*.ts',
	],
  content: [],
	important: true,
  theme: {
    extend: {
			colors: {
				primary: {
					bright: 'var(--ion-color-primary-bright)',
					dark: 'var(--ion-color-primary-dark)'
				},
				secondary: {
					bright: 'var(--ion-color-secondary)',
					dark: 'var(--ion-color-primary)'
				},
				dark: 'var(--ion-color-dark)'
			},
			sizes: {
				'input': '20px'
			},
			fontSize: {
				'xs': '.75rem'
			}
		},
		fontFamily: {
			'OpenSansBold': ['OpenSansBold', 'sans-serif']
		}
  },
  plugins: [],
}
