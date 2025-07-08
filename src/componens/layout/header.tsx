import Link from "next/link";
import { FaCode } from "react-icons/fa";

export default function Header() {
  return (
    <header className="px-6 py-4 sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="xs:text-lg md:text-xl font-bold">
          <span className="flex w-full gap-4 items-center">          <FaCode color="green" size={30} />Karishma</span>
        </h1>
        <ul className="xs:hidden md:flex gap-6 min-w-[400px] justify-around">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white"
            >
              Projects
            </button>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
