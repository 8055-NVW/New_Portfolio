"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { RiHome9Line } from "react-icons/ri";

type NavbarProps = {
  landingRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  expRef: RefObject<HTMLElement | null>;
  contactRef: RefObject<HTMLElement | null>;
};

export default function Navbar({
  landingRef,
  aboutRef,
  projectsRef,
  expRef,
  contactRef,
}: NavbarProps) {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setVisible(false), 1200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [prevScrollPos]);

  const handleClick = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { label: <RiHome9Line size={21} />, ref: landingRef },
    { label: "About", ref: aboutRef },
    { label: "Projects", ref: projectsRef },
    { label: "Experience", ref: expRef },
    { label: "Contact", ref: contactRef },
  ];

  return (
    <nav className="fixed top-4 w-full z-50 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul
          className="flex gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 py-2 sm:py-3 text-white text-sm sm:text-base font-medium
          rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md
          shadow-white/10 max-w-[600px] mx-auto transition-all"
        >
          {navItems.map(({ label, ref }, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(ref)}
                aria-label={typeof label === "string" ? label : "Home"}
                className="w-full min-w-[72px] h-9 sm:h-10 flex items-center justify-center rounded-full px-2 sm:px-3 hover:bg-white/20 transition"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
