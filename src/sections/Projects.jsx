import { projects } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Full-stack applications built with Java, Spring Boot, and modern frontend tooling."
        />

        <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="w-[85vw] shrink-0 snap-start sm:w-[70vw] md:w-[520px] lg:w-[400px]"
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}