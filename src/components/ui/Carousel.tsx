"use client";
import Slider from "react-slick";
import { type FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Project } from "@/types/Project";


type CarouselProps = {
  projects: Project[];
};

const Carousel: FC<CarouselProps> = ({ projects }) => {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="relative z-20 w-full max-w-7xl overflow-hidden pt-6 pb-16 px-6 sm:px-6">
      <div className="relative w-full ">
        <Slider {...settings}>
          {projects.map((item, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-2xl sm:max-w-[420px] sm:mx-auto">
                <div className="w-full aspect-[4/5] relative">
                  <Image
                    src={item.pic}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-t-2xl"
                    priority={index === 0}
                  />
                </div>
                <div className="flex flex-col justify-center items-center px-4 py-3 text-center">
                  <h3 className="text-white text-base font-semibold sm:text-lg">
                    {item.title}
                  </h3>
                  {item.name && (
                    <p className="text-slate-400 text-sm mt-1">{item.name}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
