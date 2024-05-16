interface LogogProps {
  onClick: () => void;
}

export default function Logo({ onClick }: LogogProps) {
  return (
    <button
      type="button"
      className="px-4 py-0.5 border-solid border-2 rounded-md border-orange-400 text-white hover:pointer"
      onClick={onClick}
    >
      Kino<span className="font-bold text-orange-400">GO-VNO</span>
    </button>
  );
}
