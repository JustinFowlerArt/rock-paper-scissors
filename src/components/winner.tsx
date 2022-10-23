interface Props {
	winner: string;
	playAgain: () => void;
}

export const Winner = ({ winner, playAgain }: Props) => {
	return (
		<div className='flex flex-col items-center space-y-4 mt-24 lg:mt-0 lg:order-2 lg:scale-[.6] lg:mb-6'>
			<span className='text-5xl font-bold'>
				{winner === 'player'
					? 'YOU WIN'
					: winner === 'house'
					? 'YOU LOSE'
					: 'DRAW'}
			</span>
			<button
				className='bg-gray-200 rounded-md py-3 px-16 text-dark-text tracking-widest lg:px-12 lg:py-2 hover:text-red-700'
				onClick={playAgain}
			>
				PLAY AGAIN
			</button>
		</div>
	);
};
