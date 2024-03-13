// import { GetStaticProps } from "next";
// import { fetchPageInfo } from "@/utils/fetchPageInfo";
// import { fetchExperience } from "@/utils/fetchExperience";
// import { fetchSkills } from "@/utils/fetchSkills";
// import { fetchProjects } from "@/utils/fetchProjects";
// import { fetchSocials } from "@/utils/fetchSocials";
// import { Experience, PageInfo, Project, Skill, Social } from "@/typings";

// type Props = {
//     pageInfo: PageInfo;
//     experiences: Experience[];
//     skills: Skill[];
//     projects: Project[];
//     socials: Social[];
//   };

// TODO: Add revalidation && getStaticProps when possible

// export const getStaticProps: GetStaticProps<Props> = async () => {
//     const pageInfo: PageInfo = await fetchPageInfo();
//     const experiences: Experience[] = await fetchExperience();
//     const skills: Skill[] = await fetchSkills();
//     const projects: Project[] = await fetchProjects();
//     const socials: Social[] = await fetchSocials();
//     return {
//       props: {
//         pageInfo,
//         experiences,
//         skills,
//         projects,
//         socials,
//       },
//       revalidate: 10000,
//     };
//   };