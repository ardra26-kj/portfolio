import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-amber/20 blur-[120px]" />
        <div className="absolute bottom-0 left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-teal/10 blur-[110px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M42 0H0V42" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-teal mb-4">
            Hi, I&apos;m {profile.name.split(" ")[0]} {profile.name.split(" ").slice(1).join(" ")}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-text">
            <span className="text-gradient">{profile.role}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary">
              View My Projects
            </Button>
            <Button href={profile.resume} download variant="outline" icon={FiDownload}>
              Download Resume
            </Button>
            <Button href="#contact" variant="ghost" icon={FiMail}>
              Contact Me
            </Button>
          </div>

          <SocialLinks className="mt-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-amber/30 to-teal/20 blur-2xl" />
          <div className="card-glass overflow-hidden rounded-[2rem] p-2">
            <img
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
              loading="eager"
            />
          </div>
          <div className="card-glass absolute -bottom-5 -left-6 rounded-2xl px-4 py-3 font-mono text-xs text-teal shadow-lg">
            {"<Backend Developer />"}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-teal"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown className="text-xl" />
      </motion.a>
    </section>
  );
}
