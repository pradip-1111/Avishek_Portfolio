import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Publications } from "@/components/sections/Publications";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <div className="grainy-overlay">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
