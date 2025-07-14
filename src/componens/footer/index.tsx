import { useRouter } from "next/router";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaCode,
    FaLink,
} from "react-icons/fa";

const Footer = () => {
    const router = useRouter();
    return (

        <footer className="bg-[black] text-white py-16 px-6 md:px-20 border-t border-gray-700">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                {/* Column 1: Logo and Bio */}
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
                        <FaCode className="text-green-500" />
                        <span>Karishma</span>
                    </h2>
                    <p className="text-gray-400">
                        Building the future with clean code, creativity, and a passion for innovation.
                    </p>
                    <div className="flex gap-4 mt-4 text-xl text-gray-400">
                        <a href="https://github.com/itskarishmadev" className="hover:text-green-500">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/itskarishmamannan/" className="hover:text-green-500">
                            <FaLinkedin />
                        </a>


                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                        <FaLink className="text-green-400" />
                        Quick Links
                    </h3>
                    <ul className="text-gray-400 space-y-2">
                        <li><a href="#about" className="hover:text-green-400 cursor-pointer" onClick={() => router.push("/about")}>About</a></li>
                        <li><a href="#projects" className="hover:text-green-400" onClick={() => router.push("/projects")}>Projects</a></li>
                        {/* <li><a href="#services" className="hover:text-green-400">Services</a></li> */}
                        {/* <li><a href="#pricing" className="hover:text-green-400">Pricing</a></li> */}
                        {/* <li><a href="#blogs" className="hover:text-green-400">Blogs</a></li> */}
                        <li><a href="#contact" className="hover:text-green-400" onClick={() => router.push("/contact")}>Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                        <FaEnvelope className="text-green-400" />
                        Newsletter
                    </h3>
                    <p className="text-gray-400 mb-4">
                        Stay updated with my latest projects and tech insights.
                    </p>
                    <form className="flex flex-col w-full  gap-5">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-[#1f2937] relative z-10 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md font-semibold w-full sm:w-auto"
                        >
                            <FaEnvelope className="inline-block mr-1" />
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
                © 2025 karishma Crafted with 💚 and ☕
                <span className="block mt-1">
                    <a href="#" className="hover:text-green-400">Privacy Policy</a> | <a href="#" className="hover:text-green-400">Terms of Service</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;