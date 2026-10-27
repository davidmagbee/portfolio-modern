/* eslint-disable @next/next/no-img-element */
import { WorkScreenshot } from "@/typings";
import { urlFor } from "@/sanity/lib/sanity";

// Optional evidence stays in normal flow, with full-size links and meaningful alt text.
export default function WorkScreenshots({
  screenshots,
  company,
}: {
  screenshots?: WorkScreenshot[];
  company: string;
}) {
  if (!screenshots?.length) return null;
  return (
    <div className="work-screenshots">
      {screenshots.map((shot) => (
        <figure key={shot._key}>
          <a href={urlFor(shot).url()}>
            <img
              src={urlFor(shot).width(900).url()}
              alt={shot.alt || `${company} work screenshot`}
              loading="lazy"
            />
          </a>
          {shot.caption && <figcaption>{shot.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
