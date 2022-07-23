interface Props {
	name: string;
	handlePicked?: (picked: string) => void;
}

export const Icon = ({ name, handlePicked }: Props) => {
	return (
		<svg
			width={130}
			height={130}
			className='inner-shadow z-10'
			cursor={handlePicked ? 'pointer' : 'default'}
			onClick={
				handlePicked
					? () => {
							handlePicked(name);
					  }
					: undefined
			}
			style={{ fill: `url(#${name}-gradient)` }}
		>
			<circle r={65} cx={65} cy={65}></circle>
			<circle
				r={48}
				cx={65}
				cy={65}
				className='fill-gray-200 inner-highlight'
			></circle>

			<image
				width={`${name === 'paper' ? 42 : 45}`}
				x={`${name === 'spock' ? 45 : 42}`}
				y={`${name === 'rock' ? 45 : name === 'spock' ? 35 : 42}`}
				href={`/images/icon-${name}.svg`}
			/>
		</svg>
	);
};
