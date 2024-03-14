// 'use client';

import Image from "next/image";
import Link from "next/link";
import About from "../app/components/About";
import Contact from "../app/components/Contact";
import WorkExperience from "../app/components/WorkExperience";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import Projects from "../app/components/Projects";
import Skills from "../app/components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
// import { useEffect, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType, NextPageContext } from "next";
import RootLayout from "@/app/layout";
import Head from "next/head";

// Attempt: incorporate getStaticProps && revalidation
// type Props = {
//   pageInfo: PageInfo;
//   experiences: Experience[];
//   skills: Skill[];
//   projects: Project[];
//   socials: Social[];
// };
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  // unused to do the use of getStaticProps
  // const [socials, setSocials] = useState<Social[]>([]);
  // const [experiences, setExperiences] = useState<Experience[]>([]);
  // const [skills, setSkills] = useState<Skill[]>([]);
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [pageInfo, setPageInfo] = useState<PageInfo>({} as PageInfo);

  // useEffect(() => {
  //   Promise.all([
  //     fetchSocials(),
  //     fetchExperience(),
  //     fetchSkills(),
  //     fetchProjects(),
  //     fetchPageInfo(),
  //   ]).then(([socialData, experienceData, skillData, projectData, pageInfoData]) => {
  //     setSocials(socialData);
  //     setExperiences(experienceData);
  //     setSkills(skillData);
  //     setProjects(projectData);
  //     setPageInfo(pageInfoData);
  //   });
  // }, []);

  return (
    <RootLayout>
      <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#468621]/80">
        <Head>
          <title>David Magbee | Full Stack Developer</title>
          <meta
            name="David Magbee's Portfolio"
            content="A modern retelling of a developer's portfolio."
          />
          <link rel="icon" type="image" href="/favicon.ico" />
        </Head>
        <Header socials={socials} />

        <section id="hero" className="snap-center">
          <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-start">
          <About pageInfo={pageInfo} />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>

        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="snap-start">
          <Contact />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src="/david-pointing.png"
                alt="david"
                width={128}
                height={128}
              />
            </div>
          </footer>
        </Link>
      </main>
    </RootLayout>
  );
}

export const getStaticProps: GetStaticProps<{
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10000,
  };
};
