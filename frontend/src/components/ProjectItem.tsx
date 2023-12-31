import { useState } from 'react';
import type { Project } from '../../types.ts';

type Props = {
  project: Project;
};

const ProjectItem = (props: Props) => {
  const [hover, setHover] = useState(false);
  const { url, name, img } = props.project;

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <article
      className='cursor-pointer relative rounded-xl w-[15rem]'
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className={`w-full absolute top-[25%] ${hover ? '' : 'hidden'} transition-all text-center z-20 text-3xl break-words`}>
        {name}
      </span>
      <img src={img} className='relative rounded-xl' alt={name} />
      <div
        className={`w-full h-full absolute top-0 left-0 rounded-xl ${
          hover ? 'bg-[#2c2c2bc5]' : 'bg-[transparent]'
        } transition-all z-10`}
      ></div>
      <a
        className={`w-full absolute bottom-[25%] ${hover ? '' : 'hidden'} transition-all text-center z-20 text-xl break-words`}
        onClick={() => openLink(url)}
      >
        {url}
      </a>
    </article>
  );
};

export default ProjectItem;
