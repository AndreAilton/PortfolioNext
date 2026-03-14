import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Certifications from "@/components/certifications";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import GithubContributions from "@/components/github-contributions";
import ScrollProgress from "@/components/scroll-progress";
import Skills from "@/components/skills";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    // ATUALIZADO: Removido o 'px-4' e adicionado 'w-full'
    <main className="flex flex-col items-center w-full">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Projects />
      <GithubContributions />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}