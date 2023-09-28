import { useState } from "react";
import type { Project } from "../../types.ts";

type Props = {
  project: Project;
};

const ProjectItem = (props: Props) => {
  const [hover, setHover] = useState(false);
  const { url, name, img } = props.project;

  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="mx-8 cursor-pointer relative rounded-xl w-[20rem] h-full"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className={`w-full absolute top-[25%] ${
          hover ? "" : "hidden"
        } transition-all text-center z-20 text-3xl`}
      >
        {name}
      </span>
      <img src={img} className="relative rounded-xl" alt={name} />
      <div
        className={`w-full h-full absolute top-0 left-0 rounded-xl ${
          hover ? "bg-[#2c2c2bc5]" : "bg-[transparent]"
        } transition-all z-10`}
      ></div>
      <a
        className={`w-full absolute bottom-[25%] ${
          hover ? "" : "hidden"
        } transition-all text-center z-20 text-xl`}
        onClick={() => openLink(url)}
      >
        {url}
      </a>
    </div>
  );
};

export default ProjectItem;
