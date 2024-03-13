'use client';

import Image from "next/image";
import Link from "next/link";
import About from "./components/About";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { useEffect, useState } from "react";

// TODO: Add revalidation && getStaticProps when possible
// type Props = {
//   pageInfo: PageInfo;
//   experiences: Experience[];
//   skills: Skill[];
//   projects: Project[];
//   socials: Social[];
// };

export default function Home() {
  const [socials, setSocials] = useState<Social[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>({} as PageInfo);

  useEffect(() => {
    Promise.all([
      fetchSocials(),
      fetchExperience(),
      fetchSkills(),
      fetchProjects(),
      fetchPageInfo(),
    ]).then(([socialData, experienceData, skillData, projectData, pageInfoData]) => {
      setSocials(socialData);
      setExperiences(experienceData);
      setSkills(skillData);
      setProjects(projectData);
      setPageInfo(pageInfoData);
    });
  }, []);
  
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#468621]/80">
      <Header socials={socials}/>

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-start">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>
      
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
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
  );
}