import { RefObject } from "react";
import SkillsGrid from "./custom/SkillsGrid";

type SkillsProps = {
  skillsRef: RefObject<HTMLElement | null>;
};

// const skills = {
//   Languages: [
//     { name: "HTML", icon: "/assets/html-5.svg" },
//     { name: "CSS", icon: "/assets/css-3.svg" },
//     { name: "JavaScript", icon: "/assets/js.svg" },
//     { name: "Python", icon: "/assets/python3.svg" },
//     { name: "SQL", icon: "/assets/sql.svg" },
//   ],
//   Frontend: [
//     { name: "React", icon: "/assets/react.svg" },
//     { name: "Tailwind", icon: "/assets/tailwind.svg" },
//     { name: "Sass", icon: "/assets/sass.svg" },
//     { name: "Material-UI", icon: "/assets/material-ui.svg" },
//     { name: "Bootstrap", icon: "/assets/bootstrap.svg" },
//     { name: "Vite", icon: "/assets/vite.svg" },
//     { name: "Chrome DevTools", icon: "/assets/chrome-devtools.svg" },
//   ],
//   Backend: [
//     { name: "NodeJS", icon: "/assets/nodejs.svg" },
//     { name: "Django", icon: "/assets/django.svg" },
//     { name: "JWT", icon: "/assets/jwt.svg" },
//   ],
//   Databases: [
//     { name: "PostgreSQL", icon: "/assets/postgresql.svg" },
//     { name: "MongoDB", icon: "/assets/mongodb.svg" },
//     { name: "TablePlus", icon: "/assets/tableplus.svg" },
//   ],
//   Tools: [
//     { name: "Terminal", icon: "/assets/terminal.svg" },
//     { name: "VSCode", icon: "/assets/vscode.svg" },
//     { name: "GitHub", icon: "/assets/github.svg" },
//     { name: "Postman", icon: "/assets/postman.svg" },
//     { name: "Insomnia", icon: "/assets/insomnia.svg" },
//     { name: "Trello", icon: "/assets/trello.svg" },
//     { name: "Netlify", icon: "/assets/netlify.svg" },
//     { name: "Heroku", icon: "/assets/heroku.svg" },
//     { name: "Cloudinary", icon: "/assets/cloudinary.svg" },
//     { name: "Ubuntu", icon: "/assets/ubuntu.svg" },
//     { name: "Linux", icon: "/assets/linux.svg" },
//     { name: "NPM", icon: "/assets/npm.svg" },
//   ],
// };

const skills = {
  Languages: [
    { name: "HTML", icon: "/assets/html-5.svg", tier: "confident", level: 4 },
    { name: "CSS", icon: "/assets/css-3.svg", tier: "confident", level: 3 },
    { name: "JavaScript", icon: "/assets/js.svg", tier: "confident", level: 4 },
    { name: "Python", icon: "/assets/python3.svg", tier: "projects", level: 2 },
    { name: "SQL", icon: "/assets/sql.svg", tier: "projects", level: 3 },
  ],
  Frontend: [
    { name: "React", icon: "/assets/react.svg", tier: "confident", level: 4 },
    { name: "Tailwind", icon: "/assets/tailwind.svg", tier: "confident", level: 4 },
    { name: "Sass", icon: "/assets/sass.svg", tier: "projects", level: 2 },
    { name: "Material-UI", icon: "/assets/material-ui.svg", tier: "projects", level: 3 },
    { name: "Bootstrap", icon: "/assets/bootstrap.svg", tier: "projects", level: 2 },
    { name: "Vite", icon: "/assets/vite.svg", tier: "learning", level: 2 },
    { name: "Chrome DevTools", icon: "/assets/chrome-devtools.svg", tier: "confident", level: 3 },
  ],
  Backend: [
    { name: "NodeJS", icon: "/assets/nodejs.svg", tier: "projects", level: 3 },
    { name: "Django", icon: "/assets/django.svg", tier: "projects", level: 2 },
    { name: "JWT", icon: "/assets/jwt.svg", tier: "learning", level: 1 },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "/assets/postgresql.svg", tier: "projects", level: 3 },
    { name: "MongoDB", icon: "/assets/mongodb.svg", tier: "projects", level: 2 },
    { name: "TablePlus", icon: "/assets/tableplus.svg", tier: "confident", level: 3 },
  ],
  Tools: [
    { name: "Terminal", icon: "/assets/terminal.svg", tier: "confident", level: 4 },
    { name: "VSCode", icon: "/assets/vscode.svg", tier: "confident", level: 4 },
    { name: "GitHub", icon: "/assets/github.svg", tier: "confident", level: 4 },
    { name: "Postman", icon: "/assets/postman.svg", tier: "confident", level: 3 },
    { name: "Insomnia", icon: "/assets/insomnia.svg", tier: "learning", level: 1 },
    { name: "Trello", icon: "/assets/trello.svg", tier: "projects", level: 2 },
    { name: "Netlify", icon: "/assets/netlify.svg", tier: "projects", level: 3 },
    { name: "Heroku", icon: "/assets/heroku.svg", tier: "projects", level: 2 },
    { name: "Cloudinary", icon: "/assets/cloudinary.svg", tier: "learning", level: 2 },
    { name: "Ubuntu", icon: "/assets/ubuntu.svg", tier: "learning", level: 1 },
    { name: "Linux", icon: "/assets/linux.svg", tier: "learning", level: 2 },
    { name: "NPM", icon: "/assets/npm.svg", tier: "confident", level: 4 },
  ],
} as const;


export default function Skills({ skillsRef }: SkillsProps) {
  return (
    <div ref={skillsRef} className="min-h-screen pb-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-3 pt-14 text-center text-slate-100">
          Skills
        </h1>
        <p className="text-2xl mx-10 mt-5 text-center text-slate-100">
          Here are some of the technologies I have worked with.
        </p>
        {/* Render each skill category */}
        <div className="w-full px-4">
          {Object.entries(skills).map(([category, items]) => (
            <SkillsGrid key={category} title={category} skills={items} />
          ))}
        </div>
      </div>
    </div>
  );
}
