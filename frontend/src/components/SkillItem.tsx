type Props = {
  skill: {
    icon: string;
    name: string;
  };
};

const SkillItem = (props: Props) => {
  const { icon, name } = props.skill;

  return (
    <div className='flex-center gap-2 flex-[0_0_20%] md:flex-[0_0_10%]'>
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default SkillItem;
