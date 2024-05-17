import Page from '../components/Page';

export default function Main() {
  return (
    <Page className="flex flex-col justify-center  items-center flex-1 bg-[url('/bg/bg-home.png')] bg-center bg-cover">
      <div className="max-w-3xl w-full py-10 mt-40 font-sans text-white  bg-gray-900 rounded-md">
        <h1 className="text-7xl mb-4">
          Kino<span className="font-bold text-orange-400">GO-VNO</span>
        </h1>
        <div className="text-2xl font-bold text-teal-400">
          <p>Blast from the Past:</p>
          <p>Blu-ray Movies - The Ancient Relic of Cinematic Enjoyment</p>
        </div>
      </div>
    </Page>
  );
}
