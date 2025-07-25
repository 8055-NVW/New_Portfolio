'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Image from 'next/image';
import type { RefObject } from 'react';

type LandingProps = {
  landingRef: RefObject<HTMLDivElement | null>;
};

export default function Landing({ landingRef }: LandingProps) {
  useEffect(() => {
    new SplitType('#text');
    const characters = document.querySelectorAll('.char');
    characters.forEach((char) => {
      char.classList.add('translate-y-full');
    });

    gsap.to('.char', {
      y: 0,
      stagger: 0.07,
      delay: 0.05,
      duration: 0.7,
    });

    gsap.fromTo(
      '#subtitle',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        delay: 1.2,
        duration: 0.8,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div ref={landingRef} className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-center justify-center">
        <div className="mx-5 px-5 w-full">
          <h1
            id="text"
            className="landing-text text-5xl md:text-6xl font-bold text-center text-white"
          >
            Hi!
            <br />
            I&apos;m Vivian
          </h1>
          <h2
            id="subtitle"
            className="text-4xl hidden md:hidden lg:block text-center text-slate-100 pt-5 opacity-0"
          >
            Full Stack Software Developer
          </h2>
        </div>
        <div className="px-5 py-10 w-full flex flex-col justify-center items-center lg:border-l-4 border-white lg:-translate-x-[21px]">
          <div className="avatar">
            <div className="relative w-64 h-64 rounded-3xl overflow-hidden">
              <Image
                src="/assets/me.jpg"
                alt="Portrait of Vivian"
                fill
                priority
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 256px"
                className="object-cover"
              />
            </div>
          </div>
          <h2
            id="subtitle"
            className="text-4xl text-center font-light lg:hidden text-slate-100 pt-10 opacity-0"
          >
            Full Stack Software Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
