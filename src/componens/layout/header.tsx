import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 py-4 sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="xs:text-lg md:text-xl font-bold">
          {"</>"}&nbsp;&nbsp;Karishma
        </h1>
        <ul className="xs:hidden md:flex gap-6 min-w-[400px] justify-around">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
