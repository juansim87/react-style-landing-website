import "./App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { PopularExercises } from "./components/PopularExercises";
import { WorkoutProgram } from "./components/WorkoutProgram";
import { VideoLibrary } from "./components/VideoLibrary";

export const App = () => {
	return (
		<div className="flex justify-center py-10 font-[Poppins] bg-black text-white min-h-[100vh]">
			<div className="w-[90%] flex flex-col items-center">
				<NavBar />
				<Hero />
				<PopularExercises />
        <WorkoutProgram/>
        <VideoLibrary/>
			</div>
		</div>
	);
};
