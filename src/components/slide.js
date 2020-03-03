import React, { createRef } from "react";
import Slider from "react-slick";
const slidedata = [
  {
    time: 0,
    type: "image",
    url: "https://picsum.photos/id/101/800/450"
  },
  {
    time: 14,
    type: "image",
    url: "https://picsum.photos/id/1/800/450"
  },
  {
    time: 20,
    type: "image",
    url: "https://picsum.photos/id/1006/800/450"
  }
];
const SlideLayout = props => {
  const settings = {
    dots: false,
    lazyLoad: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let slide = createRef();

  const handleChangeSlide = duration => {
    let slideIndex = 0;
    // condition 

    // end condition
    slide.slickGoTo(slideIndex);
  };

  /* 
  useEffect(() => {
    handleChangeSlide(contextOrRedux.duration);
  }, [contextOrRedux.duration]); */

  return (
    <Slider ref={slider => (slide = slider)} {...settings}>
      {slidedata.map((item, index) => {
        return (
          <div key={"Slider-" + index}>
            <img className="lesson-slide" alt="slide" src={item.url} />
          </div>
        );
      })}
    </Slider>
  );
};

export default SlideLayout;