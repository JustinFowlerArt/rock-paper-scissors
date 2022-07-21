import { Header } from './header';
import { Icon } from './icon';

export const Game = () => {
	return (
		<>
			<Header />

			<div className='relative flex flex-wrap justify-around items-center h-72 w-96'>
				<Icon name='paper' />
				<Icon name='scissors' />
				<Icon name='rock' />
				<img
					className='absolute h-3/5 top-16'
					src='/images/bg-triangle.svg'
				></img>
			</div>

			<button className='border-2 border-gray-500 rounded-xl py-2 px-8 text-gray-300 tracking-widest'>
				RULES
			</button>
		</>
	);
};
