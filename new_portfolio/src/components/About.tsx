"use client";
import { useEffect, useState, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./ui/Carousel";

type Project = {
  pic: string;
  title: string;
  name?: string;
};

type AboutProps = {
  aboutRef: RefObject<HTMLDivElement>;
};

export default function About({ aboutRef }: AboutProps) {
  const [index, setIndex] = useState(0);
  const words = [
    "Software Engineer",
    "Automotive-Enthusiast",
    "Tech-Geek",
    "3D Printing Aficionado",
    "Guitarist",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prev) => prev + 1), 4000);
    return () => clearInterval(intervalId);
  }, []);

  const projects: Project[] = [
    {
      pic: "/assets/printOne.jpg",
      title: "Koala",
      name: "Design by Patrickart",
    },
    {
      pic: "/assets/printTwo.jpg",
      title: "Articulated Elephant",
      name: "Design by LeFabShop",
    },
    {
      pic: "/assets/printThree.jpg",
      title: "Wireframe Skull Pencilholder",
      name: "Design by philnelson",
    },
    { pic: "/assets/printFour.jpg", title: "My Rig 💖" },
    {
      pic: "/assets/printFive.jpg",
      title: "Deadpool Bust",
      name: "Design by Eastman",
    },
    {
      pic: "/assets/printSix.jpg",
      title: "The Squintsworth Pair Glasses Holder",
      name: "Design by Zyltech",
    },
    {
      pic: "/assets/printSeven.jpg",
      title: "Spiral Vase",
      name: "Design by _Steve",
    },
  ];

  return (
    <div ref={aboutRef} className="bg-black w-full">
      <div className="min-h-screen flex flex-col items-center justify-center pt-14 pb-10">
        <div className="h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index % words.length]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="text-slate-100 text-3xl md:text-4xl font-bold m-3 text-center absolute"
            >
              {words[index % words.length]}
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="w-full max-w-3xl px-4 mx-auto md:w-2/4 p-5 text-xl font-light text-center text-slate-100 leading-[2rem]">
          I'm an innovative and proactive Full-Stack Developer with a strong
          grasp of software engineering principles. I enjoy collaborating with
          others and I'm dedicated to delivering high-quality code and
          user-friendly designs.
        </p>
        <p className="w-full max-w-3xl px-4 mx-auto lg:w-2/4 p-4 text-xl font-light text-center text-slate-100 leading-[2rem]">
          My passion for technology integration and creative problem-solving
          stems from my hobby of FDM 3D printing, which inspired my transition
          into software engineering. When I'm not coding, you'll find me
          tinkering with automotive projects, jamming on my guitar, or exploring
          the latest tech trends.
        </p>
        <p className="w-full max-w-3xl px-4 mx-auto md:w-2/4 p-4 text-xl font-light text-center text-slate-100 leading-[2rem]">
          I believe in continuous learning and improvement, always staying
          curious and open to new ideas. My journey in tech has been an exciting
          adventure, blending creativity with technical expertise to build
          innovative solutions.
        </p>
        <p className="w-full max-w-3xl px-4 mx-auto md:w-2/4 p-4 text-xl font-light text-center text-slate-100 leading-[2rem]">
          Let's connect and collaborate to create something amazing together.
          Whether it's a complex web application or a simple yet elegant design,
          I'm always up for the challenge!
        </p>
        <Carousel projects={projects} />
      </div>
    </div>
  );
}
