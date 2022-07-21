module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'scissors-start': 'hsl(39, 89%, 49%)',
				'scissors-end': 'hsl(40, 84%, 53%)',
				'paper-start': 'hsl(230, 89%, 62%)',
				'paper-end': 'hsl(230, 89%, 65%)',
				'rock-start': 'hsl(349, 71%, 52%)',
				'rock-end': 'hsl(349, 70%, 56%)',
				'lizard-start': 'hsl(261, 73%, 60%)',
				'lizard-end': 'hsl(261, 72%, 63%)',
				'spock-start': 'hsl(189, 59%, 53%)',
				'spock-end': 'hsl(189, 58%, 57%)',
				'dark-text': 'hsl(229, 25%, 31%)',
				'score-text': 'hsl(229, 64%, 46%)',
				'header-outline': 'hsl(217, 16%, 45%)',
				'background-start': 'hsl(214, 47%, 23%)',
				'background-end': 'hsl(237, 49%, 15%)',
			},
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(circle at center, var(--tw-gradient-stops))',
				'gradient-radial-at-t':
					'radial-gradient(circle at top, var(--tw-gradient-stops))',
				'gradient-radial-at-b':
					'radial-gradient(circle at bottom, var(--tw-gradient-stops))',
				'gradient-radial-at-l':
					'radial-gradient(circle at left, var(--tw-gradient-stops))',
				'gradient-radial-at-r':
					'radial-gradient(circle at right, var(--tw-gradient-stops))',
				'gradient-radial-at-tl':
					'radial-gradient(circle at top left, var(--tw-gradient-stops))',
				'gradient-radial-at-tr':
					'radial-gradient(circle at top right, var(--tw-gradient-stops))',
				'gradient-radial-at-bl':
					'radial-gradient(circle at bottom left, var(--tw-gradient-stops))',
				'gradient-radial-at-br':
					'radial-gradient(circle at bottom right, var(--tw-gradient-stops))',
			},
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0',
			2: '2px',
			3: '3px',
			4: '4px',
			6: '6px',
			8: '8px',
		},
		plugins: [],
	},
};
