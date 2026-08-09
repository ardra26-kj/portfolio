import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-glass flex gap-4 rounded-2xl p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber/20 to-teal/20 text-teal">
              <FiBookOpen className="text-xl" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-text">{edu.degree}</h3>
              <p className="mt-1 text-sm text-muted">{edu.institution}</p>
              <p className="text-xs text-muted/80">{edu.affiliation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
