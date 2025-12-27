"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function LastFooter() {
    return (
        <motion.div
            initial={{ filter: "blur(8px)" }}
            animate={{ filter: "none" }}
            transition={{ duration: 0.4 }}
            className="w-full p-10 bg-[#1e222b] rounded-md">
            <div className="content text-center space-y-3">
                <h3 className="text-orange-500 font-medium">@Naeem_$haikh</h3>
                <div className="f space-x-5 w-fit mx-auto py-1 text-sm font-medium tracking-wide text-zinc-400">
                    <Link href="/" className="hover:text-orange-400">Home</Link>
                    <Link href="/projects" className="hover:text-orange-400">Projects</Link>
                    <Link href="/experience" className="hover:text-orange-400">Experience</Link>
                    <Link href="/skills" className="hover:text-orange-400">Skills</Link>
                    <Link href="/contact" className="hover:text-orange-400">Contact</Link>
                </div>
                <hr className="text-zinc-700"></hr>
                <div className="f">
                    <p className="text-xs tracking-wider font-medium text-zinc-400">Made by Naeem Shaikh | DEVELOPED on DEC 2025</p>
                </div>
            </div>
        </motion.div>
    );
}