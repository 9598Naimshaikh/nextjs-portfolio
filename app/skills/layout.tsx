import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naeem Shaikh - Skills",
  description: "Hi, I'm a Front-end Web Developer to showcase my skills.",
};

export default function SkillsLayout({
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