import { FaUserAlt, FaCodeBranch } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="bg-[#050e1b] text-white px-6 py-16 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-green-400">{"< "}</span>
          About Me
          <span className="text-green-400">{" />"}</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          I craft responsive, user-friendly interfaces using modern frontend technologies.
          Passionate about clean code, performance, and seamless user experiences
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Who I Am */}
        <div className="bg-[#111827] border border-gray-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaUserAlt className="text-green-400" />
            Who <span className="text-white font-mono text-lg">I Am</span>
          </h2>
          <p className="text-gray-400 mb-4">
            Frontend Developer with 2 years of experience in building responsive web applications using
            React.js and Next.js. Skilled in modern JavaScript, TypeScript, API integration, and UI development
            with Tailwind CSS. Strong focus on performance, SEO, and clean, maintainable code.
          </p>
          <p className="text-gray-400 mb-6">
            When I'm not coding, I spend time learning new concepts, sharpening my problem-solving skills, or reading about emerging trends in tech.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-black/40 p-4 rounded-lg text-center">
              <p className="text-green-400 text-2xl font-bold">8</p>
              <p className="text-sm text-gray-400">Repositories</p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg text-center">
              <p className="text-green-400 text-2xl font-bold">1k</p>
              <p className="text-sm text-gray-400">Commits</p>
            </div>
            <div className="bg-black/40 p-4 rounded-lg text-center">
              <p className="text-green-400 text-2xl font-bold">0</p>
              <p className="text-sm text-gray-400">PRs Merged</p>
            </div>
          </div>
        </div>

        {/* My Toolbox */}
        <div className="bg-[#111827] border border-gray-700 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaCode className="text-green-400" />
            My <span className="text-white font-mono text-lg">Toolbox</span>
          </h2>

          {/* Skills with Progress Bars */}
          <div className="space-y-4 mb-6">
            <SkillBar label="JavaScript (ES6+)" percent={90} />
            <SkillBar label="React.js , Next.js" percent={85} />
            <SkillBar label="Tailwind CSS" percent={90} />
            <SkillBar label="Responsive Design" percent={92} />
            <SkillBar label="Git & Version Control" percent={78} />
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "TypeScript",
              "TailwindCSS",
              "Python",
              "Docker",
              "Git",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-[#1f2937] px-3 py-1 text-sm rounded-full text-gray-200 border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for skill bar
function SkillBar({ label, percent }: any) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default About;