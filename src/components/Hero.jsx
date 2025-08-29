export const Hero = () => {
	return (
		<section className="flex flex-col">
			<div className="bg-[#191919] flex pl-2.5 pr-4 py-2 gap-6 align-center size-fit rounded-4xl">
				<div className="bg-[#25AB75] px-3.5 py-1.5 border-black-2 rounded-3xl uppercase text-stroke">New</div>
				<div className="flex justify-center items-center">
					<p className="tracking-[0.5px] text-stroke">High Intensity workout to burn calories</p>
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex">
					<h1 className="text-[200px] font-semibold leading-none">Cardio Exercise</h1>
					<div className="flex flex-col gap-8">
						<div className="bg-[#191919] flex flex-col items-center px-8 py-4 rounded-2x1">
							<p className="text-[40px] font-semibold text-[#FFE642]">38:14</p>
							<span>Time</span>
						</div>
						<div>
							<p>165</p>
							<span>Est calories</span>
						</div>
					</div>
				</div>
				<div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
            <div>
                <div><p>Get Started</p></div>
                <div><p>Preview</p></div>              
            </div>
		</section>
	);
};
