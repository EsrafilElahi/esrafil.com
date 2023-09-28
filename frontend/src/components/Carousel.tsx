import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProjectItem from "./ProjectItem";

interface Project {
  id: number;
  name: string;
  url: string;
  img: string;
}

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
  };

  return (
    <div className="w-full px-10 pb-10 pt-5 overflow-hidden">
      <Slider {...settings}>
        {projects?.map((project) => <ProjectItem project={project} />)}
      </Slider>
    </div>
  );
};

export default Carousel;
