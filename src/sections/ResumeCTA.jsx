import { motion } from "framer-motion";
import { FiDownload, FiEye } from "react-icons/fi";
import { profile } from "../data/portfolio";
import Button from "../components/Button";

export default function ResumeCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="card-glass flex flex-col items-center gap-6 rounded-3xl p-10 text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text">
            Want to know more about my experience?
          </h2>
          <p className="max-w-lg text-muted">
            Grab a copy of my resume for full details on my background, skills, and projects.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href={profile.resume} download icon={FiDownload} variant="primary">
              Download Resume
            </Button>
            <Button href={profile.resume} target="_blank" rel="noreferrer" icon={FiEye} variant="outline">
              View Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
