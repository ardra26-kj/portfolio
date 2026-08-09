import { skillGroups } from "../data/portfolio";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="A practical toolkit spanning backend, frontend, database, and developer tooling."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} title={group.title} skills={group.skills} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
