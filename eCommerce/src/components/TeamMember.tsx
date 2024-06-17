import { TeamItem } from '../data/team';

export default function TeamMember({ image, name, role, github, description }: TeamItem) {
  const teamStyle = 'flex flex-col items-center md:max-w-[30%]';
  const teamItemStyle = `${teamStyle} mt-16`;
  const teamLeadStyle = `${teamStyle} order-first md:order-none`;
  const imageStyle = 'w-40 h-40 object-cover rounded-[50%]';
  const nameStyle = 'font-bold text-lg mt-2 text-orange-400';
  const roleStyle = 'font-bold text-[#CF8C54]';
  const githubLinkStyle = 'text-[#A47E5F] font-bold hover:text-pink-600 transition ease-in delay-50';

  return (
    <div className={role === 'Team Lead' ? teamLeadStyle : teamItemStyle}>
      <img src={image} alt={image} className={imageStyle} />
      <h4 className={nameStyle}>{name}</h4>
      <p className={roleStyle}>{role}</p>
      <a href={github} className={githubLinkStyle} target="_blank" rel="noreferrer">
        GitHub
      </a>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
}
