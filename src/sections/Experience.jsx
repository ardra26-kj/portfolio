import { experience } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 bg-surface/40">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <TimelineItem key={job.role} index={i} isLast={i === experience.length - 1}>
              <div className="card-glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-text">{job.role}</h3>
                  <span className="font-mono text-xs text-teal">{job.duration}</span>
                </div>
                <a
                  href={job.orgUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-1 inline-block text-sm text-muted hover:text-teal transition-colors duration-300"
                >
                  {job.org}
                </a>
                <p className="mt-1 text-xs text-muted">{job.location}</p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
