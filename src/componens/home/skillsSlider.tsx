import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
];

const InfiniteSkillsSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black py-4">
      <div className="animate-marquee inline-block">
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 mx-6 text-xl font-semibold text-white"
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default InfiniteSkillsSlider;
