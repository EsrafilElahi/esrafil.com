import React from "react";
import Arrow from "/public/icons/arrow.svg?react";

type Props = {};

const GoToTop = (props: Props) => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Arrow className="w-8 h-8 cursor-pointer fixed bottom-[5%] right-10" />
  );
};

export default GoToTop;
