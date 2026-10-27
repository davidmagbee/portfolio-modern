import Skill from "./Skill";
import { portfolioSkills } from "@/data/skills";

// CSS grid follows this DOM order at every responsive breakpoint.
export default function Skills() {
  return (
    <div className="section-shell">
      <h2 id="skills-title" className="section-title">
        Skills
      </h2>
      <div className="skills-grid">
        {portfolioSkills.map((skill) => (
          <Skill key={skill.title} skill={skill} />
        ))}
      </div>
    </div>
  );
}
