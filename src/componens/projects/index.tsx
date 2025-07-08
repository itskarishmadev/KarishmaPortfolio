import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "Taskify App",
    // icon: <FaTasks className="text-green-400 inline-block mr-2" />,
    description:
      "A task management app with real-time collaboration, built using React, Node.js, and MongoDB.",
    image: "/pic.png", // Replace with your image path
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Shop Platform",
    // icon: <FaShoppingCart className="text-green-400 inline-block mr-2" />,
    description:
      "A scalable e-commerce platform with Next.js, Stripe payments, and TailwindCSS.",
    image: "/pic.png",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Site",
    // icon: <FaLaptopCode className="text-green-400 inline-block mr-2" />,
    description:
      "My personal portfolio showcasing my work, built with HTML, TailwindCSS, and Alpine.js.",
    image: "/pic.png",
    tags: ["HTML", "TailwindCSS", "Alpine.js"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-[#0d1117] text-white py-16 px-6 md:px-20" id="projects">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-white">Latest</span>{" "}
          <span className="text-green-500">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A collection of my recent work, showcasing innovative solutions and clean code. Click to explore details.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-gray-700 rounded-lg p-4 shadow-md hover:shadow-green-500/30 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">
              {/* {project.icon} */}
              <span className="text-white">{project.title}</span>
            </h3>

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
              <a href={project.github} target="_blank" className="hover:text-green-400">
                <FaGithub />
              </a>
              <a href={project.demo} target="_blank" className="hover:text-green-400">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;