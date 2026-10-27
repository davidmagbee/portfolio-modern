/* eslint-disable @next/next/no-img-element */
import { CareerEntry } from "@/data/careerHistory";

// Résumé dates stay at their original precision instead of inventing start/end days.
export default function ExperienceCard({
  experience: job,
}: {
  experience: CareerEntry;
}) {
  return (
    <article className="experience-card">
      {job.logo && (
        <img
          className="company-logo"
          src={job.logo}
          alt={`${job.company} logo`}
          width={80}
          height={80}
          loading="lazy"
        />
      )}
      <h3>{job.company}</h3>
      <p className="job-title">{job.role}</p>
      <p className="muted">
        {job.dates} · {job.location}
      </p>
      <ul>
        {job.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
