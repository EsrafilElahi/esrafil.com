type Props = {
  skill: {
    img: string;
    name: string;
  };
};

const SkillItem = (props: Props) => {
  const { img, name } = props.skill;

  return (
    <div className='flex-center gap-2 flex-[0_0_20%] md:flex-[0_0_10%]'>
      <img src={img} alt={name} className='w-8 h-8' />
      <span>{name}</span>
    </div>
  );
};

export default SkillItem;
