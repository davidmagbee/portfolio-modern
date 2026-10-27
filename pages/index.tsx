import Head from "next/head";
import Image from "next/image";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { Experience, PageInfo, Project, Social } from "@/typings";
import { sanityClient, hasSanityConfig } from "@/sanity/lib/sanity";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import WorkExperience from "@/app/components/WorkExperience";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

type Content = {
  pageInfo: PageInfo | null;
  experiences: Experience[];
  projects: Project[];
  socials: Social[];
};

// Normal document scrolling allows long content, zoom, and mobile browser chrome.
export default function Home({
  pageInfo,
  experiences,
  projects,
  socials,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>David Magbee | Full Stack Developer</title>
        <meta
          name="description"
          content="David Magbee’s development portfolio: selected projects, experience, and skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header socials={socials} />
      <main id="main">
        <section id="hero" aria-label="Introduction">
          <Hero pageInfo={pageInfo} hasSkills />
        </section>
        {pageInfo && (
          <section id="about" aria-labelledby="about-title">
            <About pageInfo={pageInfo} />
          </section>
        )}
        <section id="experience" aria-labelledby="experience-title">
          <WorkExperience experiences={experiences} />
        </section>
        <section id="skills" aria-labelledby="skills-title">
          <Skills />
        </section>
        <section id="projects" aria-labelledby="projects-title">
          <Projects projects={projects} />
        </section>
        <section id="contact" aria-labelledby="contact-title">
          <Contact />
        </section>
      </main>
      <footer className="site-footer">
        {/* Restore the original portrait affordance with an explicit accessible name. */}
        <a href="#hero" aria-label="Back to top" className="back-to-top">
          <Image src="/david-pointing.png" alt="" width={48} height={48} />
        </a>
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps<Content> = async () => {
  // Query CMS directly: builds must not depend on their own API server running.
  // Missing configuration permits local layout work without fabricated CMS records.
  if (!hasSanityConfig) {
    console.warn(
      "Sanity is not configured: rendering local highlights only. Configure CMS before deployment.",
    );
    return {
      props: {
        pageInfo: null,
        experiences: [],
        projects: [],
        socials: [],
      },
      revalidate: 60,
    };
  }
  const [pageInfo, experiences, projects, socials] = await Promise.all([
    sanityClient.fetch<PageInfo | null>('*[_type == "pageInfo"][0]'),
    sanityClient.fetch<Experience[]>(
      '*[_type == "experience"] | order(dateStarted desc) {..., technologies[]->}',
    ),
    sanityClient.fetch<Project[]>(
      '*[_type == "project"] {..., technologies[]->}',
    ),
    sanityClient.fetch<Social[]>('*[_type == "social"]'),
  ]);
  return {
    props: { pageInfo, experiences, projects, socials },
    revalidate: 10000,
  };
};
