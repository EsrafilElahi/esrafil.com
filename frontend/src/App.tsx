import React, { useRef } from "react";
import HeroSvg from "./components/Sections/HeroSvg";
import Title from "./components/Title";
import AboutMe from "./components/Sections/AboutMe";
import Carousel from "./components/Carousel";

const App = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    ref.current?.scroll();
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <HeroSvg />
        <img
          src="/images/me.png"
          className="w-[15%] h-[40%] absolute right-[18%] bottom-[15%]"
        />
        <Title handleScroll={handleScroll} />
      </div>

      {/* About Me */}
      <AboutMe ref={ref} />

      {/* Projects */}
      <div className="p-5 my-12">
        <h2 className="title">PROJECTS</h2>
        <Carousel />
      </div>
    </div>
  );
};

export default App;
