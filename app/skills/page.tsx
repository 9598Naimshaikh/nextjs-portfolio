"use client";

import { motion } from "motion/react";
import FirstFooter from "../components/FirstFooter";
import LastFooter from "../components/LastFooter";
import SkillsTools from "../components/SkillsTools";

export default function Skills() {
    return (
        <motion.div 
        initial={{ filter: "blur(8px)" }}
        animate={{ filter: "none" }}
        transition={{ duration: 0.3 }}
        className="space-y-8 mb-24">
            <div className="w-full bg-[#1e222b] lg:p-8 py-8 px-4 rounded-md flex items-center flex-col justify-center text-center gap-2">
                <h3 className="text-3xl font-bold">Skills</h3>
                <p className="flex flex-col text-center text-gray-400 font-medium tracking-wide">
                    <span>My Journey Into Frontend Development</span>
                    <span> and What I’ve Learned So Far</span>
                </p>
            </div>

            <div className="w-full bg-[#1e222b] rounded-md md:p-8 px-4 py-8 space-y-4">
                <SkillsTools />
            </div>

            {/* Footers */}
            <FirstFooter />
            <LastFooter />

        </motion.div>
    );
}