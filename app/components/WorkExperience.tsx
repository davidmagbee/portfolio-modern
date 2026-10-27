import ExperienceCard from "./ExperienceCard";
import WorkScreenshots from "./WorkScreenshots";
import { Experience } from "@/typings";
import { careerHistory } from "@/data/careerHistory";
import { cookieFinance } from "@/data/cookieFinance";

// Résumé is authoritative for career copy; CMS supplies optional Cookie Finance evidence.
export default function WorkExperience({
  experiences,
}: {
  experiences: Experience[];
}) {
  const cookieJobs = experiences.filter((job) =>
    /cookie\s*finance/i.test(job.company),
  );

  const screenshots = cookieJobs.flatMap((job) => job.screenshots || []);
  return (
    <div className="section-shell">
      <h2 id="experience-title" className="section-title">
        Experience
      </h2>
      <article className="experience-card cookie-highlight">
        <p className="eyebrow">Selected work</p>
        <h3>Cookie Finance</h3>
        <p className="job-title">{cookieFinance.role}</p>
        <p className="muted">{cookieFinance.dates}</p>
        <p>{cookieFinance.summary}</p>
        <div className="highlights-grid">
          {cookieFinance.highlights.map((highlight) => (
            <div key={highlight.title}>
              <h4>{highlight.title}</h4>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
        <WorkScreenshots screenshots={screenshots} company="Cookie Finance" />
      </article>
      <div className="experience-grid">
        {careerHistory.map((job) => (
          <ExperienceCard key={job.id} experience={job} />
        ))}
      </div>
    </div>
  );
}
