import jonathanWise from "../assets/images/jonathan-wise.png";
import samanthaWilliams from "../assets/images/samantha-williams.png";
import karenSummer from "../assets/images/karen-summer.png";
import underline from "../assets/images/underline.png";
import { Teacher } from "./Teacher";

export const WorkoutProgram = () => {
	const button = "max-w-[200px] min-h-[70px] tracking-[1px] flex items-center justify-center rounded-xl cursor-pointer";
	return (
		<div className="w-full flex flex-col pb-40">
			<div className="flex justify-between">
				<div className="flex flex-col max-w-[524px]">
					<h2 className="text-[120px] font-semibold -tracking-[2px] leading-[120px] relative z-10">
						Workout Program Made For You
					</h2>
					<div>
						<img src={underline} className="-mt-26 -ml-8 absolute z-0" />
					</div>
				</div>
				<div className="flex flex-col pt-6 gap-12">
					<p  className="text-[25px] tracking-[0.5px] opacity-70 leading-[50px] max-w-[558px]"> 
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua consectetur adipiscing.
					</p>
					<div className={`${button} bg-[#25AB75]`}>
						<p className="text-[18px] font-semibold text-stroke">Get Started</p>
					</div>
				</div>
			</div>
			<div>
				<div className="grid grid-cols-2 gap-8">
					<Teacher name="Samantha Williams" img={samanthaWilliams} size={321} />
					<Teacher name="Jonathan Wise" img={jonathanWise} size={560} className="row-span-2"/>
					<Teacher name="Karen Summer" img={karenSummer} size={321} />
				</div>
			</div>
		</div>
	);
};
