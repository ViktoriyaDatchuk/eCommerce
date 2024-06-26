import ReactDOM from 'react-dom';
import { Image } from '@commercetools/platform-sdk';
import Slider from './Slider';
import Button from './Button';

const portal = document.getElementById('portal') as HTMLElement;

interface MovieModalProps {
  onClose: () => void;
  images: Image[];
}

export default function MovieModal({ onClose, images }: MovieModalProps) {
  const modalStyle =
    'fixed bg-[#ffffffcc] left-0 top-0 w-screen h-screen duration-700 flex items-center justify-center cursor-pointer';
  const modalContentSTyle =
    'max-w-[450px] flex flex-col gap-8 items-center justify-center w-4/5 sm:w-3/4 lg:w-3/5 xl:w-2/4 2xl:w-2/5 rounded-xl bg-[#00091acc] p-8 lg:p-10';
  const sliderStyle = 'w-full drop-shadow-[0_4px_30px_rgba(24,201,176,1)]';

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  return ReactDOM.createPortal(
    <div
      id="modal"
      className={modalStyle}
      onClick={(e: React.MouseEvent) => {
        console.log((e.target as HTMLElement).id);
        if ((e.target as HTMLElement).id === 'modal') {
          onClose();
        }
      }}
    >
      <div className={modalContentSTyle}>
        <div className={sliderStyle}>
          <Slider slides={images} isModal />
        </div>
        <Button text="Close" onClick={onClose} isPrimary addClass="lg:px-12" />
      </div>
    </div>,
    portal
  );
}
