import rightArrow from "../assets/images/right-arrow.png";

export const VideoEntry = ({ id, title, qty }) => {
	return (
		<div className="flex justify-between items-center py-17 border-b-[1px] border-b-current border-b-solid border-opacity-50 last:border-b-0">
			<p className="text-[25px] font-semibold opacity-34">{id}</p>
			<div className="flex justify-between w-[880px] items-center">
				<div className="flex flex-col items-start">
					<h3 className="text-[50px] tracking-[0.83px]">{title}</h3>
					<span className="tracking-[0.5px] opacity-50">{qty} videos</span>
				</div>
				<div className="w-6">
					<img src={rightArrow} />
				</div>
			</div>
		</div>
	);
};
