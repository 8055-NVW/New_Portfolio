import { RefObject } from "react";
import SkillsGrid from "./custom/SkillsGrid";
import { skills } from "@/data/skills";

type SkillsProps = {
  skillsRef: RefObject<HTMLDivElement | null>;
};

export default function Skills({ skillsRef }: SkillsProps) {
  return (
    <div ref={skillsRef} className="min-h-screen pb-10 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-3 pt-14 text-center text-slate-100">
          Skills
        </h1>
        <p className="text-2xl mx-10 mt-5 text-center text-slate-100">
          Here are some of the technologies I have worked with.
        </p>
        {/* Render each skill category */}
        <div className="w-full px-4 max-w-7xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <SkillsGrid key={category} title={category} skills={[...items]} />
          ))}
        </div>
      </div>
    </div>
  );
}
