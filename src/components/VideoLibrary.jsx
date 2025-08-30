import { VideoEntry } from "./VideoEntry";

const videoEntries = [
	{ id: "01", title: "Workout at home", qty: 15 },
	{ id: "02", title: "Stay Strong and Fit", qty: 48 },
	{ id: "03", title: "High Intensity", qty: 25 },
	{ id: "04", title: "Simple Workout", qty: 35 },
	{ id: "05", title: "Burn Calories", qty: 35 },
];

export const VideoLibrary = () => {
	const borderB = "border-b-[1px] border-b-current border-b-solid border-opacity-50";

	return (
		<div className="w-full flex flex-col">
			{videoEntries.map((entry, index) => (
				<VideoEntry key={index} id={entry.id} title={entry.title} qty={entry.qty} className={index !== videoEntries.length - 1 ? borderB : ""}/>
			))}
		</div>
	);
};
