interface ButtonProps {
  text: string;
  isPrimary: boolean;
  onClick?: () => void;
  addClass?: string;
  submit?: boolean;
}

export default function Button({ text, isPrimary, onClick, addClass, submit = false }: ButtonProps) {
  const basicStyle = 'px-2.5 py-1 font-bold uppercase rounded-md hover:bg-pink-600 transition ease-in delay-50';
  const buttonStyle = isPrimary ? `${basicStyle}  bg-teal-400` : `${basicStyle}  bg-orange-400`;
  const className = addClass ? `${buttonStyle} ${addClass}` : buttonStyle;

  return (
    <>
      {submit && (
        <button type="submit" className={className} onClick={onClick}>
          {text}
        </button>
      )}
      {!submit && (
        <button type="button" className={className} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
}
