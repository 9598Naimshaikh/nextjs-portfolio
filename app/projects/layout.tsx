import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naeem Shaikh - Projects",
  description: "Hi, I'm a Front-end Web Developer to showcase my skills.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        {children}
    </div>
  );
}