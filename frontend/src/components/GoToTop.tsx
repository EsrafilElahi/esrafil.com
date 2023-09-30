import Arrow from "/public/icons/arrow.svg?react";

const GoToTop = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Arrow
      className="w-9 h-9 cursor-pointer fixed bottom-[11%] right-10"
      onClick={goToTop}
    />
  );
};

export default GoToTop;
