import { Game } from './components/game';
import { SvgStyles } from './components/svgStyles';

export const App = () => {
	return (
		<div className='bg-gradient-radial-at-t from-background-start to-background-end overflow-clip'>
			<div className='h-screen p-6 lg:p-16 flex flex-col justify-between items-center lg:justify-around'>
				<Game />
			</div>
			<SvgStyles />
		</div>
	);
};
