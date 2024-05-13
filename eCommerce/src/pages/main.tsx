export default function Main() {
  const baseStyle =
    'px-10 py-5 font-sans font-bold uppercase text-2xl rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500';

  return (
    <div className="flex flex-col justify-end items-center flex-1 bg-[url('/bg/bg-home.jpg')] bg-center bg-cover">
      <div className="max-w-3xl font-sans text-2xl bg-gray-900">
        Kino<span className="font-bold text-orange-400">GO-VNO</span>
      </div>
      <div className="flex justify-between p">
        <button type="button" className={baseStyle}>
          comedy
        </button>
        <button type="button" className={baseStyle}>
          drama
        </button>
        <button type="button" className={baseStyle}>
          action
        </button>
        <button type="button" className={baseStyle}>
          horror
        </button>
      </div>
    </div>
  );
}
