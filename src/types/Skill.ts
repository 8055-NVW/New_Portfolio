export type Skill = {
  name: string;
  icon: string;
  tier: "learning" | "projects" | "confident";
  level: 1 | 2 | 3 | 4;
};