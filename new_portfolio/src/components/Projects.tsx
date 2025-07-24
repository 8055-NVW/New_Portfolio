"use client";

import { useEffect, RefObject } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ProjectCard } from "./custom/ProjectCard";

type ProjectsProps = {
  projectsRef: RefObject<HTMLDivElement | null>;
};

export default function Projects({ projectsRef }: ProjectsProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      ref={projectsRef}
      className="h-full bg-black flex flex-col items-center pb-10 "
    >
      <h1 className="page-title text-4xl font-bold m-3 mb-[1.5em] pt-14 text-center text-slate-100">
        Projects
      </h1>
      {/* Frogger */}
      <ProjectCard
        title="Frogger"
        subtitle="Solo Project | One Week"
        icon="/assets/frog.png"
        image="/assets/Frogger.gif"
        imageAlt="Frogger Game"
        description={[
          'Inspired by the 80s classic arcade game "Frogger" the aim here was to incorporate similar elements and visual cues for an authentic experience.',
          "Although the visuals were not the main focus, my primary goal here was to ensure that the core functionality of the game is robust and mirrors the original.",
        ]}
        projectUrl="https://project-1-frogger.netlify.app/"
        githubUrl="https://github.com/8055-NVW/Project-1-Frogger"
        stack={[
          { name: "HTML", icon: "/assets/html-5.svg" },
          { name: "CSS", icon: "/assets/css-3.svg" },
          { name: "JavaScript", icon: "/assets/js.svg" },
          { name: "Netlify", icon: "/assets/netlify.svg" },
        ]}
      />
      {/* Movie Gallery */}
      <ProjectCard
        title="Movie Gallery"
        subtitle="Partner Project | Two Days"
        icon="/assets/movies.png"
        image="/assets/MovieGallery.gif"
        imageAlt="Movie Gallery Website"
        description={[
          "A React-based website that consumes an API and utilizes the Bootstrap framework, Movie Gallery lets users like movies and add them to their watch lists.",
          "We also incorporated a search bar to allow users to filter by category.",
        ]}
        projectUrl="https://6628db1561b28c07a2f00c15--zesty-cheesecake-010dd6.netlify.app/"
        githubUrl="https://github.com/8055-NVW/Project-2-React-Movie-API/tree/main"
        stack={[
          { name: "HTML", icon: "/assets/html-5.svg" },
          { name: "CSS", icon: "/assets/css-3.svg" },
          { name: "JavaScript", icon: "/assets/js.svg" },
          { name: "Vite", icon: "/assets/vite.svg" },
          { name: "React", icon: "/assets/react.svg" },
          { name: "Bootstrap", icon: "/assets/bootstrap.svg" },
          { name: "Insomnia", icon: "/assets/insomnia.svg" },
          { name: "Netlify", icon: "/assets/netlify.svg" },
        ]}
      />
      {/* Pedal */}
      <ProjectCard
        title="Pedal"
        subtitle="Group Project | One Week"
        icon="/assets/pedal.png"
        image="/assets/Pedal.gif"
        imageAlt="Pedal Website"
        description={[
          "Pedal is a social network for car enthusiasts. Users can manage posts, cars, and profiles, and follow others.",
          "Project 3 introduced the MERN stack, CRUD operations, and teamwork in a three-member team, enhancing skills in GitHub navigation and collaboration.",
        ]}
        projectUrl="https://project-pedal-035a309c1004.herokuapp.com/"
        githubUrl="https://github.com/8055-NVW/Project-3-Pedal"
        stack={[
          { name: "HTML", icon: "/assets/html-5.svg" },
          { name: "CSS", icon: "/assets/css-3.svg" },
          { name: "JavaScript", icon: "/assets/js.svg" },
          { name: "Vite", icon: "/assets/vite.svg" },
          { name: "React", icon: "/assets/react.svg" },
          { name: "Sass", icon: "/assets/sass.svg" },
          { name: "Bootstrap", icon: "/assets/bootstrap.svg" },
          { name: "Insomnia", icon: "/assets/insomnia.svg" },
          { name: "Cloudinary", icon: "/assets/cloudinary.svg" },
          { name: "JWT", icon: "/assets/jwt.svg" },
          { name: "Trello", icon: "/assets/trello.svg" },
          { name: "Heroku", icon: "/assets/heroku.svg" },
        ]}
      />
      {/* Blend Bay */}
      <ProjectCard
        title="BlendBay"
        subtitle="Solo Project | One Week"
        icon="/assets/milkshake.png"
        image="/assets/BlendBay.gif"
        imageAlt="Blend Bay Website"
        description={[
          "Blend Bay is a website for shake lovers to review, rate, and favorite shakes.",
          "For my final project, I expanded on Project 3, using Python and Django for the back end, and React with MaterialUI for the front end, to create a comprehensive shake website.",
        ]}
        projectUrl="https://blend-bay-155603fbccf6.herokuapp.com/"
        githubUrl="https://github.com/8055-NVW/Project-4-Blend-Bay"
        stack={[
          { name: "HTML", icon: "/assets/html-5.svg" },
          { name: "CSS", icon: "/assets/css-3.svg" },
          { name: "JavaScript", icon: "/assets/js.svg" },
          { name: "Python", icon: "/assets/python3.svg" },
          { name: "Vite", icon: "/assets/vite.svg" },
          { name: "React", icon: "/assets/react.svg" },
          { name: "Django", icon: "/assets/django.svg" },
          { name: "Material-UI", icon: "/assets/material-ui.svg" },
          { name: "MongoDB", icon: "/assets/mongodb.svg" },
          { name: "PostgreSQL", icon: "/assets/postgresql.svg" },
          { name: "Postman", icon: "/assets/postman.svg" },
          { name: "TablePlus", icon: "/assets/tableplus.svg" },
          { name: "Heroku", icon: "/assets/heroku.svg" },
          { name: "Trello", icon: "/assets/trello.svg" },
        ]}
      />
    </div>
  );
}
