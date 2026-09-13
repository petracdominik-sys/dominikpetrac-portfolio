import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowICanHelp from "@/components/HowICanHelp";
import CaseStudyRegge from "@/components/CaseStudyRegge";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Nav />
      <main>
        <Hero />
        <HowICanHelp />
        <CaseStudyRegge />
        <TechStack />
        <About />
        <Contact />
      </main>
    </ScrollRevealProvider>
  );
}
