import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import ResumeCTA from "./sections/ResumeCTA";
import GithubActivity from "./sections/GithubActivity";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ResumeCTA />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
