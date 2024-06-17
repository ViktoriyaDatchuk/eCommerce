import Page from '../components/Page';
import TeamMember from '../components/TeamMember';
import { team } from '../data/team';

export default function AboutUs() {
  return (
    <Page>
      <div className="flex flex-col w-full items-center text-teal-400 gap-1">
        <h2 className="text-3xl font-bold">Smorgon Mafia</h2>
        <p className="text-xl">Smorgon team - со Сморгони двое, из Минска один.</p>
        <p>Our close-knit team spent many sleepless nights together creating this unforgettable online store.</p>
        <div className="flex justify-between my-6 mx-6 flex-col md:flex-row">
          {team.map((item) => (
            <TeamMember
              image={item.image}
              name={item.name}
              role={item.role}
              github={item.github}
              bio={item.bio}
              description={item.description}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
