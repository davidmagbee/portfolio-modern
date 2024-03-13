import { Experience } from "@/typings";

export const fetchExperience = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_STUDIO_BASE_URL}/api/experience`);
    const data = await res.json();
    const experiences: Experience[] = data.experiences;
    return experiences
}
