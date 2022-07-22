export const SvgStyles = () => (
	<svg width={0} height={0}>
		<linearGradient id='rock-gradient' x1='0%' y1='100%' x2='0%' y2='0%'>
			<stop offset='0%' stopColor='hsl(349, 71%, 52%)' />
			<stop offset='100%' stopColor='hsl(349, 70%, 56%)' />
		</linearGradient>
		<linearGradient id='paper-gradient' x1='0%' y1='100%' x2='0%' y2='0%'>
			<stop offset='0%' stopColor='hsl(230, 89%, 62%)' />
			<stop offset='100%' stopColor='hsl(230, 89%, 65%)' />
		</linearGradient>
		<linearGradient id='scissors-gradient' x1='0%' y1='100%' x2='0%' y2='0%'>
			<stop offset='0%' stopColor='hsl(39, 89%, 49%)' />
			<stop offset='100%' stopColor='hsl(40, 84%, 53%)' />
		</linearGradient>
		<filter id='inset-highlight'>
			{/* Shadow offset */}
			<feOffset dx='0' dy='5' />

			{/* Shadow blur */}
			<feGaussianBlur stdDeviation='0' result='offset-blur' />

			{/* Invert drop shadow to make an inset shadow */}
			<feComposite
				operator='out'
				in='SourceGraphic'
				in2='offset-blur'
				result='inverse'
			/>

			{/* Cut color inside shadow */}
			<feFlood floodColor='black' floodOpacity='.35' result='color' />
			<feComposite operator='in' in='color' in2='inverse' result='shadow' />

			{/* Placing shadow over element */}
			<feComposite operator='over' in='shadow' in2='SourceGraphic' />
		</filter>
		<filter id='inset-shadow'>
			{/* Shadow offset */}
			<feOffset dx='0' dy='-5' />

			{/* Shadow blur */}
			<feGaussianBlur stdDeviation='0' result='offset-blur' />

			{/* Invert drop shadow to make an inset shadow */}
			<feComposite
				operator='out'
				in='SourceGraphic'
				in2='offset-blur'
				result='inverse'
			/>

			{/* Cut color inside shadow */}
			<feFlood floodColor='black' floodOpacity='.5' result='color' />
			<feComposite operator='in' in='color' in2='inverse' result='shadow' />

			{/* Placing shadow over element */}
			<feComposite operator='over' in='shadow' in2='SourceGraphic' />
		</filter>
	</svg>
);
