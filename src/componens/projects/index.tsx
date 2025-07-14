import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "EdTech Platform",
    description:
      "A task management app with real-time collaboration, built using React, Node.js, and MongoDB.",
    image: "/pic2.png",
    tags: ["React", "Nextjs", "TypeScript", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Aroma Cooking Assistant (UI Development)",
    description:
      "A scalable e-commerce platform with Next.js, Stripe payments, and TailwindCSS.",
    image: "/pic2.png",
    tags: ["React", "Nextjs", "TypeScript", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Site",
    description:
      "My personal portfolio showcasing my work, built with React, TailwindCSS, and Next.js.",
    image: "/pic2.png",
    tags: ["React", "Nextjs", "TypeScript", "TailwindCSS"],
    github: "#",
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
          A collection of my recent work, showcasing innovative solutions and clean code.
          Click to explore details.
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
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-md"
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <FaGithub />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
