type Props = {
  handleScroll: () => void;
};

const Title = (props: Props) => {
  const { handleScroll } = props;

  return (
    <div className="absolute top-[35%] left-[5%]">
      <h1 className="text-8xl">Esrafil Elahi</h1>
      <h2 className="text-4xl mt-1 mb-5">Senior Frontend Engineer</h2>
      <button className="btn-outline" onClick={handleScroll}>
        About Me
      </button>
    </div>
  );
};

export default Title;
