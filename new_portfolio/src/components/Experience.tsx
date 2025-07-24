"use client";
import { RefObject } from "react";
import Slider from "react-slick";
import "@/app/globals.css";

type ExperienceProps = {
  expRef: RefObject<HTMLDivElement | null>
};

export default function Experience({ expRef }: ExperienceProps) {
  const settings = {
    dots: true,
    infinite: false,
    centerMode: true,
    centerPadding: "5%",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div
      ref={expRef}
      className="flex flex-col items-center justify-center py-14 w-full overflow-x-hidden"
    >
      <h1 className="page-title text-4xl my-4 font-bold text-center text-slate-50">
        Experience
      </h1>
      <div className="w-full max-w-7xl px-6 mx-auto">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="px-4">
            <div className="p-8 bg-[#000000ab] shadow-md rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold">
                Software Engineering Immersive Graduate
              </h3>
              <h4 className="text-xl font-semibold text-gray-300">
                General Assembly, London
              </h4>
              <h5 className="text-base font-medium text-gray-400 border-b-2 mb-2">
                MARCH 2024 - JUNE 2024
              </h5>
              <p className="text-slate-50 text-md">
                Completed a 12-week full-stack bootcamp using React, Node.js,
                Django REST, and more. Key projects:
              </p>
              <ul className="list-disc pl-5 text-slate-50 text-sm mt-2">
                <li>
                  <strong>Frogger</strong> – JS arcade game clone
                </li>
                <li>
                  <strong>Movie Gallery</strong> – React & Node movie browser
                </li>
                <li>
                  <strong>Pedal</strong> – MERN-based social app
                </li>
                <li>
                  <strong>BlendBay</strong> – Full-stack shake app (Django +
                  React)
                </li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="px-4">
            <div className="p-8 bg-[#000000ab] shadow-md rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold">Refrigeration Case Cleaner</h3>
              <h4 className="text-xl font-semibold text-gray-300">
                Arcus FM, Stevenage
              </h4>
              <h5 className="text-base font-medium text-gray-400 border-b-2 mb-2">
                JULY 2022 - FEB 2024
              </h5>
              <ul className="list-disc pl-5 text-slate-50 text-sm">
                <li>Performed case audits and ensured hygiene standards</li>
                <li>Supported mobile teams and reported repair needs</li>
              </ul>
            </div>
          </div>
          {/* Card 3 */}
          <div className="px-4">
            <div className="p-8 bg-[#000000ab] shadow-md rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold">Outbound Sales Consultant</h3>
              <h4 className="text-xl font-semibold text-gray-300">
                OneFamily, Swindon
              </h4>
              <h5 className="text-base font-medium text-gray-400 border-b-2 mb-2">
                OCT 2021 - JUN 2022
              </h5>
              <ul className="list-disc pl-5 text-slate-50 text-sm">
                <li>Upsold investment products to customers</li>
                <li>Consistently exceeded targets (Q1–Q2 2022)</li>
              </ul>
            </div>
          </div>
          {/* Card 4 */}
          <div className="px-4">
            <div className="p-8 bg-[#000000ab] shadow-md rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold">Case Maintenance Engineer</h3>
              <h4 className="text-xl font-semibold text-gray-300">
                Space Engineering, Bristol
              </h4>
              <h5 className="text-base font-medium text-gray-400 border-b-2 mb-2">
                FEB 2019 - SEP 2021
              </h5>
              <ul className="list-disc pl-5 text-slate-50 text-sm">
                <li>Performed safety inspections & audits</li>
                <li>Trained and mentored junior technicians</li>
              </ul>
            </div>
          </div>
          {/* Card 5 */}
          <div className="px-4">
            <div className="p-8 bg-[#000000ab] shadow-md rounded-2xl max-w-2xl mx-auto">
              <ul className="list-disc pl-5 text-slate-50 text-sm space-y-4">
                <li>
                  <div>
                    <p className="font-bold">Line Technician</p>
                    <p className="text-gray-300">Catalent Pharma, Swindon</p>
                    <p className="text-gray-400">DEC 2017 - JAN 2019</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-bold">Able Bodied Seaman</p>
                    <p className="text-gray-300">IOOC, Persian Gulf</p>
                    <p className="text-gray-400">APR 2016 - MAY 2017</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p className="font-bold">Event Coordinator</p>
                    <p className="text-gray-300">PhotoBooth Goa Ltd</p>
                    <p className="text-gray-400">JUN 2015 - MAR 2016</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
