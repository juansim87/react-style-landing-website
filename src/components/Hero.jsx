import  athlete  from "../assets/images/athlete.png";

export const Hero = () => {
	const dataBox = "bg-[#191919] flex flex-col items-left px-7 py-3 rounded-3xl";
	const dataSpan = "text-[13px] uppercase tracking-[1px]";
	const dataNumbers = "text-[40px] font-semibold";
	const button = "min-w-[200px] min-h-[70px] tracking-[1px] flex items-center justify-center rounded-xl";
	const bgGreen = "bg-[#25AB75]";
	const bgGrey = "bg-[#191919]";

	return (
		<section className="relative flex flex-col gap-20 py-20">
			<div className={`${bgGrey} flex pl-2.5 pr-4 py-2 gap-6 align-center size-fit rounded-4xl`}>
				<div className={`${bgGreen} px-3.5 py-1.5 border-black-2 rounded-3xl uppercase text-stroke`}>New</div>
				<div className="flex justify-center items-center">
					<p className="tracking-[0.5px] text-stroke">High Intensity workout to burn calories</p>
				</div>
			</div>
			<div className="flex flex-col gap-10">
				<div className="flex items-center justify-between">
					<h1 className="text-[200px] font-semibold leading-none">
						Cardio <br /> Exercise
					</h1>
					<div className="flex flex-col gap-6">
						<div className={dataBox}>
							<p className={`${dataNumbers} text-[#FFE642]`}>38:14</p>
							<span className={dataSpan}>Time</span>
						</div>
						<div className={dataBox}>
							<p className={`${dataNumbers} text-[#FB1351]`}>165</p>
							<span className={dataSpan}>Est calories</span>
						</div>
					</div>
				</div>
				<div className="max-w-[600px] ml-2">
					<p className="font-light opacity-50 width-1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
			</div>
			<div className="flex gap-8">
				<div className={`${button} ${bgGreen}`}>
					<p className="text-[18px] font-semibold text-stroke">Get Started</p>
				</div>
				<div className={`${button} ${bgGrey}`}>
					<p className="text-[18px] font-semibold text-stroke">Preview</p>
				</div>
			</div>
            <div className="absolute w-[800px] right-50 top-[10]">
				<img src={athlete} alt="Cardio Exercise" className="w-full object-contain" />
			</div>
		</section>
	);
};
