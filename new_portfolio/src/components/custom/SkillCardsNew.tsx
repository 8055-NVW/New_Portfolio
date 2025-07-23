// "use client";
// import { motion } from "framer-motion";

// type SkillCardProps = {
//   icon: string;
//   label: string;
//   tier: "learning" | "projects" | "confident";
//   level: number; // from 0 to 4
// };

// export default function SkillCard({ icon, label, tier, level }: SkillCardProps) {
//   return (
//     <motion.div
//       className="w-20 h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 flex flex-col items-center justify-center rounded-xl bg-[#ffffff08] backdrop-blur-sm shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
//       whileHover={{ scale: 1.05, rotateX: 4, rotateY: 4 }}
//     >
//       <img src={icon} alt={label} className="h-10 md:h-12 mb-1" />
//       <span className="text-sm md:text-base text-slate-100 text-center">
//         {label}
//       </span>

//       {/* Skill Dots */}
//       <div className="flex gap-1 mt-1" title={`${tier} – ${level}/4`}>
//         {[...Array(4)].map((_, i) => {
//           const filled =
//             i < level
//               ? tier === "learning"
//                 ? "bg-sky-400"
//                 : tier === "projects"
//                 ? "bg-yellow-400"
//                 : "bg-emerald-400"
//               : "bg-white/20 border border-white/10";

//           return <div key={i} className={`w-2.5 h-2.5 rounded-full ${filled}`} />;
//         })}
//       </div>
//     </motion.div>
//   );
// }
