import { Icon } from './icon';
import { Placeholder } from './placeholder';
import { Winner } from './winner';

interface Props {
	winner: string;
	playerPicked: string;
	housePicked: string;
	playAgain: () => void;
}

export const PickOutcome = ({
	winner,
	playerPicked,
	housePicked,
	playAgain,
}: Props) => {
	return (
		<div className='relative flex flex-wrap justify-around h-72 w-96 text-gray-200 text-sm tracking-widest lg:origin-top lg:justify-center lg:text-xs lg:scale-[1.75] lg:h-auto lg:w-auto lg:space-x-4 lg:items-end xl:scale-[2.25]'>
			<div className='flex flex-col items-center'>
				<div className='relative lg:order-2'>
					{winner === 'player' && (
						<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 bg-gradient-radial from-white opacity-10 rounded-full'></div>
					)}
					<Icon name={playerPicked} />
				</div>
				<span className='mt-4 lg:mt-0 lg:mb-6 lg:order-1'>YOU PICKED</span>
			</div>

			<div className='flex flex-col items-center lg:order-3'>
				{!housePicked ? (
					<Placeholder />
				) : (
					<div className='relative lg:order-2'>
						{winner === 'house' && (
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 bg-gradient-radial from-gray-200 opacity-10 rounded-full'></div>
						)}
						<Icon name={housePicked} />
					</div>
				)}
				<span className='mt-4 lg:mt-0 lg:mb-6 lg:order-1'>
					THE HOUSE PICKED
				</span>
			</div>
			{winner && <Winner winner={winner} playAgain={playAgain} />}
		</div>
	);
};
