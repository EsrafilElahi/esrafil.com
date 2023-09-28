import React, { useRef } from "react";
import HeroSvg from "./components/Sections/HeroSvg";
import Title from "./components/Title";
import AboutMe from "./components/Sections/AboutMe";
import Carousel from "./components/Carousel";
import type { Project } from "../types.ts";

const App = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    ref.current?.scroll();
  };

  const projects: Project[] = [
    {
      id: 1,
      name: "clinic ghodad",
      url: "https://app.clinicghodad.com",
      img: "/images/p1.jpg",
    },
    {
      id: 2,
      name: "project 1",
      url: "https://app.clinicghodad.com",
      img: "/images/p2.jpg",
    },
    {
      id: 3,
      name: "project 3",
      url: "https://app.clinicghodad.com",
      img: "/images/p1.jpg",
    },
    {
      id: 4,
      name: "project 4",
      url: "https://app.clinicghodad.com",
      img: "/images/p1.jpg",
    },
    {
      id: 5,
      name: "project 5",
      url: "https://app.clinicghodad.com",
      img: "/images/p2.jpg",
    },
    {
      id: 6,
      name: "project 6",
      url: "https://app.clinicghodad.com",
      img: "/images/p2.jpg",
    },
    {
      id: 7,
      name: "project 7",
      url: "https://app.clinicghodad.com",
      img: "/images/p1.jpg",
    },
  ];

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
      <div className="p-5 my-24">
        <h2 className="title">PROJECTS</h2>
        <Carousel projects={projects} />
      </div>
    </div>
  );
};

export default App;
