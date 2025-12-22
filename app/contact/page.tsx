import ContactPage from "../components/Contact";
import LastFooter from "../components/LastFooter";

export default function Contact() {
    return (
        <div className="space-y-8 mb-24">
            <div className="w-full bg-[#1e222b] lg:p-8 py-8 px-4 rounded-md flex items-center flex-col justify-center text-center gap-2">
                <h3 className="text-3xl font-bold">Contact</h3>
                <p className="max-w-lg text-center text-gray-400 font-medium tracking-wide">
                    Contact me to discuss job opportunities, freelance projects, or collaborations—I&apos;m eager to bring fresh energy and modern skills to your team. Reach out via email at [your-email@example.com] or LinkedIn for a quick chat.
                </p>
            </div>

            <ContactPage />

            <LastFooter />
        </div>
    );
}