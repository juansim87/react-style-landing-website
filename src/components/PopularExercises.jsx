import  lifting  from "../assets/images/lifting.png";
import  treadmill  from "../assets/images/treadmill.png";
import  stretching  from "../assets/images/stretching.png";
import  yoga  from "../assets/images/yoga.png";
import  running  from "../assets/images/running.png";
import  pushup  from "../assets/images/pushup.png";
import { VideoPreview } from "./VideoPreview";

export const PopularExercises = () => {
  return (
    <div className="w-full flex flex-col items-center gap-15">
      <div className="w-full flex justify-between items-end">
        <h3 className="text-[35px] font-semibold">Popular Exercises</h3>
        <span className="text-[12px] font-[200] opacity-[67%] tracking-[1.5px] uppercase">See more exercises</span>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-y-20">
        <VideoPreview title="Treadmill" img={treadmill}/>
        <VideoPreview title="Stretching" img={stretching}/>
        <VideoPreview title="Yoga" img={yoga}/>
        <VideoPreview title="Running" img={running}/>
        <VideoPreview title="Lifting" img={lifting}/>
        <VideoPreview title="PushUp" img={pushup}/>
      </div>
    </div>
  );
};