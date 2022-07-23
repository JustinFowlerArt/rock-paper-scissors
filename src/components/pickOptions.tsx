import { Icon } from './icon';

interface Props {
	bonus: boolean;
	handlePicked: (picked: string) => void;
}

export const PickOptions = ({ bonus, handlePicked }: Props) => {
	return (
		<div className='relative flex flex-wrap justify-around items-center w-96 lg:scale-[1.75] lg:origin-top'>
			{bonus ? (
				<div className='flex flex-wrap justify-center'>
					<div className='relative scale-75 h-min z-10'>
						<Icon name='scissors' handlePicked={handlePicked} />
					</div>
					<div className='relative flex bottom-10 space-x-44 h-min scale-75 z-10'>
						<Icon name='spock' handlePicked={handlePicked} />
						<Icon name='paper' handlePicked={handlePicked} />
					</div>
					<div className='relative flex bottom-8 space-x-16 h-min scale-75 z-10'>
						<Icon name='lizard' handlePicked={handlePicked} />
						<Icon name='rock' handlePicked={handlePicked} />
					</div>
				</div>
			) : (
				<>
					<Icon name='paper' handlePicked={handlePicked} />
					<Icon name='scissors' handlePicked={handlePicked} />
					<Icon name='rock' handlePicked={handlePicked} />
				</>
			)}
			<img
				className='absolute h-3/5 top-16'
				src={`/images/${!bonus ? 'bg-triangle' : 'bg-pentagon'}.svg`}
			></img>
		</div>
	);
};
