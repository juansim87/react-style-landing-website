import jonathanWise from "../assets/images/jonathan-wise.png"
import samanthaWilliams from "../assets/images/samantha-williams.png"
import karenSummer from "../assets/images/karen-summer.png"
import underline from "../assets/images/underline.png"
import { Teacher } from "./Teacher";


export const WorkoutProgram = () => {
	return (
        <div>

		<div className="flex flex-col">
			<div className="flex flex-col max-w-[524px]">
				<h2 className="text-[120px] font-semibold -tracking-[2px] leading-[120px] relative z-10">Workout Program Made For You</h2>
				<div>
					<img src={underline} className="-mt-26 -ml-8 absolute z-0"/>
				</div>
			</div>
            <div>
                <Teacher name="Samantha Williams" img={samanthaWilliams} size={321}/>
                <Teacher name="Karen Summer" img={karenSummer} size={321}/>
            </div>
            <div>

            </div>
		</div>
        </div>
	);
};
