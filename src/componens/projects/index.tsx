/* eslint-disable @typescript-eslint/no-unused-vars */

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "EdTech Platform",
    description:
      "An interactive e-learning platform with flexible courses, live tutor chats, and quizzes, plus community features like posts, comments, and likes for collaboration.",
    image: "/mynervapic.png",
    tags: ["React", "Nextjs", "TypeScript", "TailwindCSS"],
    github: "",
    demo: "https://mynerva.in/",
  },
  {
    title: "Aroma Cooking Assistant (UI Development)",
    description:
      "Developed a responsive UI for Aroma, Emphasized clean design, smooth UX, and seamless user interactions.",
    image: "/aromapic.png",
    tags: ["React", "Nextjs", "TypeScript", "TailwindCSS"],
    github: "",
    demo: "https://aroma.org.in/",
  },
  {
    title: "Portfolio Site",
    description:
      "A personal portfolio built with React, TailwindCSS, and Next.js to showcase my projects and skills.Highlights work through a clean, responsive, and modern design.",
    image: "/portfoliopic.png",
    tags: ["React", "Nextjs", "TypeScript", "TailwindCSS"],
    github: "https://github.com/itskarishmadev/KarishmaPortfolio",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20" id="projects">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-white">Latest</span>{" "}
          <span className="text-green-500">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          A collection of my recent work, showcasing innovative solutions and
          clean code. Click to explore details.
        </p>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-gray-700 rounded-lg p-4 shadow-xl hover:shadow-green-500/30 transition duration-300"
          >
            <div className="relative w-full h-52 md:h-56 lg:h-64 mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover rounded-md h-full w-full"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#1f2937] px-2 py-1 text-xs rounded-md border border-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xl text-gray-300">
              {project?.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  <FaGithub />
                </a>
              )}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <FaExternalLinkAlt size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
