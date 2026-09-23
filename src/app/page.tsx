import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

// Lazy-load sections for smooth initial bundle performance
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Contributions = dynamic(() => import("@/components/Contributions"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const CurrentlyExploring = dynamic(() => import("@/components/CurrentlyExploring"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contributions />
      <Experience />
      <CurrentlyExploring />
      <Contact />
    </>
  );
}
