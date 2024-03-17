"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const AnimeList = ({ children }) => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute -right-2 2xl:-right-6 top-1/3 -translate-y-1/2 z-10 rounded-full bg-color-dark-200 bg-opacity-85 hover:bg-opacity-95 transition-all border border-color-dark-300" onClick={onClick}>
        <button className="text-color-light-200 hover:text-color-accent p-4 hover:scale-125 transition-all">
          <ArrowRight size={24} />
        </button>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute -left-2 2xl:-left-5 top-1/3 -translate-y-1/2 z-10 rounded-full bg-color-dark-200 bg-opacity-85 hover:bg-opacity-95 transition-all border border-color-dark-300" onClick={onClick}>
        <button className="text-color-light-200 hover:text-color-primary p-4 hover:scale-125 transition-all">
          <ArrowLeft size={24} />
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerPadding: "80px",
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          className: "center",
          centerPadding: "80px",
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default AnimeList;
