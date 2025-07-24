"use client";
import { useEffect, useState, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./ui/Carousel";
import { Project } from "@/types/Project";
import { projects } from "@/data/projects";

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

  return (
    <div ref={aboutRef} className="bg-black w-full">
      <div className="min-h-screen flex flex-col items-center justify-center pt-14 pb-10">
        <div className="relative min-h-[80px] flex items-center justify-center mb-6 px-4 text-center">
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
              className="text-slate-100 text-3xl md:text-4xl font-bold tracking-wide uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            >
              {words[index % words.length]}
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="w-full max-w-3xl px-4 mx-auto md:w-2/4 p-5 text-xl font-light text-center text-slate-100 leading-[2rem]">
          I&apos;m an innovative and proactive Full-Stack Developer with a strong
          grasp of software engineering principles. I enjoy collaborating with
          others and I&apos;m dedicated to delivering high-quality code and
          user-friendly designs.
        </p>
        <p className="w-full max-w-3xl px-4 mx-auto lg:w-2/4 p-4 text-xl font-light text-center text-slate-100 leading-[2rem]">
          My passion for technology integration and creative problem-solving
          stems from my hobby of FDM 3D printing, which inspired my transition
          into software engineering. When I&apos;m not coding, you&apos;ll find me
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
          Let&apos;s connect and collaborate to create something amazing together.
          Whether it&apos;s a complex web application or a simple yet elegant design,
          I&apos;m always up for the challenge!
        </p>
        <Carousel projects={projects} />
      </div>
    </div>
  );
}
