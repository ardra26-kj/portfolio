import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-text">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs text-muted">{profile.role}</p>
        </div>

        <SocialLinks />

        <a
          href="#home"
          aria-label="Back to top"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:text-teal hover:border-teal/60 transition-colors duration-300"
        >
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
