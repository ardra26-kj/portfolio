import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function SocialLinks({ className = "" }) {
  const links = [
    { icon: FiGithub, href: profile.github, label: "GitHub" },
    { icon: FiLinkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-teal/60 hover:text-teal hover:-translate-y-0.5"
        >
          <Icon className="text-lg" />
        </a>
      ))}
    </div>
  );
}
