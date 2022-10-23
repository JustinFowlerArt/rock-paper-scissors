interface Props {
	bonus: boolean;
	handleShowRules: () => void;
}

export const RulesModal = ({ bonus, handleShowRules }: Props) => {
	return (
		<div className='absolute top-0 h-screen w-screen' role='modal'>
			<div className='absolute bg-black z-40 opacity-50 h-full w-full'></div>
			<div
				className={`relative p-10 bg-white z-50 h-full w-full lg:rounded-xl lg:fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:p-8 xl:scale-125 ${
					bonus ? 'lg:h-[28rem] lg:w-96' : 'lg:h-96 lg:w-96'
				}`}
			>
				<div className={`flex flex-col justify-around items-center h-full w-full lg:flex-row lg:flex-wrap lg:justify-between lg:items-baseline ${bonus ? 'lg:space-y-3 lg:-mt-1' : 'lg:space-y-9 lg:-mt-8'}`}>
					<h2 className='text-3xl text-dark-text font-bold'>RULES</h2>
					<img
						className={`lg:mx-auto lg:order-3 ${bonus ? '' : 'w-96 lg:w-11/12'}`}
						src={`/images/${bonus ? 'image-rules-bonus' : 'image-rules'}.svg`}
					></img>
					<button
						className='h-4 w-4 mt-16 lg:order-2'
						onClick={handleShowRules}
					>
						<img src='/images/icon-close.svg'></img>
					</button>
				</div>
			</div>
		</div>
	);
};
