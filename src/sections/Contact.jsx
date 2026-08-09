import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";

const details = [
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: "linkedin.com/in/ardra-kj-b435582a1", href: profile.linkedin },
  { icon: FiGithub, label: "github.com/ardra26-kj", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, project, or question in mind? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {details.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="focus-ring card-glass flex items-center gap-4 rounded-2xl p-4 text-sm text-muted transition-colors duration-300 hover:text-teal hover:border-teal/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-teal">
                  <Icon />
                </span>
                {label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-glass rounded-3xl p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
