
import React, { useEffect, useState } from "react";
import { FaBed, FaCode, FaUtensils } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

const RotatingCircle = () => {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prev) => (prev + 1) % 360);
        }, 50); // rotate 1° every 50ms (adjust for speed)
        return () => clearInterval(interval);
    }, []);
    return (

        <div className="min-h-screen  flex flex-col items-center justify-center text-white px-4">
            <h2 className="text-3xl font-bold mb-2 text-center ">
                Ready to <span className="text-green-500">Collaborate?</span>
            </h2>
            <p className="text-center max-w-md mb-10 text-gray-300">
                My life revolves around code, coffee, and creativity. Let’s build something amazing together!
            </p>

            {/* Rotating Circle */}
            <div className="relative  xs:w-[300px] xs:h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-black border border-gray-700 shadow-[0_0_60px_10px_rgba(0,255,0,0.3)] overflow-hidden">
                {/* Icons Wrapper - Rotated via React state */}
                <div
                    className="absolute  inset-0 transition-transform duration-[50ms] ease-linear"
                    style={{ transform: `rotate(${angle}deg)` }}
                >
                    {/* REPEAT */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 text-center">
                        <span className="flex flex-col justify-center items-center gap-2">
                            <FaRepeat color="green" />
                            <p className="text-xs font-semibold">REPEAT</p>
                        </span>

                    </div>

                    {/* SLEEP */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                        <span className="flex flex-col justify-center items-center gap-2">
                            <FaBed color="green" />
                            <p className="text-xs font-semibold">SLEEP</p>

                        </span>

                    </div>

                    {/* CODE */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-center">
                        <span className="flex flex-col justify-center items-center gap-2"> <FaCode color="green" />
                            <p className="text-xs font-semibold">CODE</p></span>


                    </div>

                    {/* EAT */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-center">
                        <span className="flex flex-col justify-center items-center gap-2">
                            <FaUtensils color="green" />
                            <p className="text-xs font-semibold">EAT</p>
                        </span>


                    </div>
                </div>

                {/* Static Hire Me Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button className="bg-green-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition"
                        onClick={() => {
                            const section = document.getElementById("contact");
                            section?.scrollIntoView({ behavior: "smooth" });

                        }}>
                        {/* <Briefcase className="inline-block mr-2" size={18} /> */}
                        Hire Me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RotatingCircle