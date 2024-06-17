import Page from '../components/Page';

export default function AboutUs() {
  return (
    <Page>
      <div className="flex flex-col w-full items-center text-teal-400 gap-2">
        <h2 className="text-3xl font-bold">Smorgon Mafia</h2>
        <p className="text-xl">Smorgon team - со Сморгони двое, из Минска один.</p>
        <p>Our close-knit team spent many sleepless nights together creating this unforgettable online store.</p>
      </div>
    </Page>
  );
}
