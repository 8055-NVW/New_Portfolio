'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import Image from 'next/image';
import type { RefObject } from 'react';

type LandingProps = {
  landingRef: RefObject<HTMLElement | null>;
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
  }, []);

  return (
    <div ref={landingRef} className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-center justify-center">
        <div className="mx-5 px-5 w-full">
          <h1
            id="text"
            className="playwrite-nz-400 landing-text text-5xl md:text-6xl font-bold text-center text-white"
          >
            Hi!
            <br />
            I'm Vivian
          </h1>
          <h2 className="text-4xl hidden md:hidden lg:block text-center text-slate-100 pt-5">
            Full Stack Software Developer
          </h2>
        </div>
        <div className="px-5 py-10 w-full flex flex-col justify-center items-center lg:border-l-4 border-white lg:-translate-x-[21px]">
          <div className="avatar">
            <div className="w-[17rem] rounded-3xl overflow-hidden">
              <Image
                src="/assets/me.jpg"
                alt="A mug shot of me"
                width={272}
                height={340}
              />
            </div>
          </div>
          <h2 className="text-4xl text-center font-light lg:hidden text-slate-100 pt-10">
            Full Stack Software Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
