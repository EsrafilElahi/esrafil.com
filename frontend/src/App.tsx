import React, { useRef } from "react";
import HeroSvg from "./components/Sections/HeroSvg";
import Title from "./components/Title";
import AboutMe from "./components/Sections/AboutMe";
import Carousel from "./components/Carousel";
import Skills from "./components/Sections/Skills.tsx";
import Experiences from "./components/Sections/Experiences.tsx";
import type { Project, Skill } from "../types.ts";

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

  const skills: Skill[] = [
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 2,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
    {
      id: 1,
      icon: "/assets/react.svg",
      name: "React",
    },
  ];

  const experiences = [
    {
      id: 1,
      startDate: "July 2019",
      endDate: "Agu 2020",
      corp: "Aytronik",
      position: "frontend developer",
      desc: "lorem ipsum dolor sit amet, consectetur adip proident et non proident consequat, sed do eiusmod tempor incididunt ut labore et dolore mag",
    },
    {
      id: 2,
      startDate: "Agu 2020",
      endDate: "Feb 2021",
      corp: "Shams",
      position: "frontend reactjs | nextjs | typescript developer",
      desc: "lorem ipsum dolor sit amet, consectetur adip proident et non proident consequat, sed do eiusmod tempor incididunt ut labore et dolore mag",
    },
    {
      id: 3,
      startDate: "Feb 2021",
      endDate: "Mar 2022",
      corp: "Avaaz Marketing",
      position: "senior frontend developer",
      desc: "lorem ipsum dolor sit amet, consectetur adip proident et non proident consequat, sed do eiusmod tempor incididunt ut labore et dolore mag",
    },
    {
      id: 4,
      startDate: "Mar 2022",
      endDate: "Sep 2023",
      corp: "Avaaztech",
      position: "senior frontend engineer",
      desc: "lorem ipsum dolor sit amet, consectetur adip proident et non proident consequat, sed do eiusmod tempor incididunt ut labore et dolore mag",
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
      <div className="p-5 mt-24 mb-10">
        <h2 className="title relative lines">PROJECTS</h2>
        <Carousel projects={projects} />
      </div>

      {/* Skills */}
      <div className="p-5 mt-24 mb-10">
        <h2 className="title pb-7 relative lines">SKILLS</h2>
        <Skills skills={skills} />
      </div>

      {/* Experiences */}
      <div className="p-5 mt-24 mb-10">
        <h2 className="title pb-7 relative lines">EXPERIENCES</h2>
        <Experiences />
      </div>
    </div>
  );
};

export default App;
