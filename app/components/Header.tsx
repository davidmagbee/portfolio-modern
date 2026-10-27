import { SocialIcon } from "react-social-icons";
import { Social } from "@/typings";

// Keep CMS social destinations, excluding Better Farm, with accessible icon labels.
export default function Header({ socials }: { socials: Social[] }) {
  const visibleSocials = socials.filter(
    (social) =>
      !/better\s*farm/i.test(social.title) &&
      !/betterfarm\.org/i.test(social.url),
  );
  return (
    <header className="site-header">
      <a className="brand" href="#hero">
        David Magbee
      </a>
      <nav aria-label="Social and contact links">
        {visibleSocials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            label={social.title}
            fgColor="#b6b9b2"
            bgColor="transparent"
            style={{ width: 48, height: 48 }}
          />
        ))}
        <a className="contact-link" href="#contact">
          Let’s connect ↗
        </a>
      </nav>
    </header>
  );
}
