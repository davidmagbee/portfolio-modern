import Image from "next/image";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/sanity";

// Stable text remains readable without JavaScript and respects reduced motion.
export default function Hero({
  pageInfo,
  hasSkills,
}: {
  pageInfo: PageInfo | null;
  hasSkills: boolean;
}) {
  return (
    <div className="hero section-shell">
      <div className="hero-orbit" aria-hidden="true" />
      <Image
        className="hero-portrait"
        src={
          pageInfo?.heroImage ? urlFor(pageInfo.heroImage).url() : "/david.png"
        }
        alt="David Magbee"
        width={128}
        height={128}
        priority
      />
      <p className="eyebrow">{pageInfo?.role || "Full Stack Developer"}</p>
      <h1>
        Hello, my name is <span>{pageInfo?.name || "David Magbee"}.</span>
      </h1>
      <nav className="hero-nav" aria-label="Portfolio sections">
        {pageInfo && (
          <a className="heroButton" href="#about">
            About
          </a>
        )}
        <a className="heroButton" href="#experience">
          Experience
        </a>
        {hasSkills && (
          <a className="heroButton" href="#skills">
            Skills
          </a>
        )}
        <a className="heroButton" href="#projects">
          Projects
        </a>
        <a className="heroButton" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  );
}
