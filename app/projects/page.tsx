"use client";

import Image from "next/image";
import FirstFooter from "../components/FirstFooter";
import LastFooter from "../components/LastFooter";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

const projects_data = [
    {
        "website_url": "https://9598naimshaikh.github.io/Modern-Creative-NajmAI-Website/",
        "image_url": "/images/project1.png",
        "name": "Najm AI",
        "desc": "Modern Animated Website",
        "skills": ["HTML", "CSS", "JS"]
    },
    {
        "website_url": "https://9598naimshaikh.github.io/Modern-Animated-Oslo-Website/",
        "image_url": "/images/project2.png",
        "name": "Oslo",
        "desc": "Animated Oslo Website",
        "skills": ["HTML", "CSS", "JS"]
    },
    {
        "website_url": "https://9598naimshaikh.github.io/My-Personal-Light-theme-Portfolio-website/",
        "image_url": "/images/project3.png",
        "name": "Portfolio",
        "desc": "Clean UI Portfolio Website",
        "skills": ["HTML", "CSS", "JS"]
    },
    {
        "website_url": "https://9598naimshaikh.github.io/Modern_Portfolio/",
        "image_url": "/images/project4.png",
        "name": "Portfolio",
        "desc": "Dark Theme Portfolio Website",
        "skills": ["HTML", "CSS", "JS"]
    },
    {
        "website_url": "https://codepen.io/naim-shaikh/full/QWJREgM",
        "image_url": "/images/project5.png",
        "name": "UltraEdit Website",
        "desc": "Simple UltraEdit Website clone",
        "skills": ["HTML", "CSS", "JS"]
    },
    {
        "website_url": "https://9598naimshaikh.github.io/Job-Posting-Webstite/",
        "image_url": "/images/project6.png",
        "name": "JobLand",
        "desc": "Modern Job Portal Website",
        "skills": ["HTML", "CSS", "JS"]
    },
]

export default function Projects() {
    return (
        <motion.div 
        initial={{ filter: "blur(8px)" }}
        animate={{ filter: "none" }}
        transition={{ duration: 0.3 }}
        className="space-y-8 mb-24">

            <div className="w-full bg-[#1e222b] lg:p-8 py-8 px-4 rounded-md flex items-center flex-col justify-center text-center gap-2">
                <h3 className="text-3xl font-bold">Projects</h3>
                <p className="flex flex-col text-center text-gray-400 font-medium tracking-wide">
                    <span>Where I showcase my latest and</span>
                    <span>greatest web development work.</span>
                </p>
            </div>

            <div className="w-full bg-[#1e222b] rounded-md md:p-8 px-4 py-8 space-y-4">
                {projects_data.map((data, index) => {
                    return (
                        <div key={index} className="bg-[#262A33] hover:bg-[#323845] hover:scale-101 cursor-pointer duration-300 transition-all p-4 rounded-md">
                            <a href="https://9598naimshaikh.github.io/Modern-Creative-NajmAI-Website/" target="_blank" className="">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Image src={data.image_url} width={100} height={100} alt="" className="w-40 object-contain" />
                                        <div className="">
                                            <h3 className="text-md font-bold tracking-normal">{data.name}</h3>
                                            <p className="text-zinc-400 font-medium text-sm tracking-normal">{data.desc}</p>
                                            <div className="text-[11px] mt-2 font-medium tracking-wide flex items-center gap-2">
                                                <span className="bg-orange-500 py-0.5 px-2 rounded-lg">{data.skills[0]}</span>
                                                <span className="bg-blue-600 py-0.5 px-2 rounded-lg">{data.skills[1]}</span>
                                                <span className="bg-yellow-500 py-0.5 px-2 rounded-lg">{data.skills[2]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#17191f] hidden sm:flex p-2 rounded-md"><FaArrowRightLong /></div>
                                </div>
                            </a>
                        </div>
                    );
                })}

            </div>

            {/* FirstFooter */}
            <FirstFooter />

            {/* LastFooter */}
            <LastFooter />
        </motion.div>
    );
}