export const VideoPreview = ({ title, img }) => {
	return (
		<div className="max-w-[372px]">
			<div className="relative w-full rounded-lg overflow-hidden">
				<img src={img} alt={`Miniatura de vídeo de ${title}`} className="w-full h-full object-cover" />

				<div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-black/100 to-transparent pointer-events-none" />
			</div>

			<div className="relative w-full -mt-5 z-10 flex justify-between items-start px-4">
				<div className="flex flex-col gap-3">
					<h2 className="text-[50px] font-semibold leading-none">{title}</h2>
					<span className="text-white/70 text-[13px] tracking-[0.5px]">250 est calories</span>
				</div>

				<div className="bg-black rounded-tl-3xl py-1.5 pl-3 -mr-4">
					<p className="text-[20px] font-semibold">58:24</p>
				</div>
			</div>
		</div>
	);
};
