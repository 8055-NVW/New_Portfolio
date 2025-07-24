"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Capitalize from "@/utils/HelperFunctions";
import { Skill } from "@/types/Skill";

type SkillsGridProps = {
  title: string;
  skills: Skill[];
};

export default function SkillsGrid({ title, skills }: SkillsGridProps) {
  return (
    <section className="w-full my-12">
      <h2 className="text-2xl font-bold text-slate-100 mb-1 text-center">
        {title}
      </h2>
      <div className="flex justify-center gap-4 text-xs text-slate-300 mb-4">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-400" /> Confident
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-blue-400" /> Used in Projects
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-yellow-400" /> Learning
        </div>
      </div>
      <div className="bg-[#000000ab] backdrop-blur-xl m-5 md:m-10 justify-center rounded-xl p-6 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <CardContainer key={index} className="card-container">
            <CardBody className="relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 md:p-6">
              <CardItem
                translateZ="400"
                className="w-full flex flex-col items-center"
              >
                <div className="relative w-[50px] h-[50px]">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain rounded-xl mb-2"
                    sizes="50px"
                  />
                </div>
                <CardItem
                  translateZ="50"
                  className="text-sm text-center font-bold text-slate-100 dark:text-white"
                >
                  {skill.name}
                </CardItem>
                <CardItem
                  translateZ="20"
                  title={`${Capitalize(skill.tier)} Level ${skill.level}/4`}
                  className="mt-1 flex flex-row items-center justify-center gap-[5px]"
                >
                  {[1, 2, 3, 4].map((i) => {
                    const isFilled = i <= skill.level;
                    const color =
                      skill.tier === "confident"
                        ? "bg-green-400"
                        : skill.tier === "projects"
                        ? "bg-blue-400"
                        : "bg-yellow-400";

                    return (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          isFilled ? color : "bg-gray-500/30"
                        }`}
                      />
                    );
                  })}
                </CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
