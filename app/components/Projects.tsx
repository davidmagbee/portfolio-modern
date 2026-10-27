/* eslint-disable @next/next/no-img-element */
import { Project } from "@/typings";
import { urlFor } from "@/sanity/lib/sanity";
import { featuredWork } from "@/data/featuredWork";

// Keep authored highlights alongside CMS projects; suppress duplicate titles/URLs.
export default function Projects({ projects }: { projects: Project[] }) {
  const archived = projects.filter(
    (project) =>
      !featuredWork.some(
        (work) =>
          work.title.toLowerCase() === project.title?.toLowerCase() ||
          (work.href &&
            project.linkToBuild?.replace(/\/$/, "") ===
              work.href.replace(/\/$/, "")),
      ),
  );
  return (
    <div className="section-shell">
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>
      <div className="project-list">
        {featuredWork.map((work) => (
          <article key={work.id} className="project-card">
            <figure>
              <a
                href={work.image}
                aria-label={`View full screenshot of ${work.title}`}
              >
                <img
                  className="project-image"
                  src={work.image}
                  alt={work.alt}
                  loading="lazy"
                />
              </a>
              <figcaption>{work.caption}</figcaption>
            </figure>
            <div className="project-copy">
              <p className="eyebrow">{work.category}</p>
              <h3>{work.title}</h3>
              <p>{work.summary}</p>
              <ul
                className="technology-list"
                aria-label={`${work.title} technologies`}
              >
                {work.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {work.href && (
                <a className="project-link" href={work.href}>
                  Explore the live app ↗
                </a>
              )}
            </div>
          </article>
        ))}
        {archived.map((project) => (
          <article key={project._id} className="project-card">
            {project.image && (
              <figure>
                <img
                  className="project-image"
                  src={urlFor(project.image).width(1200).url()}
                  alt={project.title}
                  loading="lazy"
                />
              </figure>
            )}
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>
                {/* CMS descriptions can contain plain-text demo URLs; expose the video as a real link. */}
                {project.summary?.replace(
                  /Video Demo:\s*https:\/\/www\.youtube\.com\/watch\?v=SMijkdAlL-c\s*/i,
                  "",
                )}
              </p>
              <ul className="technology-list">
                {project.technologies?.filter(Boolean).map((tech) => (
                  <li key={tech._id}>{tech.title}</li>
                ))}
              </ul>
              {project.summary?.includes(
                "https://www.youtube.com/watch?v=SMijkdAlL-c",
              ) && (
                <p>
                  <a
                    className="project-link"
                    href="https://www.youtube.com/watch?v=SMijkdAlL-c"
                  >
                    Watch video demo ↗
                  </a>
                </p>
              )}
              {project.linkToBuild && (
                <a className="project-link" href={project.linkToBuild}>
                  View project ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
