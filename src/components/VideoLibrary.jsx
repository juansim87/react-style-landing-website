import { VideoEntry } from "./VideoEntry";

const videoEntries = [
	{ id: "01", title: "Workout at home", qty: 15 },
	{ id: "02", title: "Stay Strong and Fit", qty: 48 },
	{ id: "03", title: "High Intensity", qty: 25 },
	{ id: "04", title: "Simple Workout", qty: 35 },
	{ id: "05", title: "Burn Calories", qty: 35 },
];

export const VideoLibrary = () => {
	

	return (
		<div className="w-full flex flex-col divide-y divide-[#6b7280]">
			{videoEntries.map((entry, index) => (
				<VideoEntry key={index} id={entry.id} title={entry.title} qty={entry.qty}/>
			))}
		</div>
	);
};
