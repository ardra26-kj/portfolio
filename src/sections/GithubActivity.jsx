import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiFolder, FiGithub, FiStar, FiUsers } from "react-icons/fi";
import { profile } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";

const username = profile.github.split("/").filter(Boolean).pop();

export default function GithubActivity() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setStats({
            repos: data.public_repos,
            followers: data.followers,
          });
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const cards = [
    { icon: FiFolder, label: "Public Repositories", value: stats?.repos },
    { icon: FiUsers, label: "Followers", value: stats?.followers },
    { icon: FiStar, label: "Focus", value: "Java · Spring Boot" },
  ];

  return (
    <section className="py-24 sm:py-28 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Developer Activity"
          title="On GitHub"
          description="Live stats pulled directly from the GitHub API."
        />

        {error && (
          <p className="mb-6 font-mono text-sm text-muted">
            GitHub stats are unavailable right now — check the profile directly below.
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-glass rounded-2xl p-6"
            >
              <card.icon className="text-xl text-teal mb-3" />
              <p className="font-display text-2xl font-semibold text-text">
                {card.value === undefined && !error ? "—" : error && typeof card.value !== "string" ? "N/A" : card.value}
              </p>
              <p className="mt-1 text-sm text-muted">{card.label}</p>
            </motion.div>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="focus-ring mt-8 inline-flex items-center gap-2 text-sm text-text hover:text-teal transition-colors duration-300"
        >
          <FiGithub /> View full GitHub profile
        </a>
      </div>
    </section>
  );
}
