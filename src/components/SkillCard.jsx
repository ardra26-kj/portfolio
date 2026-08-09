import { motion } from "framer-motion";

export default function SkillCard({ title, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="card-glass rounded-2xl p-6 transition-colors duration-300 hover:border-teal/40"
    >
      <h3 className="font-display text-base font-semibold text-text mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted transition-colors duration-300 hover:text-teal hover:border-teal/40"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
