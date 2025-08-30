
export const Teacher = ({name, size, img}) => {
  return (
    <div>
      <div className={`w-[${size}]`}>
        <img src={img} alt={`${name}'s picture`}/>
      </div>
      <div>
        <h5>{name}</h5>
        <span>Trainer</span>
      </div>
    </div>
  );
};