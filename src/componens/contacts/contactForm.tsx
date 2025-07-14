import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
const ContactForm = () => {
    return (
        <section className="bg-black text-white py-16 px-6 md:px-20" id="contact">
            <div className="max-w-6xl mx-auto border border-gray-700 bg-slate-950 rounded-lg p-6 md:p-10">

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Form */}
                    <div>
                        <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                            <FaEnvelope className="text-green-400" /> Send a Message
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 bg-[#1a1e27] relative z-10 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 bg-[#1a1e27] relative z-10 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full px-4 py-2 bg-[#1a1e27] relative z-10 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-green-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-green-600 flex items-center gap-2 transition"
                            >
                                <FaPaperPlane />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right: Info */}
                    <div>
                        <h2 className="text-xl font-bold text-green-400 mb-4">Contact Info</h2>

                        <ul className="space-y-4 mb-6">
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-green-400" />
                                itskarishmamannan@gmail.com
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-green-400" />
                                +91 9629450416
                            </li>
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-green-400" />
                                Chennai, Tamil Nadu
                            </li>
                        </ul>

                        <h3 className="text-md font-bold mb-2">Connect with Me</h3>
                        <div className="flex items-center gap-4 text-2xl">
                            <a href="https://github.com/itskarishmadev" target="_blank" className="hover:text-green-400">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/itskarishmamannan/" target="_blank" className="hover:text-green-400">
                                <FaLinkedin />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactForm;