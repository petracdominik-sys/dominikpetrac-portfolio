import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import CaseStudyRegge from "@/components/CaseStudyRegge";
import ColdOutreachCaseStudy from "@/components/ColdOutreachCaseStudy";
import AIAgents from "@/components/AIAgents";
import AIVideoShowcase from "@/components/AIVideoShowcase";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Nav />
      <main>
        <Hero />
        <ComparisonTable />
        <CaseStudyRegge />
        <ColdOutreachCaseStudy />
        <AIAgents />
        <AIVideoShowcase />
        <TechStack />
        <About />
        <Contact />
      </main>
    </ScrollRevealProvider>
  );
}
