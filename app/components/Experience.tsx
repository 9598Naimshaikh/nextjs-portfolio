"use client";

import { motion } from "motion/react";

export default function Experience() {
    return (
        <motion.div 
        initial={{ filter: "blur(8px)" }}
        animate={{ filter: "none" }}
        transition={{ duration: 0.3 }}
        className="w-full lg:p-8 py-8 px-4 bg-[#1e222b] rounded-md space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">Experience</h3>

            <div className="bg-[#262A33] p-4 rounded-md">
                <h3 className="font-bold tracking-normal">Web Development (Frontend Based Experience)</h3>
                <h4 className="text-orange-400 mt-2 text-xl font-medium">Swastik Srijan Foundation</h4>
                <h5 className="italic my-1 mb-3 font-medium tracking-wide">Team Project | November 2025</h5>
                <p className="text-sm md:text-md my-4 leading-normal font-medium text-zinc-300 tracking-wide">I worked with Swastik Srijan Foundation to design and develop a modern, fully responsive website in collaboration with three college teammates. The project was managed using GitHub for version control and effective team collaboration. The website focuses on clean UI, responsiveness, and performance.</p>
                <h4 className="text-orange-400 text-lg font-medium">Technology used :</h4>
                <p className="text-sm font-semibold tracking-wide text-zinc-200 mb-3">React.js | JavaScript | Tailwind CSS | Git & GitHub</p>
                <h4 className="font-semibold">Live Website : </h4>
                <a href="https://www.swastiksrijan.in" target="_blank" className="text-blue-400 tracking-wide text-sm">https://www.swastiksrijan.in</a>
            </div>
        </motion.div>
    );
}