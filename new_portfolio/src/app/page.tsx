"use client";
import { useRef } from "react";
import Landing from "@/components/Landing";
import Navbar from "@/components/NavBar";
import { BackgroundAnimation } from "@/components/ui/AnimatedBackground";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  const landingRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null!); 
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <main className="min-h-screen relative z-0 ">

      <BackgroundAnimation />
      <Navbar
        landingRef={landingRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        expRef={expRef}
        contactRef={contactRef}
      />
      <Landing landingRef={landingRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <Experience expRef={expRef}/>
      <Footer contactRef={contactRef}/>
    </main>
  );
}
