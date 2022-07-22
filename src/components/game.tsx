import { useEffect, useState } from 'react';
import { Header } from './header';
import { Icon } from './icon';
import { Placeholder } from './placeholder';

export const Game = () => {
	const [score, setScore] = useState(0);
	const [playerPicked, setPlayerPicked] = useState('');
	const [housePicked, setHousePicked] = useState('');
	const [winner, setWinner] = useState('');

	// TODO: Store and retrieve score from local storage
	// TODO: Add rules modal
	// TODO: Add bonus picks
	useEffect(() => {
		if (playerPicked && housePicked) {
			if (
				(playerPicked === 'paper' && housePicked === 'rock') ||
				(playerPicked === 'scissors' && housePicked === 'paper') ||
				(playerPicked === 'rock' && housePicked === 'scissors')
			) {
				setWinner('player');
			} else if (playerPicked === housePicked) {
				setWinner('draw');
			} else {
				setWinner('house');
			}

			winner === 'player'
				? setScore(score => score + 1)
				: winner === 'house'
				? setScore(score => score - 1)
				: undefined;
		}
	}, [playerPicked, housePicked, winner]);

	const handleHousePicked = () => {
		const random = Math.ceil(Math.random() * 3);
		switch (random) {
			case 1:
				setHousePicked(() => 'rock');
				break;
			case 2:
				setHousePicked(() => 'scissors');
				break;
			case 3:
				setHousePicked(() => 'paper');
				break;
			default:
				break;
		}
	};

	const playAgain = () => {
		setPlayerPicked('');
		setHousePicked('');
		setWinner('');
	};

	const handlePicked = (picked: string) => {
		setPlayerPicked(picked);
		setTimeout(() => {
			handleHousePicked();
		}, 1000);
	};

	const options = ['paper', 'scissors', 'rock'];

	return (
		<>
			<Header score={score} />

			{!playerPicked ? (
				<div className='relative flex flex-wrap justify-around items-center h-72 w-96 lg:scale-[1.75] lg:origin-top xl:scale-[2]'>
					{options.map(option => (
						<Icon key={option} name={option} handlePicked={handlePicked} />
					))}
					<img
						className='absolute h-3/5 top-16'
						src='/images/bg-triangle.svg'
					></img>
				</div>
			) : (
				<div className='relative flex flex-wrap justify-around h-72 w-96 text-gray-200 text-sm tracking-widest lg:justify-center lg:text-xs lg:scale-[1.75] lg:h-auto lg:w-auto lg:space-x-2 lg:items-end xl:scale-[2.25]'>
					<div className='flex flex-col items-center'>
						<div className='relative'>
							{winner === 'player' && (
								<div className='absolute -top-[79px] -left-[79px] h-72 w-72 bg-gradient-radial from-white opacity-10 rounded-full'></div>
							)}
							<Icon name={playerPicked} />
						</div>
						<span className='mt-4 lg:mt-0 lg:mb-6 lg:order-1'>YOU PICKED</span>
					</div>

					<div className='flex flex-col items-center lg:order-3'>
						{!housePicked ? (
							<Placeholder />
						) : (
							<div className='relative'>
								{winner === 'house' && (
									<div className='absolute -top-[79px] -left-[79px] h-72 w-72 bg-gradient-radial from-gray-200 opacity-10 rounded-full'></div>
								)}
								<Icon name={housePicked} />
							</div>
						)}
						<span className='mt-4 lg:mt-0 lg:mb-6 lg:order-1'>
							THE HOUSE PICKED
						</span>
					</div>
					{winner && (
						<div className='flex flex-col items-center space-y-4 mt-28 lg:mt-0 lg:order-2 lg:scale-[.6] lg:mb-6'>
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
					)}
				</div>
			)}

			<button className='border-2 border-gray-500 rounded-xl py-2 px-8 text-gray-300 tracking-widest lg:absolute lg:right-8 lg:bottom-8'>
				RULES
			</button>
		</>
	);
};
