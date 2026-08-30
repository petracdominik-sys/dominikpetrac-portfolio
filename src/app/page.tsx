import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowICanHelp from "@/components/HowICanHelp";
import AutomationShowcase from "@/components/AutomationShowcase";
import CaseStudyRegge from "@/components/CaseStudyRegge";
import CaseStudyMineral from "@/components/CaseStudyMineral";
import AIVideoShowcase from "@/components/AIVideoShowcase";
import Process from "@/components/Process";
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
        <AutomationShowcase />
        <CaseStudyRegge />
        <CaseStudyMineral />
        <AIVideoShowcase />
        <Process />
        <About />
        <TechStack />
        <Contact />
      </main>
    </ScrollRevealProvider>
  );
}
