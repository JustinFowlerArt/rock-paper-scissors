import { Game } from './components/game';
import { SvgStyles } from './components/svgStyles';

export const App = () => {
	return (
		<div className='bg-gradient-radial-at-t from-background-start to-background-end'>
			<div className='h-screen p-6 flex flex-col justify-between items-center'>
				<Game />
			</div>
			<SvgStyles />
		</div>
	);
};
