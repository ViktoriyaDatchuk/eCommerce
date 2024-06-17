import { TeamItem } from '../data/team';

export default function TeamMember({ image, name, role, github, bio, description }: TeamItem) {
  const teamStyle = 'flex flex-col items-center md:max-w-[30%]';
  const teamItemStyle = `${teamStyle} mt-20`;
  const teamLeadStyle = `${teamStyle} order-first md:order-none`;

  return (
    <div className={role === 'Team Lead' ? teamLeadStyle : teamItemStyle}>
      <img src={image} alt={image} className="w-40 h-40 object-cover rounded-[50%]" />
      <h4 className="font-bold text-lg mt-2 text-orange-400">{name}</h4>
      <p className="font-bold text-[#CF8C54]">{role}</p>
      <a href={github} className="text-[#A47E5F] font-bold hover:text-pink-600 transition ease-in delay-50">
        GitHub
      </a>
      <p className="mt-2">{bio}</p>
      <p>{description}</p>
    </div>
  );
}
