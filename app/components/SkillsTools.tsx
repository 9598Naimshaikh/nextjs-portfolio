"use client"
import Image from "next/image";

const skill_data = [
    {
        "name": "Next.js",
        "description": "React Framework",
        "icon": "/icons/nextjs.png"
    },
    {
        "name": "React.js",
        "description": "UI Library",
        "icon": "/icons/reactjs.png"
    },
    {
        "name": "Tailwind CSS",
        "description": "Utility-first CSS Framework",
        "icon": "/icons/tailwindcss.png"
    },
    {
        "name": "HTML",
        "description": "Web Structure",
        "icon": "/icons/html.png"
    },
    {
        "name": "CSS",
        "description": "Web Styling",
        "icon": "/icons/css.png"
    },
    {
        "name": "JavaScript",
        "description": "Web Logic",
        "icon": "/icons/js.png"
    },
    {
        "name": "Git",
        "description": "Version Control",
        "icon": "/icons/git.png"
    },
    {
        "name": "GitHub",
        "description": "Code Collaboration",
        "icon": "/icons/github.png"
    },
    {
        "name": "Python",
        "description": "Programming Language",
        "icon": "/icons/python.png"
    },
    {
        "name": "Linux",
        "description": "Operating System",
        "icon": "/icons/linux.png"
    }
]

export default function SkillsTools() {
    return (
        <div className="w-full grid md:grid-cols-2 gap-6">
            {skill_data.map((skill, index) => {
                return (
                    <div key={index} className="flex items-center gap-4 p-4 bg-[#262A33] rounded-md">
                        <div className="icons bg-zinc-100 py-2 px-2 rounded-xl">
                            <Image src={skill.icon} alt="" width={50} height={50} className="w-10 h-10 object-contain" />
                        </div>
                        <div className="text">
                            <h3 className="font-bold text-lg tracking-wide">{skill.name}</h3>
                            <p className="text-zinc-300 font-medium tracking-wide text-sm">{skill.description}</p>
                        </div>
                    </div>
                );
            })}




        </div>
    );
}