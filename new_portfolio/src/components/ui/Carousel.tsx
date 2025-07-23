'use client'

import Slider from 'react-slick'
import { type FC } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Project = {
  pic: string
  title: string
  name?: string
}

type CarouselProps = {
  projects: Project[]
}

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
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable centering for full-width slide
        }
      }
    ]
  }

  return (
    <div className="relative z-20 w-full overflow-hidden pt-6 pb-16 px-4 sm:px-6">
      <div className="relative w-full">
        <Slider {...settings}>
          {projects.map((item, index) => (
            <div key={index} className="px-2">
              <div className="w-full h-[500px] bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02] sm:max-w-[420px] sm:mx-auto">
                <img
                  src={item.pic}
                  alt={item.title}
                  className="w-full h-[410px] object-cover bg-black"
                />
                <div className="px-4 py-4 text-center">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
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
  )
}

export default Carousel
