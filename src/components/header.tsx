interface Props {
	score: number;
	bonus: boolean;
	handleBonusMode: (bonusMode: boolean) => void;
}

export const Header = ({ score, bonus, handleBonusMode }: Props) => {
	return (
		<header className='relative flex items-center w-full max-w-lg justify-between border-3 border-header-outline rounded-lg p-2.5 lg:scale-150 lg:origin-top lg:absolute lg:top-12 xl:scale-[1.75] z-20'>
			<img
				className='h-12 m-2'
				src={`/images/${bonus ? 'logo-bonus' : 'logo'}.svg`}
				alt='Rock paper scissors logo'
			/>

			<form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between h-6 w-16 bg-gray-200 text-gray-200 py-1 px-3 rounded-2xl text-center'>
				<label className='flex flex-col items-center'>
					<span className='absolute top-[-1.25rem] text-xs w-4 h-10'>Off</span>
					<input
						type='radio'
						className='hidden'
						onClick={() => handleBonusMode(false)}
					></input>
				</label>
				<label className='flex flex-col items-center'>
					<span className='absolute top-[-1.25rem] text-xs w-4 h-10'>On</span>
					<input
						type='radio'
						className='hidden'
						onClick={() => handleBonusMode(true)}
					></input>
				</label>
				<div
					className={`w-3.5 h-3.5 absolute top-[.3rem] rounded-full ${
						bonus ? 'bg-green-500 right-1.5' : 'bg-red-500 left-1.5'
					}`}
				></div>
			</form>

			<div className='flex flex-col items-center justify-evenly py-2 px-5 bg-gray-200 rounded-md'>
				<span className='text-xs text-score-text tracking-wider'>SCORE</span>
				<span className='text-4xl text-dark-text font-bold leading-none'>
					{score}
				</span>
			</div>
		</header>
	);
};
