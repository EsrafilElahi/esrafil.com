import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="w-full p-10 overflow-hidden">
      <Slider {...settings}>
        <div>
          <h3 className="text-3xl text--[#000]">11111</h3>
        </div>
        <div>
          <h3 className="text-3xl text--[#000]">2</h3>
        </div>
        <div>
          <h3 className="text-3xl text--[#000]">3</h3>
        </div>
        <div>
          <h3 className="text-3xl text--[#000]">4</h3>
        </div>
        <div>
          <h3 className="text-3xl text--[#000]">5</h3>
        </div>
        <div>
          <h3 className="text-3xl text--[#000]">6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
