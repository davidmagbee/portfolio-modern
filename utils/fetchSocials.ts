import { Social } from "@/typings";

export const fetchSocials = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_STUDIO_BASE_URL}/api/socials`);
    const data = await res.json();
    const socials: Social[] = data.socials;
    return socials
}
