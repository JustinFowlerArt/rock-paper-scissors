export const Header = () => {
	return (
		<header className='flex items-center w-full max-w-2xl justify-between border-3 border-header-outline rounded-lg p-2.5'>
			<img
				className='h-12 m-2'
				src='/images/logo.svg'
				alt='Rock paper scissors logo'
			/>

			<div className='flex flex-col items-center justify-evenly py-2 px-5 bg-gray-200 rounded-md'>
				<span className='text-xs text-score-text tracking-wider'>SCORE</span>
				<span className='text-4xl text-dark-text font-bold leading-none'>
					12
				</span>
			</div>
		</header>
	);
};
