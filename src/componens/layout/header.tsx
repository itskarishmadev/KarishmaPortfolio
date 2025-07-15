/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];

    const handleScroll = () => {
      let closestSection = "home";
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance && rect.top < window.innerHeight) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (section: any) =>
    `${
      activeSection === section ? "text-green-500" : "text-white"
    } hover:text-green-500 duration-300 hover:scale-[1.1]`;

  return (
    <header className="px-6 py-4 sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="xs:text-lg md:text-xl font-bold">
          <span className="flex w-full gap-1 items-center">
            <span className="h-[40px] w-[60px] relative overflow-hidden">
              <img
                src={"/logo_transparent.png"}
                width={60}
                height={60}
                className="object-cover object-center absolute top-[-10px]"
                alt="Logo"
              />
            </span>
            Karishma
          </span>
        </h1>

        <ul className="xs:hidden md:flex gap-6 min-w-[400px] justify-around">
          <li>
            <button
              onClick={() => {
                const section = document.getElementById("home");
                section?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("home");
              }}
              className={getLinkClass("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const section = document.getElementById("about");
                section?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("about");
              }}
              className={getLinkClass("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("projects");
              }}
              className={getLinkClass("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
                setActiveSection("contact");
              }}
              className={getLinkClass("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
