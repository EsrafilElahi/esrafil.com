import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectItem from "./ProjectItem";
import type { Project } from "../../types.ts";

type Props = {
  projects: Project[];
};

const Carousel = (props: Props) => {
  const { projects } = props;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 10,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full p-10 overflow-hidden">
      <Slider {...settings}>
        {projects?.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
