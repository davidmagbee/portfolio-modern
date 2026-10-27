/* eslint-disable @next/next/no-img-element */
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/sanity";

// Content determines section height so longer biographies remain readable at zoom.
export default function About({ pageInfo }: { pageInfo: PageInfo }) {
  return (
    <div className="section-shell">
      <h2 id="about-title" className="section-title">
        About
      </h2>
      <div className="about-layout">
        {pageInfo.profilePic && (
          <img
            className="about-portrait"
            src={urlFor(pageInfo.profilePic).width(700).url()}
            alt="David on the river"
            loading="lazy"
          />
        )}
        <div>
          <h3>A bit of background about me.</h3>
          <p>{pageInfo.backgroundInformation}</p>
        </div>
      </div>
    </div>
  );
}
