interface Props {
	score: number;
}

export const Header = ({ score }: Props) => {
	return (
		<header className='flex items-center w-full max-w-lg justify-between border-3 border-header-outline rounded-lg p-2.5 lg:scale-150 lg:origin-top lg:absolute lg:top-12 xl:scale-[1.75] z-10'>
			<img
				className='h-12 m-2'
				src='/images/logo.svg'
				alt='Rock paper scissors logo'
			/>

			<div className='flex flex-col items-center justify-evenly py-2 px-5 bg-gray-200 rounded-md'>
				<span className='text-xs text-score-text tracking-wider'>SCORE</span>
				<span className='text-4xl text-dark-text font-bold leading-none'>
					{score}
				</span>
			</div>
		</header>
	);
};
