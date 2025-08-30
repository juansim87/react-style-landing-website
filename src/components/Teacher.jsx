
export const Teacher = ({name, size, img}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className={`w-[${size}]`}>
        <img src={img} alt={`${name}'s picture`}/>
      </div>
      <div>
        <h5 className="text-[25px] font-medium tracking-[0.5px]">{name}</h5>
        <span className="text-sm tracking-[0.5px] opacity-50">Trainer</span>
      </div>
    </div>
  );
};