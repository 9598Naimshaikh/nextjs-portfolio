import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import FirstFooter from "./components/FirstFooter";
import LastFooter from "./components/LastFooter";
import Experience from "./components/Experience";
import SkillsTools from "./components/SkillsTools";
import Link from "next/link";


export default function Home() {
  return (
    <div className="lg:p-4 py-4 px-0 space-y-10 scroll-smooth mb-20">
      {/* Profile Section */}
      <div className="w-full bg-[#1e222b] lg:p-8 py-8 px-4 rounded-md flex items-center flex-col justify-center">
        <div className="profile bg-zinc-100 w-26 h-26 rounded-full overflow-hidden p-1">
          <Image src="/images/profile.png" alt="profile image" width={100} height={100} className="w-full h-full rounded-full" />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-xl">Naeem Shaikh</h1>
          <p className="text-4xl font-black tracking-normal">Web Developer</p>
          <div className="onlinelinks flex items-center justify-center gap-4 text-xl my-3">
            <a href="" target="_blank" className="text-orange-500"><CiLinkedin /></a>
            <a href="" target="_blank" className="text-orange-500"><TfiTwitter /></a>
            <a href="" target="_blank" className="text-orange-500"><FaInstagram /></a>
          </div>

          <p className="max-w-xs text-zinc-400 font-medium">Hi, I&apos;m Naeem Shaikh, a creative Web Developer who loves to create modern and stunning websites.</p>

        </div>
      </div>

      {/* Project Section */}
      <div className="w-full bg-[#1e222b] rounded-md md:p-8 px-4 py-8 space-y-4">
        <h3 className="text-2xl font-bold text-orange-500">Projects</h3>

        <div className="bg-[#262A33] hover:bg-[#323845] hover:scale-101 cursor-pointer duration-300 transition-all p-4 rounded-md">
          <a href="https://9598naimshaikh.github.io/Modern-Creative-NajmAI-Website/" target="_blank" className="">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src="/images/project1.png" width={100} height={100} alt="" className="w-40 object-contain" />
                <div className="">
                  <h3 className="text-md font-bold tracking-normal">Najm AI</h3>
                  <p className="text-zinc-400 font-medium text-sm tracking-normal">Modern Animated Website</p>
                  <div className="text-[11px] mt-2 font-medium tracking-wide flex items-center gap-2">
                    <span className="bg-orange-500 py-0.5 px-2 rounded-lg">HTML</span>
                    <span className="bg-blue-600 py-0.5 px-2 rounded-lg">CSS</span>
                    <span className="bg-yellow-500 py-0.5 px-2 rounded-lg">JS</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#17191f] p-2 rounded-md"><FaArrowRightLong /></div>
            </div>
          </a>
        </div>

        <div className="bg-[#262A33] hover:bg-[#323845] hover:scale-101 duration-300 transition-all p-4 rounded-md">
          <a href="https://9598naimshaikh.github.io/Modern-Animated-Oslo-Website/" target="_blank" className="">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src="/images/project2.png" width={100} height={100} alt="" className="w-40 object-contain" />
                <div className="">
                  <h3 className="text-md font-bold tracking-normal">Oslo</h3>
                  <p className="text-zinc-400 font-medium text-sm tracking-normal">Animated Oslo Website</p>
                  <div className="text-[11px] mt-2 font-medium tracking-wide flex items-center gap-2">
                    <span className="bg-orange-500 py-0.5 px-2 rounded-lg">HTML</span>
                    <span className="bg-blue-600 py-0.5 px-2 rounded-lg">CSS</span>
                    <span className="bg-yellow-500 py-0.5 px-2 rounded-lg">JS</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#17191f] p-2 rounded-md"><FaArrowRightLong /></div>
            </div>
          </a>
        </div>

        <div className="bg-[#262A33] hover:bg-[#323845] hover:scale-101 duration-300 transition-all p-4 rounded-md">
          <a href="https://9598naimshaikh.github.io/My-Personal-Light-theme-Portfolio-website/" target="_blank" className="">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src="/images/project3.png" width={100} height={100} alt="" className="w-40 object-contain" />
                <div className="">
                  <h3 className="text-md font-bold tracking-normal">Portfolio</h3>
                  <p className="text-zinc-400 font-medium text-sm tracking-normal">Clean UI Portfolio Website</p>
                  <div className="text-[11px] mt-2 font-medium tracking-wide flex items-center gap-2">
                    <span className="bg-orange-500 py-0.5 px-2 rounded-lg">HTML</span>
                    <span className="bg-blue-600 py-0.5 px-2 rounded-lg">CSS</span>
                    <span className="bg-yellow-500 py-0.5 px-2 rounded-lg">JS</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#17191f] p-2 rounded-md"><FaArrowRightLong /></div>
            </div>
          </a>
        </div>

        <Link href="/projects" className="text-blue-500 py-2 px-4">View More......</Link>

      </div>


      {/* Experience Section */}
      <Experience />

      {/* Skills & Tools */}
      <div className="w-full bg-[#1e222b] rounded-md md:p-8 px-4 py-8 space-y-4">
        <h3 className="text-2xl font-bold text-orange-500">Skills & Tools</h3>
        <SkillsTools />
      </div>

      {/* First Footer */}
      <FirstFooter />
      {/* Last Footer */}
      <LastFooter />

    </div>
  );
}
