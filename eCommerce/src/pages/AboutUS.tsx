import Page from '../components/Page';
import TeamMember from '../components/TeamMember';
import { team } from '../data/team';

export default function AboutUs() {
  const pageStyle = 'flex flex-col w-full items-center text-teal-400 gap-1';
  const teamContainerStyle = 'flex justify-between my-6 mx-6 flex-col md:flex-row';
  const svgStyle =
    'hover:invert-[.27] hover:sepia-[.84] hover:saturate-[34.75] hover:hue-rotate-[328deg] hover:brightness-[1.02] hover:contrast-[.98]';

  return (
    <Page>
      <div className={pageStyle}>
        <h2 className="text-3xl font-bold">Smorgon Mafia</h2>
        <p className="text-xl">Smorgon team - со Сморгони двое, из Минска один.</p>
        <p>Our close-knit team spent many sleepless nights together creating this unforgettable online store.</p>
        <div className={teamContainerStyle}>
          {team.map((item) => (
            <TeamMember
              image={item.image}
              name={item.name}
              role={item.role}
              github={item.github}
              description={item.description}
              key={item.name}
            />
          ))}
        </div>
        <a className="self-end mr-2 mb-2" href="https://rs.school/" target="_blank" rel="noreferrer">
          <img className={svgStyle} src="/github.svg" alt="github" />
        </a>
      </div>
    </Page>
  );
}
