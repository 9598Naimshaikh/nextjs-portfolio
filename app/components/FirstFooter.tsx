"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function FirstFooter() {
    return (
        <motion.div 
        initial={{ filter: "blur(8px)" }}
        animate={{ filter: "none" }}
        transition={{ duration: 0.3 }}
        className="w-full p-4 bg-[#1e222b] rounded-md flex items-center justify-center">
            <div className="content text-center space-y-6 py-5">
                <h1 className="flex flex-col text-2xl font-bold text-zinc-100">
                    <span>Let’s create</span>
                    <span>something together!</span>
                </h1>
                <Link href="/contact" className="bg-linear-to-bl from-orange-800 hover:from-orange-400/90 hover:to-orange-900 shadow-[2px_2px_0px_orangered] hover:shadow-[0px_0px_0px_#333] border border-orange-400/10 transition-all duration-300 font-medium text-sm px-10 py-2 rounded-md">Contact</Link>
            </div>
        </motion.div>
    );
}