import { RotatingLines } from 'react-loader-spinner';

export default function LoadingModal() {
  return (
    <div className="fixed w-full h-full bg-black opacity-70 flex inset-0 justify-center items-center z-50">
      <RotatingLines
        visible
        width="50"
        strokeWidth="3"
        strokeColor="rgb(251 146 60)"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
