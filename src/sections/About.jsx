import { motion } from "framer-motion";
import { aboutFocus, profile } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Backend-focused, full-stack capable"
          description="A quick look at who I am and what I care about as a developer."
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.85fr_1.15fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="card-glass rounded-3xl p-6"
          >
            <img
              src={profile.avatar}
              alt={`${profile.name} at work`}
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <dl className="mt-6 space-y-3 font-mono text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted">Focus</dt>
                <dd className="text-text">Java · Spring Boot</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted">Status</dt>
                <dd className="text-teal">Open to opportunities</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Based in</dt>
                <dd className="text-text">Kerala, India</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="leading-relaxed text-muted">
              I&apos;m a recent graduate and full-stack developer who enjoys designing
              clean, dependable backend systems as much as building the interfaces
              on top of them. My core toolkit is Java and Spring Boot, paired with
              REST APIs and MySQL, and I extend it with React on the frontend to
              ship complete, working products rather than isolated pieces.
            </p>
            <p className="leading-relaxed text-muted">
              I hold a Bachelor of Vocation in Mathematics and Artificial
              Intelligence, which shaped how I approach problems: structured,
              analytical, and grounded in fundamentals. Right now my focus is
              backend engineering — writing secure, well-tested APIs and services
              that scale — while staying comfortable across the stack.
            </p>

            <div>
              <h3 className="font-display text-sm uppercase tracking-wide text-muted mb-3">
                What I&apos;m interested in
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutFocus.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-text"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
