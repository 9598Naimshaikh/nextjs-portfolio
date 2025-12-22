import FirstFooter from "../components/FirstFooter";
import LastFooter from "../components/LastFooter";
import Experience from "../components/Experience";

export default function ExperiencePage() {
    return (
        <div className="space-y-8 mb-24">
            <div className="w-full bg-[#1e222b] lg:p-8 py-8 px-4 rounded-md flex items-center flex-col justify-center text-center gap-2">
                <h3 className="text-3xl font-bold">Experience</h3>
                <p className="flex flex-col text-center text-gray-400 font-medium tracking-wide">
                    <span>Here I showcase my latest and</span>
                    <span>greatest web Development work experience.</span>
                </p>
            </div>

            <Experience />

            <FirstFooter />
            <LastFooter />
        </div>
    );
}