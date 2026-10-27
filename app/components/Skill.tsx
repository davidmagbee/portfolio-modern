/* eslint-disable @next/next/no-img-element */

// Visible labels identify decorative logos for touch and assistive-technology users.
export default function Skill({
  skill,
}: {
  skill: { title: string; icon: string };
}) {
  return (
    <div className="skill">
      <img src={skill.icon} alt="" width={64} height={64} loading="lazy" />
      <span>{skill.title}</span>
    </div>
  );
}
