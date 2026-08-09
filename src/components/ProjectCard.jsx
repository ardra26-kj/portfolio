import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiPlus } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  if (project.placeholder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.12 }}
        className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-border p-8 text-center text-muted"
      >
        <FiPlus className="text-2xl mb-3 text-teal" />
        <h3 className="font-display text-lg text-text mb-1">{project.name}</h3>
        <p className="text-sm max-w-xs">{project.description}</p>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="card-glass group flex flex-col overflow-hidden rounded-3xl transition-colors duration-300 hover:border-teal/40"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-muted">
            preview coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text">{project.name}</h3>
        <p className="font-mono text-xs text-teal mt-1">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {project.features.length > 0 && (
          <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-muted sm:grid-cols-2">
            {project.features.slice(0, 6).map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text hover:border-teal/60 hover:text-teal transition-colors duration-300"
            >
              <FiGithub /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber to-teal px-4 py-2 text-sm font-semibold text-[#0b0e14] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
