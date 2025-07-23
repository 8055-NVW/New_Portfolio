// "use client";
// import { motion } from "framer-motion";

// type SkillCardProps = {
//   icon: string;
//   label: string;
// };

// export default function SkillCard({ icon, label }: SkillCardProps) {
//   return (
//     <motion.div
//       className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center rounded-xl bg-[#ffffff08] backdrop-blur-sm shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
//       whileHover={{ scale: 1.05, rotateX: 4, rotateY: 4 }}
//     >
//       <img src={icon} alt={label} className="h-10 md:h-12 mb-1" />
//       <span className="text-sm md:text-base text-slate-100 text-center">
//         {label}
//       </span>
//     </motion.div>
//   );
// }
