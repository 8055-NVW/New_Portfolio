"use client";

import React from "react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  icon: string;
  stack: { name: string; icon: string }[];
  image: string;
  imageAlt: string;
  description: string[];
  projectUrl: string;
  githubUrl: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  icon,
  stack,
  image,
  imageAlt,
  description,
  projectUrl,
  githubUrl,
}) => {
  return (
    <div
      className="w-full max-w-4xl mx-auto my-12 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.4)] p-6 md:p-10 transition-all duration-300"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
        <img src={icon} alt={`${title} icon`} className="h-8" />
      </div>

      <h4 className="text-lg text-white/90 mb-6 text-center">{subtitle}</h4>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {stack.map((tech) => (
          <img
            key={tech.name}
            className="h-10 hover:scale-110 transition-transform"
            src={tech.icon}
            alt={tech.name}
            title={tech.name}
          />
        ))}
      </div>

      {/* Image + Description */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <div className="flex-1 w-full max-w-md">
          <img
            src={image}
            alt={imageAlt}
            className="rounded-xl w-full shadow-lg"
          />
        </div>
        <div className="flex-1 text-white text-base md:text-lg text-center md:text-left space-y-4">
          {description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 flex-wrap mt-6">
        <a href={projectUrl} target="_blank">
          <button className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200 text-white text-sm font-medium shadow-inner backdrop-blur-md ring-1 ring-white/20 hover:ring-2 hover:ring-purple-300">
            <img src="/assets/link.svg" className="h-5" alt="link icon" />
            Project
          </button>
        </a>
        <a href={githubUrl} target="_blank">
          <button className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200 text-white text-sm font-medium shadow-inner backdrop-blur-md ring-1 ring-white/20 hover:ring-2 hover:ring-purple-300">
            <img
              src="/assets/githubwhitesvg.svg"
              className="h-5 bg-white rounded-full"
              alt="GitHub"
            />
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
};
